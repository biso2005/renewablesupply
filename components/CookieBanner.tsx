"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F2A4A] border-t border-slate-700 px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white text-sm font-semibold mb-1">
            We use cookies
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            We use essential cookies to make this site work and analytics
            cookies to understand how you use it. We never sell your data.
            See our{" "}
            <a
              href="/privacy"
              className="text-[#00B4A6] underline hover:text-[#00d4c4]"
            >
              Privacy Policy
            </a>{" "}
            for details.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-sm font-semibold hover:border-slate-400 transition"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-lg bg-[#00B4A6] text-white text-sm font-semibold hover:bg-[#00d4c4] transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
