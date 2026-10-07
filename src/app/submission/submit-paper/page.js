// app/submission/submit-paper/page.jsx
"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HalfCoverImage from "../../components/HalfCoverImage";

export default function SubmitPaper() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="Submit Paper"
          description="Instructions for preparing and submitting your paper for ICACIT 2027."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Paper Submission
            </h2>
            <div className="mt-4 w-20 h-1 bg-[#2295BA]" />

            <p className="mt-6 text-[17px] leading-relaxed text-gray-700 text-justify">
              All paper submissions are handled through the Microsoft CMT
              platform. First-time users should create an account using their
              official email. The Microsoft CMT service manages the
              peer-reviewing process and was provided free of charge, covering
              all costs including Azure cloud services and software support.
            </p>

            <p className="mt-6 text-[17px] leading-relaxed text-gray-700">
              All authors must submit the following three documents:
            </p>
            <ul className="mt-4 space-y-2 text-[16px] leading-relaxed text-gray-700">
              <li>Extended Abstract in Microsoft Word format</li>
              <li>Extended Abstract in PDF format</li>
              <li>
                Author Information Form (submitted by email to{" "}
                <a
                  href="mailto:computingresearch@nibm.lk"
                  className="text-[#2295BA] underline hover:text-[#1a7a99]"
                >
                  computingresearch@nibm.lk
                </a>
                , not uploaded to CMT)
              </li>
            </ul>

            <p className="mt-6 text-[17px] leading-relaxed text-gray-700 text-justify">
              Authors are requested to follow the guidelines on the{" "}
              <Link
                href="/submission/author-guidelines"
                className="text-[#2295BA] underline hover:text-[#1a7a99]"
              >
                Author Guidelines
              </Link>{" "}
              page carefully to ensure compliance with the conference standards.
              The review process will begin only after the Author Information
              Form has been received by email.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/submission/author-guidelines"
                className="inline-block border border-[#2295BA] text-[#2295BA] hover:bg-[#2295BA] hover:text-white font-semibold px-8 py-3 text-[16px] transition-colors"
              >
                View Author Guidelines
              </Link>

              <a
                href="https://cmt3.research.microsoft.com/NIBMICACIT2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2295BA] hover:bg-[#197a95] text-white font-semibold px-8 py-3 text-[16px] transition-colors"
              >
                Submit Your Paper on CMT
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
