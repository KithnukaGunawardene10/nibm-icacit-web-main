"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";
import JournalViewer from "../components/JournalViewer";

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

        <JournalViewer />
      </main>

      <Footer />
    </div>
  );
}
