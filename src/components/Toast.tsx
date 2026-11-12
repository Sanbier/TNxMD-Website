"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, Info, X } from "lucide-react";

interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "info";
}

interface ToastContextType {
  showToast: (title: string, description?: string, type?: "success" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((title: string, description?: string, type: "success" | "info" = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev.slice(-2), { id, title, description, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div
        aria-live="polite"
        className="fixed top-4 sm:top-auto sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none w-full max-w-sm px-4"
      >
        {toasts.map((toast, idx) => (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto w-full p-3.5 rounded-2xl glass-dock-2 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-4 sm:slide-in-from-bottom-4 duration-200"
            style={{
              transform: `scale(${1 - (toasts.length - 1 - idx) * 0.05})`,
              opacity: 1 - (toasts.length - 1 - idx) * 0.15,
            }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-cyan-400/15 border border-cyan-300/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center shrink-0 text-cyan-300">
                {toast.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                ) : (
                  <Info className="w-4 h-4 text-cyan-300" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{toast.title}</p>
                {toast.description && (
                  <p className="text-[11px] text-slate-200 truncate">{toast.description}</p>
                )}
              </div>
            </div>

            <button
              onClick={() => dismissToast(toast.id)}
              className="p-1 text-slate-300 hover:text-white rounded-lg transition-colors shrink-0"
              aria-label="Đóng thông báo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      showToast: () => {},
    };
  }
  return context;
};
