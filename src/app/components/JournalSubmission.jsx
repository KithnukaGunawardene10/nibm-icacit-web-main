"use client";

import Link from "next/link";

export default function JournalSubmission({
  cmtUrl = "https://cmt3.research.microsoft.com/ICACIT2025/Submission",
  buttonText = "Submit via CMT",
}) {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Ready to submit your journal paper?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Please refer to the Journal Submission Guidelines below before
              proceeding.
            </p>
          </div>
          <Link
            href={cmtUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#2295BA] text-white font-semibold rounded-lg shadow hover:bg-[#1a7a9e] transition-colors text-sm sm:text-base"
          >
            {buttonText}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
