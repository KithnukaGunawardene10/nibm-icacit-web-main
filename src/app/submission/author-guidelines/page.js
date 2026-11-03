// app/submission/author-guidelines/page.jsx
"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HalfCoverImage from "../../components/HalfCoverImage";

export default function AuthorGuidelines() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <HalfCoverImage
        title="Author Guidelines"
        description="Guidelines for preparing and submitting papers for ICACIT 2027."
        image="/main-hero.jpg"
        height="30vh"
        blackOpacity="bg-black/50"
      />

      <main>
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Conference Overview */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Conference Overview
              </h2>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#2295BA]" />
              <p className="mt-6 max-w-3xl mx-auto text-[17px] leading-relaxed text-gray-700">
                ICACIT 2027 provides a platform for researchers, academics,
                industry professionals, and students to present original work in
                computing and information technology. All submissions must
                follow the guidelines below. Papers that do not comply will be
                returned without review.
              </p>
            </div>

            {/* Submission Requirements */}
            <div className="mb-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1.5 bg-[#2295BA] shrink-0" />
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#2295BA]/10 flex items-center justify-center text-[#2295BA]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Submission Requirements
                    </h3>
                  </div>

                  <p className="text-gray-700 font-medium mb-4">
                    Authors must submit the following documents:
                  </p>

                  <ul className="space-y-3 text-[15.5px] text-gray-700">
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#2295BA]">✓</span>
                      <span>
                        Abstract and Extended Abstract must be submitted as{" "}
                        <strong>two separate files</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#2295BA]">✓</span>
                      <span>
                        Submissions are made through{" "}
                        <strong>Microsoft CMT</strong>. Authors must have an
                        account on Microsoft CMT.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#2295BA]">✓</span>
                      <span>
                        The completed Author Declaration Form must be emailed to{" "}
                        <a
                          href="mailto:computingresearch@nibm.lk"
                          className="text-[#2295BA] underline hover:text-[#1a7a99]"
                        >
                          computingresearch@nibm.lk
                        </a>
                        . This form must <strong>not</strong> be uploaded to CMT.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#2295BA]">✓</span>
                      <span>
                        Maximum length of the Extended Abstract is{" "}
                        <strong>4 pages</strong>, single column.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[15px] flex gap-3">
                    <span className="text-lg">⚠</span>
                    <span>
                      The review process will begin only after the Author
                      Declaration Form has been received by email.
                    </span>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/submission/submit-paper"
                      className="inline-flex items-center gap-2 bg-[#2295BA] hover:bg-[#197a95] text-white font-semibold px-7 py-3 rounded-xl text-[15px] transition-colors"
                    >
                      Go to Submission Page
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Abstract + Extended Abstract */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex h-full">
                  <div className="w-1.5 bg-indigo-500 shrink-0" />
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-5">
                      Abstract Format
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-gray-800">
                          Title
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          Maximum 100 characters including spaces. Times New
                          Roman 14, bold.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-gray-800">
                          Abstract Body
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          Maximum 300 words. Times New Roman 12, 1.5 line
                          spacing.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-gray-800">
                          Keywords
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          Maximum 5 keywords. Times New Roman 11, italic.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-sm flex gap-2">
                      <span>⚠</span>
                      <span>
                        No citations or references are accepted in the Abstract.
                        Abstracts exceeding the word limit will be returned.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex h-full">
                  <div className="w-1.5 bg-blue-500 shrink-0" />
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-5">
                      Extended Abstract Format
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      The Extended Abstract must include the following sections,
                      in this order:
                    </p>
                    <ul className="space-y-2.5 text-[15px] text-gray-700">
                      {[
                        "Title",
                        "Abstract",
                        "Introduction",
                        "Materials & Methods",
                        "Results & Discussion",
                        "Conclusions",
                        "References (maximum 8)",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-sm text-gray-600">
                      All sections must use <strong>Times New Roman 12</strong>{" "}
                      with <strong>1.5 line spacing</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mb-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1.5 bg-amber-500 shrink-0" />
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-amber-500 text-xl">⚠</span>
                    <h3 className="text-xl font-bold text-gray-900">
                      Important Notes
                    </h3>
                  </div>
                  <ul className="space-y-3 text-[15.5px] text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        No identifying information should be included in the
                        Abstract or Extended Abstract, in the file name (for
                        example, avoid names such as
                        &quot;Abstract_names&quot;), or anywhere in the content.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        File formats accepted are <strong>.docx or .doc</strong>{" "}
                        only. PDF is allowed only if generated by LaTeX or TeX.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        No acknowledgements should be included in the initial
                        submission. Once the abstract is approved,
                        acknowledgements may be added in the final submission.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        Only one figure and one table may be included in the
                        Extended Abstract, if needed.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Reviews will not be accepted.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Camera-Ready */}
            <div className="mb-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1.5 bg-emerald-500 shrink-0" />
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">
                    Camera-Ready Submission (for accepted abstracts)
                  </h3>
                  <ul className="space-y-3 text-[15.5px] text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>
                        Authors must use the templates provided under the
                        Downloads section.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>
                        Templates are formatted for the ICACIT 2027 proceedings
                        book, including font sizes and affiliation format.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>
                        Additional formatting instructions are provided within
                        the template documents.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>
                        Submissions that do not follow these guidelines will be
                        returned to the authors.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Poster + Oral */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex h-full">
                  <div className="w-1.5 bg-orange-400 shrink-0" />
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Poster Presentations
                    </h3>
                    <div className="bg-orange-50 rounded-xl p-4 text-[14.5px] text-gray-700 space-y-2">
                      <p>
                        <strong>Size:</strong> 27&quot; × 40&quot; (portrait),
                        digitally printed.
                      </p>
                      <p>
                        Reference number displayed at the top-left corner.
                      </p>
                      <p>
                        Include title, author(s), and affiliation(s) as stated in
                        the accepted abstract.
                      </p>
                      <p>
                        Sections: Abstract, Introduction, Methodology, Results,
                        Discussion/Conclusion, References.
                      </p>
                      <p>
                        Text must be legible from a distance of 1 to 1.5 metres.
                      </p>
                      <p>
                        Use enlarged figures, graphs, or photographs. Minimise
                        the use of tables.
                      </p>
                      <p>Each visual must have a descriptive title.</p>
                      <p>
                        The design should be self-explanatory for viewers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex h-full">
                  <div className="w-1.5 bg-violet-500 shrink-0" />
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Oral Presentations
                    </h3>
                    <ul className="space-y-3 text-[15px] text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-violet-500">✓</span>
                        <span>
                          Presenters must be physically present at the venue.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-violet-500">✓</span>
                        <span>
                          Each oral presentation is limited to{" "}
                          <strong>15 minutes</strong>: 10 minutes for
                          presentation and 5 minutes for questions.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-violet-500">✓</span>
                        <span>Presenters must bring their own laptops.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-violet-500">✓</span>
                        <span>
                          A projector and audio system will be provided.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mode of Participation */}
            <div className="mb-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1.5 bg-cyan-500 shrink-0" />
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">
                    Mode of Participation
                  </h3>
                  <ul className="space-y-3 text-[15.5px] text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Physical presentation at the conference venue.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Hybrid presentation combining in-person and online
                        delivery.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>
                        Fully online presentation through the conference
                        platform.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-5 text-[15px] text-gray-600">
                    Authors may select their preferred mode during registration.
                    Presenters attending physically are expected to be present at
                    the venue for their scheduled session.
                  </p>
                </div>
              </div>
            </div>

            {/* Publication and Awards */}
            <div className="mb-16 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1.5 bg-[#2295BA] shrink-0" />
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">
                    Publication and Awards
                  </h3>
                  <ul className="space-y-3 text-[15.5px] text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-[#2295BA] mt-1">•</span>
                      <span>
                        Accepted and presented papers will be published in the
                        ICACIT 2027 conference proceedings with an ISBN.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#2295BA] mt-1">•</span>
                      <span>
                        The proceedings will serve as a permanent record of the
                        research presented at the conference.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#2295BA] mt-1">•</span>
                      <span>
                        Two awards will be presented:{" "}
                        <strong>Best Paper</strong> and{" "}
                        <strong>Best Presenter</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#2295BA] mt-1">•</span>
                      <span>
                        Award recipients will be announced during the conference
                        closing session.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resources & Downloads */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Resources &amp; Downloads
              </h2>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#2295BA]" />
              <p className="mt-4 text-gray-600">
                Download the required templates and forms for your submission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Author Declaration Form */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Author Declaration Form
                </h4>
                <p className="text-sm text-gray-600 mb-6 flex-1">
                  Official author declaration for ICACIT 2027. Complete this form
                  and email it to the conference committee. Do not upload it to
                  CMT.
                </p>
                <a
                  href="/downloads/Author-Declaration-Form-ICACIT2027.docx"
                  download="Author-Declaration-Form-ICACIT2027.docx"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#2295BA] hover:bg-[#197a95] text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>

              {/* Extended Abstract Template */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Extended Abstract Template
                </h4>
                <p className="text-sm text-gray-600 mb-6 flex-1">
                  Official template for preparing the Extended Abstract (up to 4
                  pages) according to ICACIT 2027 formatting guidelines.
                </p>
                <a
                  href="/downloads/Extended-abstract-template-ICACIT2027.docx"
                  download="Extended-abstract-template-ICACIT2027.docx"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#2295BA] hover:bg-[#197a95] text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>

              {/* Abstract Template */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Abstract Template
                </h4>
                <p className="text-sm text-gray-600 mb-6 flex-1">
                  Recommended template for preparing the short Abstract (title,
                  body, and keywords) for ICACIT 2027.
                </p>
                <a
                  href="/downloads/icacit2027_abstract_template.docx"
                  download="icacit2027_abstract_template.docx"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#2295BA] hover:bg-[#197a95] text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}