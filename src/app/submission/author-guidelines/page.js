// app/submission/author-guidelines/page.jsx
"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HalfCoverImage from "../../components/HalfCoverImage";

export default function AuthorGuidelines() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="Author Guidelines"
          description="Guidelines for preparing and submitting papers for ICACIT 2027."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            {/* Conference Overview */}
            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Conference Overview
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <p className="mt-6 text-[17px] leading-relaxed text-gray-700 text-justify">
                ICACIT 2027 provides a platform for researchers, academics,
                industry professionals, and students to present original work in
                computing and information technology. All submissions must
                follow the guidelines below. Papers that do not comply will be
                returned without review.
              </p>
            </div>

            {/* Submission Requirements */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Submission Requirements
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-gray-700 text-justify">
                <li>
                  Abstract and Extended Abstract must be submitted as two
                  separate files.
                </li>
                <li>
                  Submissions are made through Microsoft CMT. Authors must have
                  an account on Microsoft CMT.
                </li>
                <li>
                  The completed Author Information Form must be emailed to{" "}
                  <a
                    href="mailto:computingresearch@nibm.lk"
                    className="text-[#2295BA] underline hover:text-[#1a7a99]"
                  >
                    computingresearch@nibm.lk
                  </a>
                  . This form must not be uploaded to CMT.
                </li>
                <li>
                  The review process will begin only after the Author
                  Information Form has been received by email.
                </li>
                <li>
                  Maximum length of the Extended Abstract is 4 pages, single
                  column.
                </li>
              </ul>

              <Link
                href="/submission/submit-paper"
                className="mt-8 inline-block bg-[#2295BA] hover:bg-[#197a95] text-white font-semibold px-8 py-3 text-[16px] transition-colors"
              >
                Go to Submission Page
              </Link>
            </div>

            {/* Abstract Format */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Abstract Format
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-300 text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider w-1/4">
                        Element
                      </th>
                      <th className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">
                        Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-6 py-5 align-top font-semibold text-gray-900">
                        Title
                      </td>
                      <td className="border border-gray-300 px-6 py-5 align-top text-gray-700">
                        Maximum 100 characters including spaces. Times New Roman
                        14, bold.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-5 align-top font-semibold text-gray-900">
                        Abstract Body
                      </td>
                      <td className="border border-gray-300 px-6 py-5 align-top text-gray-700">
                        Maximum 300 words. Times New Roman 12, 1.5 line spacing.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-6 py-5 align-top font-semibold text-gray-900">
                        Keywords
                      </td>
                      <td className="border border-gray-300 px-6 py-5 align-top text-gray-700">
                        Maximum 5 keywords. Times New Roman 11, italic.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-5 align-top font-semibold text-gray-900">
                        Citations
                      </td>
                      <td className="border border-gray-300 px-6 py-5 align-top text-gray-700">
                        No citations or references are accepted in the Abstract.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[16px] text-gray-700">
                Abstracts exceeding the word limit will be returned to the
                authors.
              </p>
            </div>

            {/* Extended Abstract Format */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Extended Abstract Format
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <p className="mt-6 text-[16px] text-gray-700">
                The Extended Abstract must include the following sections, in
                this order:
              </p>
              <ol className="mt-4 list-decimal pl-6 space-y-2 text-[16px] text-gray-700">
                <li>Title</li>
                <li>Abstract</li>
                <li>Introduction</li>
                <li>Materials &amp; Methods</li>
                <li>Results &amp; Discussion</li>
                <li>Conclusions</li>
                <li>References (maximum 8)</li>
              </ol>
              <p className="mt-4 text-[16px] text-gray-700">
                All sections must use Times New Roman 12 with 1.5 line spacing.
              </p>
            </div>

            {/* Important Notes */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Important Notes
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-gray-700 text-justify">
                <li>
                  No identifying information should be included in the Abstract
                  or Extended Abstract, in the file name (for example, avoid
                  names such as "Abstract_names"), or anywhere in the content.
                </li>
                <li>
                  File formats accepted are .docx or .doc only. PDF is allowed
                  only if generated by LaTeX or TeX.
                </li>
                <li>
                  No acknowledgements should be included in the initial
                  submission. Once the abstract is approved, acknowledgements
                  may be added in the final submission.
                </li>
                <li>
                  Only one figure and one table may be included in the Extended
                  Abstract, if needed.
                </li>
                <li>Reviews will not be accepted.</li>
              </ul>
            </div>

            {/* Camera-Ready Submission */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Camera-Ready Submission (for accepted abstracts)
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-gray-700 text-justify">
                <li>
                  Authors must use the "Template for the Camera-Ready
                  Submission" provided under the Downloads section.
                </li>
                <li>
                  The template has been formatted for the ICACIT 2027
                  proceedings book, including font sizes and affiliation format.
                </li>
                <li>
                  Additional formatting instructions are provided within the
                  template document.
                </li>
                <li>
                  Submissions that do not follow these guidelines will be
                  returned to the authors.
                </li>
              </ul>
            </div>

            {/* Poster Presentations */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Poster Presentations
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-gray-700 text-justify">
                <li>Poster size: 27" × 40" (portrait), digitally printed.</li>
                <li>Reference number displayed at the top-left corner.</li>
                <li>
                  Include title, author(s), and affiliation(s) as stated in the
                  accepted abstract.
                </li>
                <li>
                  Sections: Abstract, Introduction, Methodology, Results,
                  Discussion/Conclusion, References.
                </li>
                <li>
                  Text must be legible from a distance of 1 to 1.5 metres.
                </li>
                <li>
                  Use enlarged figures, graphs, or photographs. Minimise the use
                  of tables.
                </li>
                <li>Each visual must have a descriptive title.</li>
                <li>The design should be self-explanatory for viewers.</li>
              </ul>
            </div>

            {/* Oral Presentations */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Oral Presentations
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-gray-700 text-justify">
                <li>Presenters must be physically present at the venue.</li>
                <li>
                  Each oral presentation is limited to 15 minutes: 10 minutes
                  for presentation and 5 minutes for questions.
                </li>
                <li>Presenters must bring their own laptops.</li>
                <li>A projector and audio system will be provided.</li>
              </ul>
            </div>

            {/* Mode of Participation */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Mode of Participation
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-gray-700 text-justify">
                <li>Physical presentation at the conference venue.</li>
                <li>
                  Hybrid presentation combining in-person and online delivery.
                </li>
                <li>
                  Fully online presentation through the conference platform.
                </li>
              </ul>
              <p className="mt-4 text-[16px] text-gray-700 text-justify">
                Authors may select their preferred mode during registration.
                Presenters attending physically are expected to be present at
                the venue for their scheduled session.
              </p>
            </div>

            {/* Publication and Awards */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Publication and Awards
              </h2>
              <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
              <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-gray-700 text-justify">
                <li>
                  Accepted and presented papers will be published in the ICACIT
                  2027 conference proceedings with an ISBN.
                </li>
                <li>
                  The proceedings will serve as a permanent record of the
                  research presented at the conference.
                </li>
                <li>
                  Two awards will be presented: <strong>Best Paper</strong> and{" "}
                  <strong>Best Presenter</strong>.
                </li>
                <li>
                  Award recipients will be announced during the conference
                  closing session.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
