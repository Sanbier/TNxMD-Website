"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { X, ExternalLink, ShieldCheck } from "lucide-react";
import { ContactChannels } from "@/types/game";
import { DEFAULT_CONTACT_CHANNELS } from "@/config/contacts";
import {
  handleGlassSpotlightLeave,
  handleGlassSpotlightMove,
} from "@/lib/glassEffects";
import { TelegramIcon, ZaloIcon } from "./SocialLinks";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  gameTitle?: string;
  channels?: ContactChannels;
}

interface TouchSample {
  y: number;
  t: number;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  title = "Hỗ Trợ & Trao Đổi Trực Tiếp",
  gameTitle,
  channels = DEFAULT_CONTACT_CHANNELS,
}) => {
  const merged = { ...DEFAULT_CONTACT_CHANNELS, ...channels };
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);

  const backdropRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const handlePillRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const closingRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const snapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Ref-based gesture state (0 React re-renders & 0 DOM layout reads during touchmove = locked 120Hz)
  const dragStateRef = useRef<{
    tracking: boolean;
    dragging: boolean;
    startY: number;
    startX: number;
    sheetHeight: number;
    currentOffset: number;
    samples: TouchSample[];
  }>({
    tracking: false,
    dragging: false,
    startY: 0,
    startX: 0,
    sheetHeight: 420,
    currentOffset: 0,
    samples: [],
  });

  const clearTimers = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (snapTimerRef.current !== null) {
      window.clearTimeout(snapTimerRef.current);
      snapTimerRef.current = null;
    }
  }, []);

  const resetHandlePill = useCallback(() => {
    if (!handlePillRef.current) return;
    handlePillRef.current.style.transform = "scaleX(1)";
    handlePillRef.current.style.backgroundColor = "";
  }, []);

  const animateClose = useCallback(
    (fromSwipe = false) => {
      if (closingRef.current) return;
      closingRef.current = true;
      clearTimers();
      resetHandlePill();

      const sheet = sheetRef.current;
      const backdrop = backdropRef.current;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

      if (sheet) {
        sheet.style.transition =
          "transform 240ms cubic-bezier(0.32, 0.72, 0, 1), opacity 200ms ease";
        if (isMobile) {
          sheet.style.transform = "translate3d(0, 105%, 0)";
        } else if (fromSwipe) {
          const exitOffset = Math.max(
            dragStateRef.current.currentOffset + 96,
            140
          );
          sheet.style.transform = `translate3d(0, ${exitOffset}px, 0) scale(0.98)`;
          sheet.style.opacity = "0";
        } else {
          sheet.style.transform = "translate3d(0, 12px, 0) scale(0.97)";
          sheet.style.opacity = "0";
        }
      }
      if (backdrop) {
        backdrop.style.transition = "opacity 220ms ease";
        backdrop.style.opacity = "0";
      }

      closeTimerRef.current = window.setTimeout(() => {
        closeTimerRef.current = null;
        closingRef.current = false;
        onCloseRef.current();
      }, 235);
    },
    [clearTimers, resetHandlePill]
  );

  useEffect(() => {
    clearTimers();

    if (isOpen) {
      closingRef.current = false;
      setMounted(true);
      document.body.style.overflow = "hidden";

      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        if (sheetRef.current) {
          sheetRef.current.style.transform = "";
          sheetRef.current.style.opacity = "";
          sheetRef.current.style.transition =
            "transform 300ms cubic-bezier(0.32, 0.72, 0, 1), opacity 220ms ease";
        }
        if (backdropRef.current) {
          backdropRef.current.style.opacity = "";
          backdropRef.current.style.transition = "opacity 240ms ease";
        }
        resetHandlePill();
        raf2 = requestAnimationFrame(() => {
          setEntered(true);
        });
      });

      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
        clearTimers();
      };
    } else {
      setEntered(false);
      setMounted(false);
      document.body.style.overflow = "";
    }
  }, [isOpen, clearTimers, resetHandlePill]);

  useEffect(() => {
    return () => {
      clearTimers();
      document.body.style.overflow = "";
    };
  }, [clearTimers]);

  // Native touch listeners with Instantaneous Release Velocity, Rubber-Band Elasticity & Morphing Handle
  useEffect(() => {
    const sheet = sheetRef.current;
    if (!isOpen || !mounted || !sheet) return;

    const onTouchStart = (e: TouchEvent) => {
      if (closingRef.current || e.touches.length !== 1) return;
      if (sheet.scrollTop > 2) return;

      const touch = e.touches[0];
      const now = performance.now();
      dragStateRef.current = {
        tracking: true,
        dragging: false,
        startY: touch.clientY,
        startX: touch.clientX,
        sheetHeight: sheet.offsetHeight || 420,
        currentOffset: 0,
        samples: [{ y: touch.clientY, t: now }],
      };
    };

    const recordTouchSample = (y: number, now: number) => {
      const samples = dragStateRef.current.samples;
      const prev =
        samples.length > 0 ? samples[samples.length - 1] : undefined;

      // Đặt lại neo tại điểm đảo chiều chuyển động (turning point)
      if (samples.length >= 2 && prev) {
        const prevPrev = samples[samples.length - 2];
        const prevStep = prev.y - prevPrev.y;
        const currStep = y - prev.y;
        if (
          (prevStep > 1.5 && currStep < -1.5) ||
          (prevStep < -1.5 && currStep > 1.5)
        ) {
          samples.length = 0;
          samples.push(prev);
        }
      }

      while (samples.length > 0 && now - samples[0].t > 85) {
        samples.shift();
      }

      // Chèn neo tĩnh ngay trước khung hình chuyển động sau khi dừng đọc (>85ms)
      if (samples.length === 0 && prev) {
        samples.push({ y: prev.y, t: Math.max(prev.t, now - 32) });
      }

      samples.push({ y, t: now });
    };

    const onTouchMove = (e: TouchEvent) => {
      const state = dragStateRef.current;
      if (!state.tracking || e.touches.length !== 1) return;

      const touch = e.touches[0];
      const now = performance.now();
      const dy = touch.clientY - state.startY;
      const dx = touch.clientX - state.startX;

      if (!state.dragging) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
          state.tracking = false;
          return;
        }
        if (dy < -6) {
          state.tracking = false;
          return;
        }
        if (dy > 4 && sheet.scrollTop <= 2) {
          state.dragging = true;
          if (snapTimerRef.current !== null) {
            window.clearTimeout(snapTimerRef.current);
            snapTimerRef.current = null;
          }
          sheet.style.transition = "none";
          if (backdropRef.current) {
            backdropRef.current.style.transition = "none";
          }
          if (handlePillRef.current) {
            handlePillRef.current.style.transform = "scaleX(1.32)";
            handlePillRef.current.style.backgroundColor = "rgba(103, 232, 249, 0.72)";
          }
        } else {
          recordTouchSample(touch.clientY, now);
          return;
        }
      }

      if (e.cancelable) {
        e.preventDefault();
      }

      recordTouchSample(touch.clientY, now);

      // Giữ chuyển động mượt tự nhiên cả khi nảy nhẹ qua mốc 0 (rubber-band iOS damping)
      const offset =
        dy >= 0 ? dy : -Math.min(18, Math.abs(dy) * 0.16);
      state.currentOffset = Math.max(0, dy);
      sheet.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;

      if (backdropRef.current) {
        const progress = Math.min(1, state.currentOffset / state.sheetHeight);
        backdropRef.current.style.opacity = String(
          Math.max(0.12, 1 - progress * 0.88)
        );
      }
    };

    const onTouchEnd = () => {
      const state = dragStateRef.current;
      if (!state.tracking) return;
      const wasDragging = state.dragging;
      state.tracking = false;
      state.dragging = false;

      if (!wasDragging) return;

      resetHandlePill();

      const now = performance.now();
      const samples = state.samples;
      const latest = samples[samples.length - 1];
      let releaseVelocity = 0;

      if (latest && now - latest.t <= 85 && samples.length >= 2) {
        let anchorIndex = 0;
        while (
          anchorIndex < samples.length - 1 &&
          latest.t - samples[anchorIndex].t > 85
        ) {
          anchorIndex++;
        }
        const anchor = samples[anchorIndex];
        const dt = Math.max(1, latest.t - anchor.t);
        releaseVelocity = (latest.y - anchor.y) / dt;
      }

      const dismissDistance = Math.min(
        108,
        Math.max(68, state.sheetHeight * 0.24)
      );
      const shouldDismiss =
        releaseVelocity > -0.3 &&
        (state.currentOffset > dismissDistance ||
          (state.currentOffset > 22 && releaseVelocity > 0.42));

      if (shouldDismiss) {
        animateClose(true);
      } else {
        sheet.style.transition =
          "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)";
        sheet.style.transform = "translate3d(0, 0, 0)";
        if (backdropRef.current) {
          backdropRef.current.style.transition = "opacity 240ms ease";
          backdropRef.current.style.opacity = "1";
        }
        snapTimerRef.current = window.setTimeout(() => {
          snapTimerRef.current = null;
          if (sheetRef.current && !closingRef.current) {
            sheetRef.current.style.transform = "";
          }
        }, 310);
      }
    };

    sheet.addEventListener("touchstart", onTouchStart, { passive: true });
    sheet.addEventListener("touchmove", onTouchMove, { passive: false });
    sheet.addEventListener("touchend", onTouchEnd, { passive: true });
    sheet.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      sheet.removeEventListener("touchstart", onTouchStart);
      sheet.removeEventListener("touchmove", onTouchMove);
      sheet.removeEventListener("touchend", onTouchEnd);
      sheet.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [isOpen, mounted, animateClose, resetHandlePill]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        animateClose(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, animateClose]);

  if (!isOpen && !mounted) return null;

  const contactList = [
    {
      name: "Shop Telegram",
      tag: "@tnxmd",
      url: merged.telegram,
      icon: TelegramIcon,
      hoverClass:
        "hover:border-cyan-300/60 hover:bg-cyan-400/[0.12] hover:shadow-[0_8px_24px_rgba(0,240,255,0.2)]",
      btnClass:
        "bg-cyan-400/[0.18] border border-cyan-300/40 text-cyan-200 group-hover:bg-cyan-400 group-hover:text-slate-950",
      iconTone: "text-cyan-300",
    },
    {
      name: "Zalo Nhóm",
      tag: "Cộng đồng hỗ trợ TNxMD",
      url: merged.zalo,
      icon: ZaloIcon,
      hoverClass:
        "hover:border-sky-300/60 hover:bg-sky-400/[0.12] hover:shadow-[0_8px_24px_rgba(56,189,248,0.2)]",
      btnClass:
        "bg-sky-400/[0.18] border border-sky-300/40 text-sky-200 group-hover:bg-sky-500 group-hover:text-white",
      iconTone: "text-sky-300",
    },
    {
      name: "Liên Hệ Quản Gia",
      tag: "@BeoHuangB • Hỗ trợ trực tiếp",
      url: merged.managerTelegram,
      icon: TelegramIcon,
      hoverClass:
        "hover:border-fuchsia-300/60 hover:bg-fuchsia-400/[0.12] hover:shadow-[0_8px_24px_rgba(217,70,239,0.2)]",
      btnClass:
        "bg-fuchsia-400/[0.18] border border-fuchsia-300/40 text-fuchsia-200 group-hover:bg-fuchsia-500 group-hover:text-white",
      iconTone: "text-fuchsia-300",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden"
    >
      {/* Pure Color Scrim on Mobile (0 backdrop-filter recomputation during drag) + Frosted Scrim on Desktop + touch-none lock */}
      <div
        ref={backdropRef}
        onClick={() => animateClose(false)}
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 240ms ease",
        }}
        className="fixed inset-0 bg-slate-950/[0.84] sm:bg-slate-950/[0.72] sm:backdrop-blur-md touch-none will-change-[opacity]"
      />

      {/* 120Hz GPU-Composited Bottom Sheet / Modal */}
      <div
        ref={sheetRef}
        onPointerMove={handleGlassSpotlightMove}
        onPointerLeave={handleGlassSpotlightLeave}
        style={{
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
          transition:
            "transform 300ms cubic-bezier(0.32, 0.72, 0, 1), opacity 220ms ease",
        }}
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-lg rounded-t-3xl sm:rounded-3xl glass-modal-sheet glass-spotlight p-5 sm:p-8 max-h-[90vh] overflow-y-auto overscroll-contain will-change-transform select-none ${
          entered
            ? "translate-y-0 opacity-100 sm:scale-100"
            : "translate-y-full sm:translate-y-3 opacity-100 sm:opacity-0 sm:scale-[0.97]"
        }`}
      >
        {/* Specular Top Edge Highlight */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent pointer-events-none"
        />

        {/* Morphing iOS Glass Drag Handle Pill */}
        <div className="sm:hidden py-1.5 -mt-2 mb-3 flex justify-center cursor-grab">
          <div
            ref={handlePillRef}
            className="w-12 h-1.5 bg-white/35 rounded-full transition-all duration-200 ease-out"
          />
        </div>

        <button
          onClick={() => animateClose(false)}
          type="button"
          className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-xl bg-white/[0.08] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] text-slate-300 hover:text-white active:scale-95 transition-all"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5 sm:mb-6 pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.07] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
            Kênh Đã Xác Minh: tnxmd.io.vn
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
          {gameTitle && (
            <p className="text-sm text-cyan-200 font-medium mt-1">
              Liên hệ về tựa game:{" "}
              <span className="text-white font-semibold">{gameTitle}</span>
            </p>
          )}
          <p className="text-xs text-slate-300 mt-1">
            Chọn kênh liên hệ bạn mong muốn để trao đổi trực tiếp với đội ngũ TNxMD.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {contactList.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.085] to-white/[0.03] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] active:scale-[0.97] transition-all duration-200 ${item.hoverClass}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Icon className={`w-5 h-5 ${item.iconTone}`} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-sm sm:text-base text-white truncate block">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-300 block truncate">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`ml-3 shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] ${item.btnClass}`}
                >
                  <span>Kết Nối</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
