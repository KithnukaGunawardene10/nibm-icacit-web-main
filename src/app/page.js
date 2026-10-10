// app/page.jsx
"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LeftRightParaSectionLarge from "./components/LeftRightParaSectionLarge";
import ConferenceTracks from "./components/ConferenceTracks";
import ImportantDates from "./components/ImportantDates";

export default function Page() {
  const theme =
    "Intelligent Computing for a Resilient Future: AI, Security and Sustainable Innovation";

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        <Hero />

        {/* About Section */}
        <LeftRightParaSectionLarge
          firstTitle="About ICACIT 2027"
          firstDescription={`
            The International Conference on Advanced Computing and Information Technology 2027 (ICACIT 2027) is organized by the School of Computing and Engineering at the National Institute of Business Management (NIBM), Sri Lanka. 
            The conference brings together researchers, academics, industry professionals, and postgraduate and undergraduate students to present original research, exchange ideas, and discuss recent advances in computing and information technology. 
            ICACIT 2027 will be held on <strong class="text-[#2295BA]">12th February 2027</strong> and will be conducted in physical, hybrid, and online modes to ensure broad participation. 
            The program includes keynote addresses, peer-reviewed technical paper presentations, poster sessions, and networking opportunities that foster collaboration between academia and industry. 
            Accepted papers will be published in the conference proceedings with an ISBN, and outstanding contributions will be recognized through Best Paper and Best Presenter awards.
          `}
          tagline={theme}
        />

        {/* Conference Tracks */}
        <ConferenceTracks />

        {/* Keynote Speaker */}
        {/* <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Keynote Speaker
            </h2>
            <div className="mt-4 w-20 h-1 bg-[#2295BA]" />

            <div className="mt-8 border border-gray-200 bg-white p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Dr. P. Nandalal Weerasinghe
              </h3>
              <p className="mt-2 text-[16px] text-[#2295BA] font-semibold">
                Governor, Central Bank of Sri Lanka
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-gray-700 text-justify">
                Dr. P. Nandalal Weerasinghe will deliver the keynote address at
                ICACIT 2027. The address will focus on the intersection of
                intelligent computing, digital resilience, and sustainable
                innovation in the national and global context, in line with the
                conference theme.
              </p>
            </div>
          </div>
        </section> */}

        {/* Important Dates */}
        <ImportantDates />
      </main>

      <Footer />
    </div>
  );
}
