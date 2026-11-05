"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gamepad2, Shield, Heart, ExternalLink, ArrowUp, MessageSquare } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { ContactModal } from "./ContactModal";

export const Footer: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-[#050508] border-t border-white/[0.08] pt-12 pb-8 overflow-hidden">
        {/* Subtle bottom lighting */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/[0.06]">
            {/* Col 1: Brand & Domain */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <div className="w-full h-full bg-[#0a0a12] rounded-[10px] flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-white font-gaming tracking-wider">
                      TNXMD
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-bold uppercase">
                      tnxmd.io.vn
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    Next-Generation Gaming Architecture
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
                TNXMD provides an elite catalog of verified game profiles, configuration updates, and direct support integration. Zero cart friction, zero checkout gates, direct communication.
              </p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                  Official Communication Channels:
                </span>
                <SocialLinks size="sm" showLabel={true} />
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider font-mono">
                Platform Sections
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link href="/" className="hover:text-cyan-400 transition-colors">
                    Game Catalog Home
                  </Link>
                </li>
                <li>
                  <Link href="/#catalog" className="hover:text-cyan-400 transition-colors">
                    Featured Titles
                  </Link>
                </li>
                <li>
                  <a
                    href="#support"
                    onClick={(e) => {
                      e.preventDefault();
                      setContactOpen(true);
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    24/7 Direct Contact
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">Domain: tnxmd.io.vn</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Connect */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider font-mono">
                Direct Contact
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect directly with our engineering and support leads for game inquiries and custom configs.
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="w-full px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Launch Channel Selector</span>
              </button>
            </div>
          </div>

          {/* Bottom disclaimer & copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5 text-center sm:text-left">
              <span>© 2026 TNXMD (tnxmd.io.vn). All game trademarks belong to their respective publishers.</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
