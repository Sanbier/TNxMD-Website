import React from "react";
import Image from "next/image";

interface BrandLockupProps {
  priority?: boolean;
  interactive?: boolean;
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  priority = false,
  interactive = false,
}) => {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
      <div
        className={`relative w-10 h-10 sm:w-11 sm:h-11 drop-shadow-[0_0_12px_rgba(0,240,255,0.45)] shrink-0 ${
          interactive ? "group-hover:scale-105 transition-transform" : ""
        }`}
      >
        <Image
          src="/logo.png"
          alt="TNxMD Logo"
          width={88}
          height={88}
          priority={priority}
          quality={95}
          className="w-full h-full object-contain"
        />
      </div>

      <span
        aria-hidden="true"
        className="h-7 sm:h-8 w-[1px] bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent shrink-0"
      />

      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2 leading-none">
          <span className="font-brand font-black text-[18px] sm:text-[22px] tracking-[0.07em] inline-flex items-baseline drop-shadow-[0_2px_12px_rgba(56,189,248,0.28)]">
            <span className="bg-gradient-to-b from-white via-sky-100 to-sky-300 bg-clip-text text-transparent">
              TN
            </span>
            <span className="mx-[1.5px] text-[0.76em] font-extrabold bg-gradient-to-b from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,240,255,0.75)]">
              x
            </span>
            <span className="bg-gradient-to-b from-white via-sky-100 to-cyan-300 bg-clip-text text-transparent">
              MD
            </span>
          </span>

          <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/[0.12] to-blue-500/20 border border-cyan-300/40 shadow-[0_0_12px_rgba(0,212,255,0.2),inset_0_1px_0_rgba(255,255,255,0.32)] shrink-0">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00f0ff] ${
                interactive ? "animate-pulse" : ""
              }`}
            />
            <span className="font-brand font-extrabold text-[8.5px] sm:text-[9.5px] tracking-[0.12em] text-cyan-100 leading-none">
              IO.VN
            </span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="w-3 sm:w-4 h-[1.5px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-transparent shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] bg-gradient-to-r from-sky-100/95 via-slate-200/85 to-cyan-200/80 bg-clip-text text-transparent leading-none truncate">
            Nền Tảng Gaming Cao Cấp
          </span>
        </div>
      </div>
    </div>
  );
};
