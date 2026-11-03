// app/components/JournalViewer.jsx
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, FileText, ExternalLink, Menu, X } from "lucide-react";
import { BASE_URL } from "../util/constant/common";

const journalData = [
  {
    year: 2025,
    journals: [
      {
        title: "IJACIT 2025 Journal - Volume 01 | Issue 01",
        description:
          "Papers presented in ICACIT March 2025 conference proceedings - Full papers and extended abstracts.",
        pdfLink: `${BASE_URL}/journals/ijacit_2025_vol_01_iss_01.pdf`,
      },
    ],
  },
];

export default function JournalViewer() {
  const [selectedPdf, setSelectedPdf] = useState(
    journalData[0].journals[0].pdfLink
  );
  const [selectedMeta, setSelectedMeta] = useState(
    journalData[0].journals[0]
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openYear, setOpenYear] = useState(journalData[0].year);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  const selectJournal = (journal) => {
    setSelectedPdf(journal.pdfLink);
    setSelectedMeta(journal);
    setSidebarOpen(false);
  };

  return (
    <section className="bg-slate-50/80 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-flex items-center rounded-full border border-[#2295BA]/25 bg-[#2295BA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2295BA]">
            Publications
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Published Journal Issues
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            Browse and read full conference proceedings and journal volumes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#2295BA] text-white font-semibold px-4 py-3 text-sm shadow-sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
            {sidebarOpen ? "Hide issues" : "Browse issues"}
          </button>

          {/* Sidebar */}
          <aside
            className={`
              ${sidebarOpen ? "block" : "hidden"} lg:block
              w-full lg:w-[320px] shrink-0
            `}
          >
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/80">
                <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <FileText size={16} className="text-[#2295BA]" />
                  Journal archive
                </h3>
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-3 space-y-2">
                {journalData.map((yearGroup) => (
                  <div key={yearGroup.year}>
                    {/* Year accordion */}
                    <button
                      onClick={() => toggleYear(yearGroup.year)}
                      className="w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm font-bold text-slate-900">
                        {yearGroup.year}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform duration-200 ${
                          openYear === yearGroup.year ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Issues */}
                    {openYear === yearGroup.year && (
                      <ul className="mt-1 space-y-1.5 pb-2">
                        {yearGroup.journals.map((journal, idx) => {
                          const active = selectedPdf === journal.pdfLink;
                          return (
                            <li key={idx}>
                              <button
                                type="button"
                                onClick={() => selectJournal(journal)}
                                className={`
                                  w-full text-left rounded-xl px-3.5 py-3 transition-all duration-200 border
                                  ${
                                    active
                                      ? "bg-[#2295BA]/10 border-[#2295BA]/30 shadow-sm"
                                      : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-100"
                                  }
                                `}
                              >
                                <p
                                  className={`text-sm font-semibold leading-snug ${
                                    active ? "text-[#2295BA]" : "text-slate-800"
                                  }`}
                                >
                                  {journal.title}
                                </p>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2">
                                  {journal.description}
                                </p>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* PDF Viewer panel */}
          <div className="flex-1 min-w-0">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {/* Viewer toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-slate-100 bg-slate-50/80">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">
                    {selectedMeta?.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {selectedMeta?.description}
                  </p>
                </div>
                <a
                  href={selectedPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#2295BA]/40 hover:text-[#2295BA] transition-colors"
                >
                  <ExternalLink size={14} />
                  Open in new tab
                </a>
              </div>

              {/* iframe */}
              <div className="h-[70vh] sm:h-[75vh] bg-slate-100/50">
                {isClient ? (
                  <iframe
                    src={selectedPdf}
                    className="w-full h-full"
                    title="Journal PDF Viewer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    Loading viewer…
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}