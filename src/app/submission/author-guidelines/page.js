// app/page.jsx
"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HalfCoverImage from "../../components/HalfCoverImage";
import ExpandableSection from "../../components/ExpandableSection";
import LeftRightParaSection from "@/app/components/LeftRightParaSection";

export default function AuthorGuidelines() {
  const authorGuidelines = [
    {
      title: "Paper Preparation",
      content: [
        "Abstract proceedings will be published in the university e-repository.",
        "All abstracts must report original research. Papers based on previously published work or currently submitted elsewhere will not be accepted.",
        "Only extended abstracts are encouraged, with a maximum of five (05) A4 pages (1200–2000 words) in the specified conference format.",
        "Do not include authors’ information (name, affiliations, email), acknowledgements, or grant information due to the double-blind review process. Any previous work by the authors should be referred to in the third person.",
        "Extended abstracts exceeding five (05) pages will be rejected.",
        "Abstracts that do not align with the conference scope will be rejected.",
        "Abstracts must follow the proper formatting guidelines; non-compliant abstracts will be rejected.",
        "Abstracts with plagiarism above 20% will be rejected.",
        "Abstracts with AI-generated content above 20% will be rejected.",
        "Concept papers and review papers will not be considered.",
        "The first author is allowed to present up to three (03) abstracts.",
        "Generative AI tools, such as large language models (LLMs), may be used responsibly to enhance research quality and improve writing, especially for non-native English speakers.",
        "AI tools can assist in generating ideas and improving self-written texts, but must not replace original contributions.",
        "Authors are responsible for ensuring their work maintains originality, integrity, and academic standards.",
        "Excessive or inappropriate use of AI that undermines research originality may result in rejection.",
      ],
    },
    {
      title: "Paper Submission",
      content: [
        "All paper submissions must be made through the CMT platform. First-time users should create an account using their official email address.",
        "Select the most appropriate conference track for your submission.",
        "Manuscripts must be submitted in both Microsoft Word and PDF formats using the specified conference template.",
        "Authors are required to submit the 'Author Declaration Form' along with the extended abstract.",
        "A maximum of one (01) supplementary file in PDF format may be submitted along with the manuscript.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed Navbar with smooth hide/show */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="Author Guidelines"
          description="Guidelines for preparing and submitting papers for ICACIT 2026, including formatting, submission process, and review criteria."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <LeftRightParaSection
          firstTitle="Conference Overview"
          firstDescription={`
    ICACIT 2026 provides a platform for researchers, practitioners, and students to share knowledge, exchange ideas, and explore recent advancements in computing and technology. 
    All submissions and presentations should align with the conference guidelines to ensure clarity, academic rigor, and consistency across all contributions.
  `}
        />

        <ExpandableSection items={authorGuidelines} />
      </main>

      <Footer />
    </div>
  );
}
