"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { CheckCircle2, Info, X } from "lucide-react";

interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "info";
}

interface ToastContextType {
  showToast: (
    title: string,
    description?: string,
    type?: "success" | "info"
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const timersRef = useRef<Map<string, number>>(new Map());

  const dismissToast = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer !== undefined) {
      window.clearTimeout(timer);
      timersRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, description?: string, type: "success" | "info" = "info") => {
      const id = Math.random().toString(36).slice(2, 9);
      setToasts((prev) => [...prev.slice(-2), { id, title, description, type }]);

      const timer = window.setTimeout(() => {
        timersRef.current.delete(id);
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3200);
      timersRef.current.set(id, timer);
    },
    []
  );

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div
        aria-live="polite"
        className="fixed top-4 sm:top-auto sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none w-full max-w-sm px-4"
      >
        {toasts.map((toast, idx) => {
          const depth = toasts.length - 1 - idx;
          return (
            <div
              key={toast.id}
              className="w-full pointer-events-auto transition-all duration-200 ease-out"
              style={{
                transform: `scale(${1 - depth * 0.05})`,
                opacity: 1 - depth * 0.15,
              }}
            >
              <div
                role="status"
                className="w-full p-3.5 rounded-2xl glass-dock-2 flex items-center justify-between gap-3 animate-toast-in"
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
                    <p className="text-xs font-bold text-white truncate">
                      {toast.title}
                    </p>
                    {toast.description && (
                      <p className="text-[11px] text-slate-200 truncate">
                        {toast.description}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => dismissToast(toast.id)}
                  className="p-1 text-slate-300 hover:text-white rounded-lg transition-colors shrink-0"
                  aria-label="Đóng thông báo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
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
