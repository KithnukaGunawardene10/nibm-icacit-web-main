
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Calendar,
  ExternalLink,
  Clock,
  FileText,
} from "lucide-react";

const NEXT_DEADLINE = {
  label: "Abstract Submission Deadline",
  date: "30th November 2026",
  dateISO: "2026-11-30",
};

const FLYER_SRC = "/ICACIT 2027.jpeg";
const SUBMISSION_URL = "/submission/submit-paper";

function getRemainingDays(dateISO) {
  const [year, month, day] = dateISO.split("-").map(Number);

  const deadline = Date.UTC(year, month - 1, day);
  const today = new Date();

  const currentDate = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  return Math.ceil((deadline - currentDate) / 86400000);
}

export default function AbstractDeadlinePopup() {
  const [deadlineOpen, setDeadlineOpen] = useState(false);
  const [remainingDays, setRemainingDays] = useState(
    () => getRemainingDays(NEXT_DEADLINE.dateISO)
  );

  // Show popup immediately when the website loads
  useEffect(() => {
    setDeadlineOpen(true);
  }, []);

  // Update countdown
  useEffect(() => {
    const updateCountdown = () => {
      setRemainingDays(getRemainingDays(NEXT_DEADLINE.dateISO));
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  const closeDeadline = () => {
    setDeadlineOpen(false);
  };

  const deadlineMessage =
    remainingDays < 0
      ? "SUBMISSION CLOSED"
      : remainingDays === 0
        ? "DEADLINE IS TODAY!"
        : `${remainingDays} DAYS REMAINING!`;

  const deadlinePassed = remainingDays < 0;

  return (
    <>
      {/* INITIAL WELCOME POPUP */}
      {deadlineOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-5">

          <div className="relative w-full max-w-[520px] max-h-[92vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 text-white shadow-2xl shadow-black/60 animate-in fade-in zoom-in-95 duration-300">

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeDeadline}
              className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-slate-950/80 p-2 text-slate-300 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              aria-label="Close announcement"
            >
              <X size={19} />
            </button>

            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#123D50] via-[#126580] to-[#2295BA] px-5 py-6 text-center">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100">
                International Conference
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                ICACIT 2027
              </h2>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-white/70" />

              <p className="mt-3 text-sm font-medium text-white/90">
                Important Conference Announcement
              </p>

            </div>

            {/* COUNTDOWN */}
            <div className="px-5 pt-5 text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#2295BA]/30 bg-[#2295BA]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#7dd3fc]">
                <Clock size={14} />
                Abstract Submission
              </div>

              <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {deadlineMessage}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Don't miss your opportunity to present your research
                at ICACIT 2027.
              </p>

            </div>

            {/* OFFICIAL FLYER */}
            <div className="mx-5 mt-5 overflow-hidden rounded-xl border border-white/10 bg-slate-900">

              <Image
                src={FLYER_SRC}
                alt="ICACIT 2027 Official Conference Flyer"
                width={1000}
                height={1200}
                priority
                className="mx-auto h-auto max-h-[300px] w-full object-contain"
              />

            </div>

            {/* DEADLINE DETAILS */}
            <div className="space-y-4 p-5">

              <div className="rounded-xl border border-[#2295BA]/30 bg-[#2295BA]/10 p-4">

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7dd3fc]">
                  <Calendar size={15} />
                  {NEXT_DEADLINE.label}
                </div>

                <p className="mt-2 text-xl font-extrabold text-white">
                  {NEXT_DEADLINE.date}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {deadlinePassed
                    ? "The abstract submission deadline has passed."
                    : remainingDays === 0
                      ? "Final day for abstract submissions."
                      : `${remainingDays} days remaining to submit your abstract.`}
                </p>

              </div>

              {/* PRIMARY ACTION */}
              {!deadlinePassed && (
                <a
                  href={SUBMISSION_URL}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2295BA] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2295BA]/20 transition hover:-translate-y-0.5 hover:bg-[#1a7a99]"
                >
                  <FileText size={17} />
                  Submit Your Abstract
                  <ExternalLink size={15} />
                </a>
              )}

              {/* CONTINUE TO WEBSITE */}
              <button
                type="button"
                onClick={closeDeadline}
                className="flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-[#2295BA]/50 hover:bg-white/10 hover:text-white"
              >
                Continue to Website
                <span className="ml-2">→</span>
              </button>

            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 px-5 py-3 text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                School of Computing and Engineering | NIBM Sri Lanka
              </p>
            </div>

          </div>
        </div>
      )}

      {/* FLOATING REOPEN BUTTON */}
      {!deadlineOpen && (
        <div className="fixed bottom-5 right-5 z-[90]">

          <button
            type="button"
            onClick={() => setDeadlineOpen(true)}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#2295BA]/50 bg-slate-950 text-[#7dd3fc] shadow-xl shadow-[#2295BA]/20 transition hover:scale-110 hover:bg-[#123D50]"
            aria-label="Open abstract submission announcement"
          >
            <Calendar size={23} />

            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 ring-2 ring-slate-950">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:opacity-100">
              Abstract Submission Deadline
            </span>

          </button>

        </div>
      )}
    </>
  );
}
