// app/page.jsx
"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HalfCoverImage from "../../components/HalfCoverImage";
import FullWidthParaSection from "../../components/FullWidthParaSection";

export default function SubmitPaper() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed Navbar with smooth hide/show */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="Submit Paper"
          description="Step-by-step instructions for preparing and submitting your research for review."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <FullWidthParaSection
          title="Paper Submission"
          description={`
    All paper submissions are handled through the Microsoft CMT platform. First-time users should create an account using their official email. The Microsoft CMT service manages the peer-reviewing process and was provided free of charge, covering all costs including Azure cloud services and software support. <br /><br />
    All authors must submit the following three documents: <br />
    • Extended abstract in Microsoft Word format <br />
    • Extended abstract in PDF format <br />
    • Author Declaration Form <br /><br />
    Authors are requested to carefully follow the guidelines provided on the 'Author Guidelines' page to ensure compliance with the conference standards.
  `}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2295BA] hover:bg-[#197a95] text-white font-semibold px-6 py-2 text-lg shadow-md transition"
          >
            Submit Your Paper on CMT
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
