// app/submission/submit-paper/page.jsx
"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HalfCoverImage from "../../components/HalfCoverImage";

export default function SubmitPaper() {
  const documents = [
    {
      title: "Extended Abstract (Word)",
      detail: "Microsoft Word format (.doc or .docx)",
    },
    {
      title: "Extended Abstract (PDF)",
      detail: "PDF version of the same abstract",
    },
    {
      title: "Author Information Form",
      detail: (
        <>
          Email only to{" "}
          <a
            href="mailto:computingresearch@nibm.lk"
            className="text-[#2295BA] underline hover:text-[#1a7a99]"
          >
            computingresearch@nibm.lk
          </a>
          {" "}— do not upload to CMT
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/80">
      <HalfCoverImage
          title="Submit Paper"
          description="Instructions for preparing and submitting your paper for ICACIT 2027."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-10 md:pt-12 lg:pt-14">
        
        <section className="py-14 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <span className="inline-flex items-center rounded-full border border-[#2295BA]/25 bg-[#2295BA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2295BA]">
                Submission
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Paper Submission
              </h2>
              <div className="mt-3 w-14 h-1 rounded-full bg-[#2295BA]" />
            </div>

            {/* Intro card */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-6">
              <div className="flex">
                <div className="w-1.5 bg-[#2295BA] shrink-0" />
                <div className="p-6 sm:p-8">
                  <p className="text-[16px] leading-relaxed text-slate-700 text-justify">
                    All paper submissions are handled through the{" "}
                    <strong className="text-slate-900">Microsoft CMT</strong>{" "}
                    platform. First-time users should create an account using
                    their official email. The Microsoft CMT service manages the
                    peer-reviewing process and was provided free of charge,
                    covering all costs including Azure cloud services and
                    software support.
                  </p>
                </div>
              </div>
            </div>

            {/* Required documents */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-6">
              <div className="flex">
                <div className="w-1.5 bg-indigo-500 shrink-0" />
                <div className="p-6 sm:p-8 w-full">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Required documents
                  </h3>
                  <p className="text-sm text-slate-500 mb-5">
                    All authors must submit the following three documents:
                  </p>

                  <ul className="space-y-3">
                    {documents.map((doc, i) => (
                      <li
                        key={i}
                        className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2295BA]/10 text-xs font-bold text-[#2295BA]">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {doc.title}
                          </p>
                          <p className="mt-0.5 text-sm text-slate-600">
                            {doc.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Guidelines note */}
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 px-5 sm:px-6 py-5 mb-10">
              <p className="text-[15px] leading-relaxed text-slate-700 text-justify">
                Authors are requested to follow the guidelines on the{" "}
                <Link
                  href="/submission/author-guidelines"
                  className="font-semibold text-[#2295BA] underline hover:text-[#1a7a99]"
                >
                  Author Guidelines
                </Link>{" "}
                page carefully to ensure compliance with the conference
                standards. The review process will begin only after the Author
                Information Form has been received by email.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/submission/author-guidelines"
                className="inline-flex items-center justify-center rounded-xl border border-[#2295BA] text-[#2295BA] hover:bg-[#2295BA] hover:text-white font-semibold px-7 py-3.5 text-[15px] transition-colors"
              >
                View Author Guidelines
              </Link>

              <a
                href="https://cmt3.research.microsoft.com/NIBMICACIT2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2295BA] hover:bg-[#197a95] text-white font-semibold px-7 py-3.5 text-[15px] shadow-sm shadow-[#2295BA]/25 transition-colors"
              >
                Submit Your Paper on CMT
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}