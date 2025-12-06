// app/page.jsx (or wherever your Camera-Ready page is)
"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HalfCoverImage from "../../components/HalfCoverImage";
import ExpandableSection from "../../components/ExpandableSection";
import LeftRightParaSection from "@/app/components/LeftRightParaSection";

export default function CameraReadyPaper() {
  const cameraReadyGuidelines = [
    {
      title: "Formatting Camera-Ready Paper",
     content: [
      "Address review comments carefully.",
      "The Camera Ready paper must follow the conference guidelines.",
      "Conference organizers would return/Reject the abstract/extended abstract if the review comments were not addressed properly or sufficient effort was not taken by the author. This decision will be taken by TPC Committee of the Conference.",
      "During this stage author can include",
      "• Author information (i.e. names, affiliations, email)",
      "• Any acknowledgements/ Grant of the Research if applicable.",
      "During the final submission, the following will be cross-checked",
      "• Change in title, keywords, abstracts, contents (all these may be allowed if the review comments are given)",
      "• Addition of authors (not allowed)",
      "Abstract on CMT should be the same as the abstract on Camera-Ready submission.",
      "The abstract should be uploaded to the CMT system along with the extended abstract and correction report on or before the given deadline.",
      "The following 05 documents must be submitted via the CMT system",
      "1. Updated Abstract based on the reviewers’ comments (abstract in both PDF and Word format)",
      "2. Updated Extended Abstract based on the reviewers’ comments (extended abstract in both PDF and Word format)",
      "3. Authors are required to submit a “Correction Report” that clearly outlines how each reviewer's comment was addressed. This document should include the original reviewer comment, a detailed explanation of the author’s response including any modifications or clarifications made to the manuscript and a clear indication of the specific section, page number, or line number where the corresponding changes have been implemented.",
      "Templates for the Submission",
      "• Use the same Extended Abstract Template that was used previously for the manuscript submission.",
      "• Use the following Camera-ready Abstract and Correction Report Templates",
    ],
    buttons: (
      <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="/downloads/Camera-Ready-Abstract-Template.docx"
          download
          className="px-12 py-6 bg-[#2295BA] text-white font-bold text-xl rounded-lg hover:bg-[#1a7a99] transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-center min-w-[380px]"
        >
          CAMERA-READY ABSTRACT TEMPLATE
        </a>
        <a
          href="/downloads/Correction-Report-Template.docx"
          download
          className="px-12 py-6 bg-[#8B0000] text-white font-bold text-xl rounded-lg hover:bg-[#5a0000] transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-center min-w-[380px]"
        >
          CORRECTION REPORT TEMPLATE
        </a>
      </div>
    ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="Camera-Ready Paper Submission"
          description="Guidelines for formatting and submitting the final version of your accepted paper for ICACIT 2026."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <LeftRightParaSection
          firstTitle="Camera-Ready Submission Guidelines"
          firstDescription={`
            Congratulations on having your paper accepted! Please carefully follow these instructions to prepare and submit the final (camera-ready) version of your extended abstract. 
            This ensures your work is properly included in the conference proceedings and presented at ICACIT 2026.
          `}
        />

        <ExpandableSection
          items={cameraReadyGuidelines}
          renderContent={(item) => (
            <div className="space-y-6">
              <ul className="space-y-5 text-[17px] leading-relaxed text-gray-700">
                {item.content.map((line, i) => {
                  const trimmed = line.trim();

                  if (/^\d+\./.test(trimmed)) {
                    const [num, ...rest] = trimmed.split(/\.(.*)/s);
                    return (
                      <li key={i} className="flex pl-6">
                        <span className="font-bold text-[#2295BA] mr-3 min-w-[40px]">{num}.</span>
                        <span>{rest.join(".")}</span>
                      </li>
                    );
                  }

                  if (trimmed.startsWith("•")) {
                    return (
                      <li key={i} className="flex">
                        <span className="text-[#2295BA] font-bold mr-4 mt-1">•</span>
                        <span>{trimmed.slice(1).trim()}</span>
                      </li>
                    );
                  }

                  if (trimmed.includes("Templates for the Submission")) {
                    return (
                      <li key={i} className="mt-10">
                        <strong className="text-2xl text-gray-900 block mb-6">{trimmed}</strong>
                      </li>
                    );
                  }

                  return <li key={i} className="mb-4">{trimmed}</li>;
                })}
              </ul>

              {/* THE TWO BUTTONS APPEAR HERE */}
              {item.buttons}
            </div>
          )}
        />
      </main>

      <Footer />
    </div>
  );
}