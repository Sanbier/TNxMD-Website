"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Gamepad2, Search } from "lucide-react";
import { DEFAULT_CONTACT_CHANNELS } from "@/config/contacts";
import { TelegramIcon, ZaloIcon } from "./SocialLinks";
import { useToast } from "./Toast";

export const MobileBottomDock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [scrubIndex, setScrubIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { showToast } = useToast();
  const isDetailPage = pathname?.startsWith("/game/");

  const gridRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const suppressClickUntilRef = useRef<number>(0);
  const actionsRef = useRef<(targetTab: number) => void>(() => {});

  useEffect(() => {
    setActiveTab(0);
  }, [pathname]);

  const triggerTabAction = useCallback(
    (tabIdx: number) => {
      if (tabIdx === 0) {
        setActiveTab(0);
        if (pathname === "/") {
          const catalog = document.getElementById("catalog");
          if (catalog) {
            catalog.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          router.push("/#catalog");
        }
        return;
      }

      if (tabIdx === 1) {
        setActiveTab(1);
        if (pathname === "/") {
          const searchInput = document.getElementById("game-search-input");
          if (searchInput) {
            searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
            searchInput.focus({ preventScroll: true });
          }
        } else {
          router.push("/#catalog");
        }
        return;
      }

      if (tabIdx === 2) {
        showToast(
          "Đang mở Nhóm Zalo...",
          "Chuyển tiếp đến nhóm cộng đồng TNxMD",
          "info"
        );
        window.open(
          DEFAULT_CONTACT_CHANNELS.zalo,
          "_blank",
          "noopener,noreferrer"
        );
        return;
      }

      if (tabIdx === 3) {
        showToast("Đang mở Shop Telegram...", "Chuyển tiếp đến @tnxmd", "info");
        window.open(
          DEFAULT_CONTACT_CHANNELS.telegram,
          "_blank",
          "noopener,noreferrer"
        );
      }
    },
    [pathname, router, showToast]
  );

  useEffect(() => {
    actionsRef.current = triggerTabAction;
  }, [triggerTabAction]);

  // Cử chỉ vuốt lướt ngón tay ngang thanh Dock (iOS 26 Liquid Glass TabBar Scrubbing)
  useEffect(() => {
    const grid = gridRef.current;
    if (isDetailPage || !grid) return;

    let tracking = false;
    let scrubbing = false;
    let startX = 0;
    let startY = 0;
    let gridLeft = 0;
    let gridWidth = 320;
    let continuousIndex = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const rect = grid.getBoundingClientRect();
      tracking = true;
      scrubbing = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      gridLeft = rect.left;
      gridWidth = Math.max(rect.width, 1);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!tracking || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      if (!scrubbing) {
        if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 8) {
          tracking = false;
          return;
        }
        if (Math.abs(dx) > 8 && Math.abs(dx) >= Math.abs(dy)) {
          scrubbing = true;
          if (pillRef.current) {
            pillRef.current.style.transition = "none";
          }
        } else {
          return;
        }
      }

      if (e.cancelable) e.preventDefault();

      const relX = Math.max(0, Math.min(gridWidth, touch.clientX - gridLeft));
      const slotFloat = (relX / gridWidth) * 4 - 0.5;
      continuousIndex = Math.max(-0.08, Math.min(3.08, slotFloat));
      const nearest = Math.max(0, Math.min(3, Math.round(continuousIndex)));

      setScrubIndex((prev) => (prev === nearest ? prev : nearest));

      if (pillRef.current) {
        pillRef.current.style.transform = `translate3d(${
          continuousIndex * 100
        }%, 0, 0) scale(1.06)`;
      }
    };

    const onTouchEnd = () => {
      if (!tracking) return;
      tracking = false;

      if (!scrubbing) return;
      scrubbing = false;
      suppressClickUntilRef.current = performance.now() + 250;

      const targetTab = Math.max(0, Math.min(3, Math.round(continuousIndex)));
      const snapTab = targetTab <= 1 ? targetTab : activeTab;

      setScrubIndex(null);
      if (pillRef.current) {
        pillRef.current.style.transition =
          "transform 340ms cubic-bezier(0.34, 1.45, 0.64, 1)";
        pillRef.current.style.transform = `translate3d(${
          snapTab * 100
        }%, 0, 0) scale(1)`;
      }

      actionsRef.current(targetTab);
    };

    grid.addEventListener("touchstart", onTouchStart, { passive: true });
    grid.addEventListener("touchmove", onTouchMove, { passive: false });
    grid.addEventListener("touchend", onTouchEnd, { passive: true });
    grid.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      grid.removeEventListener("touchstart", onTouchStart);
      grid.removeEventListener("touchmove", onTouchMove);
      grid.removeEventListener("touchend", onTouchEnd);
      grid.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [isDetailPage, activeTab]);

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (performance.now() < suppressClickUntilRef.current) return;
    triggerTabAction(1);
  };

  const handleZaloClick = (e: React.MouseEvent) => {
    if (performance.now() < suppressClickUntilRef.current) {
      e.preventDefault();
      return;
    }
    showToast(
      "Đang mở Nhóm Zalo...",
      "Chuyển tiếp đến nhóm cộng đồng TNxMD",
      "info"
    );
  };

  const handleTelegramClick = (e: React.MouseEvent) => {
    if (performance.now() < suppressClickUntilRef.current) {
      e.preventDefault();
      return;
    }
    showToast("Đang mở Shop Telegram...", "Chuyển tiếp đến @tnxmd", "info");
  };

  if (isDetailPage) {
    return null;
  }

  const displayTab = scrubIndex ?? activeTab;

  return (
    <nav
      aria-label="Điều hướng nhanh điện thoại"
      className="fixed bottom-3 left-3 right-3 z-40 sm:hidden glass-dock-2 rounded-2xl p-1.5"
      style={{ paddingBottom: "max(0.4rem, env(safe-area-inset-bottom))" }}
    >
      <div
        ref={gridRef}
        className="relative grid grid-cols-4 items-center text-[11px] font-bold text-slate-200 select-none"
      >
        {/* Liquid Glass Sliding Capsule Pill (Interactive Scrubbing + 120Hz Spring Snap) */}
        <div
          ref={pillRef}
          aria-hidden="true"
          className={`absolute top-0.5 bottom-0.5 left-0 w-1/4 rounded-xl bg-gradient-to-r from-sky-400/28 via-indigo-400/22 to-cyan-400/28 border pointer-events-none will-change-transform ${
            scrubIndex !== null
              ? "border-cyan-200/55 shadow-[0_6px_22px_rgba(0,240,255,0.34),inset_0_1px_0_rgba(255,255,255,0.55)]"
              : "border-white/30 shadow-[0_4px_16px_rgba(0,240,255,0.22),inset_0_1px_0_rgba(255,255,255,0.42)]"
          }`}
          style={{
            transform: `translate3d(${displayTab * 100}%, 0, 0) scale(${
              scrubIndex !== null ? 1.06 : 1
            })`,
            transition:
              "transform 340ms cubic-bezier(0.34, 1.45, 0.64, 1), box-shadow 220ms ease",
          }}
        />

        <Link
          href="/#catalog"
          onClick={(e) => {
            if (performance.now() < suppressClickUntilRef.current) {
              e.preventDefault();
              return;
            }
            setActiveTab(0);
          }}
          className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
            displayTab === 0 ? "text-white" : "text-slate-300/80 hover:text-white"
          }`}
        >
          <Gamepad2
            className={`w-5 h-5 mb-0.5 transition-transform duration-200 ${
              displayTab === 0
                ? "text-cyan-300 scale-110"
                : "text-sky-300/80 scale-100"
            }`}
          />
          <span>Kho Game</span>
        </Link>

        <button
          onClick={handleSearchClick}
          type="button"
          className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
            displayTab === 1 ? "text-white" : "text-slate-300/80 hover:text-white"
          }`}
        >
          <Search
            className={`w-5 h-5 mb-0.5 transition-transform duration-200 ${
              displayTab === 1
                ? "text-cyan-200 scale-110"
                : "text-cyan-300/80 scale-100"
            }`}
          />
          <span>Tìm Kiếm</span>
        </button>

        <a
          href={DEFAULT_CONTACT_CHANNELS.zalo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleZaloClick}
          className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
            displayTab === 2
              ? "text-white"
              : "text-slate-300/85 hover:text-sky-200"
          }`}
        >
          <div
            className={`w-5 h-5 mb-0.5 flex items-center justify-center text-sky-300 transition-transform duration-200 ${
              displayTab === 2 ? "scale-110" : "scale-100"
            }`}
          >
            <ZaloIcon className="w-4 h-4" />
          </div>
          <span>Nhóm Zalo</span>
        </a>

        <a
          href={DEFAULT_CONTACT_CHANNELS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTelegramClick}
          className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
            displayTab === 3
              ? "text-white"
              : "text-slate-300/85 hover:text-cyan-200"
          }`}
        >
          <div
            className={`w-5 h-5 mb-0.5 flex items-center justify-center text-cyan-300 transition-transform duration-200 ${
              displayTab === 3 ? "scale-110" : "scale-100"
            }`}
          >
            <TelegramIcon className="w-4 h-4" />
          </div>
          <span>Telegram</span>
        </a>
      </div>
    </nav>
  );
};
