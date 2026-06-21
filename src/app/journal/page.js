"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";
import JournalViewer from "../components/JournalViewer";
import JournalCountdown from "../components/JournalCountdown";
import JournalGuidelines from "../components/JournalGuidelines"; // new
import JournalSubmission from "../components/JournalSubmission"; // new

export default function Journal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="Journal Information"
          description="Browse and view conference journals in a professional layout."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <JournalCountdown
          targetDate="2026-07-20T23:59:59"
          title="Full Paper Submission Deadline"
        />

        <JournalSubmission
          cmtUrl="https://cmt3.research.microsoft.com/IJACIT2026"
          buttonText="Submit via CMT"
        />

        <JournalGuidelines />

        <JournalViewer />
      </main>

      <Footer />
    </div>
  );
}
