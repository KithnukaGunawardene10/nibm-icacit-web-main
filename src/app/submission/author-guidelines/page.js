// app/page.jsx ← ONLY THIS FILE
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
        "Abstracts should report original research. Papers based on previously published work or currently submitted for any other publication will not be accepted.",
        "The conference only encourages the submission of extended abstracts. The maximum length of extended abstracts is limited to five (05) A4 pages (Maximum 2000 words and minimum 1200 words) in the given conference format.",
        "Since the review process is double-blind (neither the author nor the reviewers are aware of each other’s identity), authors are requested,\n\n• NOT to include authors’ information (name, affiliations, e-mail), acknowledgements, grant information of the research carried out.\n• To INCLUDE authors’ previous work should be referred as 3rd persons’ works.",
        "During the desk review process (prior to the formal double blind review), the following will be checked. Papers having non-compliances, including the following, will be rejected.\n\n• Extended abstracts that have more than five (05) pages.\n• Extended abstracts that do not with the scope of the conference.\n• Extended abstracts that do not follow proper formatting guidelines.\n• Extended abstracts that have a plagiarism score above 20%.\n• Extended abstracts that have an AI score above 20%.",
        "Submission of concept and review papers will not be considered.",
        "The first author is allowed to present up to three (03) abstracts.",
        "Guidelines for Generative AI Usage.\n\n• The developments in generative artificial intelligence (AI) tools, with for example also the large language models (LLMs), are transforming the way publications are produced. We encourage the use of those emerging technologies in a responsible manner. We aim that such AI tools mostly promote researchers' own capacity to create high-quality scientific work. For instance, AI tools can help researchers arrive at new ideas and improve self-written texts, especially for non-native speakers of English. However, we need to consider that AI tools also raise questions about what exactly constitutes their responsible use.",
      ],
    },
    {
      title: "Paper Submission",
      content: [
        "Authors are required to submit the ‘Author Declaration Form’ along with the extended abstract.",
        "Authors can submit a maximum of one (01) supplementary file in PDF format and Word format of the documents.",

        // ← 3 BUTTONS — NOW WITH EMAIL AUTO-CONFIGURE
        <div key="buttons" className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/downloads/icacit2026_abstract_template.docx"
            download
            className="px-10 py-5 bg-[#2295BA] text-white font-bold text-lg rounded-xl hover:bg-[#1a7a99] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center min-w-[320px] whitespace-nowrap"
          >
            Extended Abstract Template
          </a>

          <a
            href="/downloads/Author-Declaration-Form-ICACIT2026.docx"
            download
            className="px-10 py-5 bg-gray-800 text-white font-bold text-lg rounded-xl hover:bg-black transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center min-w-[280px]"
          >
            Author Declaration Form
          </a>

          {/* ← THIS BUTTON NOW OPENS EMAIL CLIENT */}
          <a
            href="mailto:computingresearch@nibm.lk?subject=Paper%20Submission%20-%20ICACIT%202026&body=Dear%20ICACIT%202026%20Team%2C%0A%0AI%20would%20like%20to%20submit%20my%20paper%20for%20review.%0A%0ATitle%3A%20%0AAuthors%3A%20%0ATrack%3A%20%0A%0APlease%20find%20attached%3A%0A-%20Extended%20Abstract%20(Word%20%2B%20PDF)%0A-%20Author%20Declaration%20Form%0A-%20Supplementary%20File%20(if%20any)%0A%0AThank%20you%20and%20best%20regards%2C%0A%5BYour%20Name%5D"
            className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center min-w-[280px]"
          >
            Submit Your Paper
          </a>
        </div>,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

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