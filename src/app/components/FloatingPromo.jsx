"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Mail, Calendar, ExternalLink } from "lucide-react";
import { BASE_URL } from "../util/constant/common";

// Update these to match your real next deadline
const NEXT_DEADLINE = {
  label: "Submission Deadline",
  date: "30th November 2026",
  dateISO: "2026-11-30",
};

const FLYER_SRC = `${BASE_URL}/icacit-2027-flyer.webp`; // or "/icacit-2027-flyer.webp"
const CONTACT_EMAIL = "computingresearch@nibm.lk";

export default function FloatingPromo() {
  const [deadlineOpen, setDeadlineOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [autoShown, setAutoShown] = useState(false);
  const [minimized, setMinimized] = useState(false);

  // Auto-open once when user scrolls past Conference Tracks
  useEffect(() => {
    const tracks = document.getElementById("tracks");
    if (!tracks) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When tracks leave the viewport (user has scrolled past them)
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0 && !autoShown) {
          setDeadlineOpen(true);
          setMinimized(false);
          setAutoShown(true);
        }
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(tracks);
    return () => observer.disconnect();
  }, [autoShown]);

  const closeDeadline = () => {
    setDeadlineOpen(false);
    setMinimized(true);
  };

  const openDeadline = () => {
    setDeadlineOpen(true);
    setMinimized(false);
  };

  return (
    <>
        <span className="hidden sm:inline text-sm text-slate-200 mr-1 group-hover:mr-0">
      Submit your paper
    </span>
      {/* ——— Email FAB (bottom-left) ——— */}
      <div className="fixed bottom-5 left-5 z-[90] flex flex-col items-start gap-3">
        {emailOpen && (
          <div className="w-[300px] sm:w-[320px] rounded-2xl border border-white/10 bg-slate-900/95 text-white shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2295BA]/20 text-[#2295BA]">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Contact ICACIT</p>
                  <p className="text-[11px] text-slate-400">Email the organising team</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEmailOpen(false)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed">
                Questions about submissions, registration, or the programme?
                Reach us at:
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=ICACIT%202027%20Enquiry`}
                className="block rounded-xl bg-slate-800/80 border border-white/10 px-3 py-2.5 text-sm font-medium text-[#7dd3fc] hover:border-[#2295BA]/50 break-all"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=ICACIT%202027%20Enquiry`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2295BA] hover:bg-[#1a7a99] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                <Mail size={16} />
                Open email app
              </a>
              
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setEmailOpen((v) => !v);
            setDeadlineOpen(false);
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2295BA] text-white shadow-lg shadow-[#2295BA]/30 hover:scale-105 transition-transform"
          aria-label="Email us"
        >
          {emailOpen ? <X size={22} /> : <Mail size={22} />}
        </button>
      </div>

      {/* ——— Deadline / Flyer FAB (bottom-right) ——— */}
      <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3">
        {deadlineOpen && (
          <div className="w-[320px] sm:w-[360px] rounded-2xl border border-white/10 bg-slate-950/95 text-white shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-[#2295BA]/20 to-transparent">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2295BA]/25 text-[#7dd3fc]">
                  < Calendar size={16} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7dd3fc]">
                    ICACIT 2027
                  </p>
                  <p className="text-[11px] text-slate-400">Key reminder</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeDeadline}
                className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
                aria-label="Minimize"
              >
                <X size={16} />
              </button>
            </div>

            {/* Flyer */}
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
              <Image
                src="/ICACIT 2027.jpeg"
                alt="ICACIT 2027 Flyer"
                width={800}
                height={1000}
                className="w-full h-auto object-cover max-h-[200px] object-top"
              />
            </div>

            {/* Next deadline */}
            <div className="p-4 space-y-3">
              <div className="rounded-xl border border-[#2295BA]/30 bg-[#2295BA]/10 px-3 py-3">
                <div className="flex items-center gap-2 text-[#7dd3fc] text-xs font-semibold uppercase tracking-wider">
                  <Calendar size={14} />
                  Next deadline
                </div>
                <p className="mt-1.5 text-sm font-bold text-white">
                  {NEXT_DEADLINE.label}
                </p>
                <p className="text-lg font-extrabold text-[#2295BA]">
                  {NEXT_DEADLINE.date}
                </p>
              </div>

              <a
                href="/submission/submit-paper"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2295BA] hover:bg-[#1a7a99] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                Submit your paper
                <ExternalLink size={14} />
              </a>
              <a
                href="/#important-dates"
                className="block text-center text-xs text-slate-400 hover:text-[#7dd3fc]"
              >
                View all important dates
              </a>
            </div>
          </div>
        )}

        {/* FAB — shows when closed / minimized */}
        {(!deadlineOpen || minimized) && (
          <button
            type="button"
            onClick={openDeadline}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-[#2295BA]/50 text-[#7dd3fc] shadow-lg shadow-[#2295BA]/20 hover:scale-105 transition-transform"
            aria-label="Open deadline info"
          >
            < Calendar size={22} />
            {!autoShown && (
              <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-rose-500 ring-2 ring-slate-950" />
            )}
          </button>
        )}
        {/* Top-left floating CTA — icon only, expands on hover */}
<div className="fixed top-24 left-5 z-[90]">
  <a
    href="https://cmt3.research.microsoft.com/ICACIT2027"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center rounded-full border border-[#2295BA]/40 bg-slate-950/85 backdrop-blur-md p-1.5 shadow-lg shadow-[#2295BA]/15 transition-all duration-300 ease-out hover:border-[#2295BA]/70 hover:pr-2"
  > 
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2295BA]/20 text-[#7dd3fc] ring-1 ring-[#2295BA]/40">
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </span>

    <span className="flex max-w-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-w-[220px] group-hover:opacity-100 group-hover:ml-2 group-hover:pr-1">
      <span className="whitespace-nowrap text-sm text-slate-200">
        Submit your paper
      </span>
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#2295BA] px-3 py-1.5 text-xs font-semibold text-white">
        Submit
        <span aria-hidden>›</span>
      </span>
    </span>
  </a>
</div>
      </div>
    </>
  );
}