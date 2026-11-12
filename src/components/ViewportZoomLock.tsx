"use client";

import { useEffect } from "react";

/**
 * Khóa thu phóng (pinch-zoom trên Safari iOS & Ctrl+Wheel trên máy tính)
 * mà KHÔNG gắn listener `touchmove`/`touchend` `{ passive: false }` lên `document`,
 * giúp luồng cuộn GPU 60/120Hz trên điện thoại hoàn toàn tự do và phản hồi chạm tức thì.
 */
export const ViewportZoomLock = () => {
  useEffect(() => {
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };

    const preventCtrlWheelZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("gesturestart", preventGesture, { passive: false });
    document.addEventListener("gesturechange", preventGesture, { passive: false });
    document.addEventListener("gestureend", preventGesture, { passive: false });
    window.addEventListener("wheel", preventCtrlWheelZoom, { passive: false });

    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
      window.removeEventListener("wheel", preventCtrlWheelZoom);
    };
  }, []);

  return null;
};
