// components/JournalViewer.jsx
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
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

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openYear, setOpenYear] = useState(journalData[0].year); // default open first year
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile toggle button */}
        <button
          className="md:hidden px-4 py-2 bg-[#2295BA] text-white font-semibold"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Hide Journals" : "Show Journals"}
        </button>

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block md:w-1/4 space-y-4 overflow-y-auto max-h-[80vh] p-4 bg-white border border-gray-200 shadow`}
        >
          {journalData.map((yearGroup) => (
            <div key={yearGroup.year} className="border-b pb-2">
              {/* Year header */}
              <button
                onClick={() => toggleYear(yearGroup.year)}
                className="w-full flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 p-2 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {yearGroup.year} Journals
                </h3>

                {openYear === yearGroup.year ? (
                  <ChevronDown size={20} className="text-gray-500" />
                ) : (
                  <ChevronRight size={20} className="text-gray-500" />
                )}
              </button>

              {/* Collapsible Journal List */}
              {openYear === yearGroup.year && (
                <ul className="space-y-2 mt-3 pl-1">
                  {yearGroup.journals.map((journal, idx) => (
                    <li
                      key={idx}
                      onClick={() => setSelectedPdf(journal.pdfLink)}
                      className={`cursor-pointer p-3 border transition-colors ${
                        selectedPdf === journal.pdfLink
                          ? "bg-gray-300 text-white"
                          : "bg-white border-gray-100 text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <p className="font-semibold text-black">
                        {journal.title}
                      </p>
                      <p className="text-sm text-black mt-1">
                        {journal.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 h-[80vh] border border-gray-200 shadow overflow-hidden">
          {isClient && (
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              style={{ zoom: 0.85 }}
              title="Journal PDF Viewer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
