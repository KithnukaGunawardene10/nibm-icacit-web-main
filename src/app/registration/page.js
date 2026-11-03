// app/registration/page.jsx
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";

export default function Registration() {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <HalfCoverImage
          title="ICACIT 2027 Registration"
          description="Registration information for ICACIT 2027."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        
        {/* Registration & Fees Section */}
        <section className="relative py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header – ICITR style */}
            <div className="mb-12 lg:mb-16">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl sm:text-6xl font-light text-slate-300/80 tracking-tight select-none">
                  01
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Registration &amp; Fees
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Plan your registration
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600 max-w-2xl">
                Registration is required for all participants whose papers have
                been accepted, as well as for attendees who wish to join the
                conference sessions. The following fees apply for ICACIT 2027.
              </p>
            </div>

            {/* Fee table card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-2 gap-4 px-6 sm:px-8 py-4 border-b border-slate-100 bg-slate-50/60">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Category
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 text-right">
                  Fee
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-100">
                <div className="grid grid-cols-2 gap-4 px-6 sm:px-8 py-5 items-center hover:bg-slate-50/50 transition-colors">
                  <div className="text-[15px] sm:text-[16px] text-slate-800 font-medium">
                    Local Student
                  </div>
                  <div className="text-[15px] sm:text-[16px] text-slate-800 font-semibold text-right">
                    Rs. 4,000.00
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 px-6 sm:px-8 py-5 items-center hover:bg-slate-50/50 transition-colors">
                  <div className="text-[15px] sm:text-[16px] text-slate-800 font-medium">
                    Foreign Student
                  </div>
                  <div className="text-[15px] sm:text-[16px] text-slate-800 font-semibold text-right">
                    USD 30.00
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/40">
                <p className="text-[13px] text-slate-500">
                  Fees shown are per accepted paper / participant.
                </p>
              </div>
            </div>

            {/* Important note card */}
            <div className="mt-8 rounded-2xl border border-[#2295BA]/20 bg-[#2295BA]/[0.04] px-6 sm:px-8 py-5">
              <div className="flex gap-3">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#2295BA]/15 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-[#2295BA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-[14.5px] leading-relaxed text-slate-700">
                  At least one author of each accepted paper must register by the
                  registration deadline for the paper to be included in the
                  conference proceedings.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}