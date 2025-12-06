// app/components/ImportantDates.jsx
"use client";

import { useState } from "react";

const dates = [
  {
    event: "Call for Abstract Submission / Extended Abstract Submission",
    date: "10th November 2025",
    description:
      "The submission portal opens! Authors are invited to submit extended abstracts (2–4 pages) outlining original research or innovative applications in any of the conference tracks.",
  },
  {
    event: "Deadline for Abstract Submission / Extended Abstract Submission",
    date: "20th December 2025",
    description:
      "Final deadline for all abstract submissions. No further extensions will be granted. All submissions undergo initial screening for relevance and quality.",
  },
  {
    event: "Notification of Acceptance",
    date: "20th January 2026",
    description:
      "Authors will be notified about the acceptance of their abstracts. Accepted authors proceed to full paper submission.",
  },
  {
    event: "Submission of Camera-Ready Papers",
    date: "30th January 2026",
    description:
      "Deadline for submitting final camera-ready versions of accepted papers following reviewer feedback and formatting guidelines.",
  },
  {
    event: "Commencement of Registration for Conference",
    date: "10th February 2026",
    description:
      "Early bird registration opens. Secure your spot and benefit from reduced fees!",
  },
  {
    event: "Deadline for Registration for Conference",
    date: "20th February 2026",
    description:
      "Final registration deadline. After this date, on-site registration may be available at higher rates.",
  },
  {
    event: "ICACIT Conference '26",
    date: "26th February 2026",
    description:
      "The main event! Join us in Colombo, Sri Lanka for keynote speeches, paper presentations, workshops, and networking with global leaders in computing and information technology.",
    isFinale: true,
  },
];

export default function ImportantDates({ currentStageIndex = 0 }) {
  const [selectedIndex, setSelectedIndex] = useState(currentStageIndex);

  return (
    <section
      id="important-dates"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Title */}
      <div className="text-center lg:text-left max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Important Dates
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-gray-700 text-justify">
          Stay on track with ICACIT 2026! Below are the key milestones from submission to the grand conference day. Click any stage to learn more.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2295BA] to-gray-300 hidden lg:block" />

          <div className="space-y-8">
            {dates.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="flex items-start group cursor-pointer"
              >
                {/* Circle */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 z-10 shadow-md
                    ${
                      selectedIndex === index
                        ? "bg-[#2295BA] text-white scale-110"
                        : index === currentStageIndex
                        ? "bg-[#2295BA] text-white ring-4 ring-[#2295BA]/30"
                        : item.isFinale
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 border-2 border-gray-300"
                    }`}
                >
                  {index + 1}
                </div>

                {/* Card */}
                <div
                  className={`ml-5 flex-1 p-5 rounded-xl transition-all duration-300 border
                    ${
                      selectedIndex === index
                        ? "bg-[#2295BA] text-white shadow-xl border-[#2295BA]"
                        : item.isFinale
                        ? "bg-orange-50 border-orange-300 shadow-lg"
                        : "bg-white border-gray-200 shadow hover:shadow-lg hover:border-[#2295BA]/50"
                    }`}
                >
                  <h3 className="font-bold text-[19px] text-gray-900">
                    {item.event}
                  </h3>
                  <p className={`mt-1 font-medium ${selectedIndex === index ? "text-white/90" : "text-[#2295BA]"}`}>
                    {item.date}
                  </p>

                  {index === currentStageIndex && (
                    <span className="inline-block mt-3 px-3 py-1 text-xs font-bold text-black bg-[#76F527] rounded-full">
                      CURRENT STAGE
                    </span>
                  )}
                  {item.isFinale && (
                    <span className="inline-block mt-3 px-4 py-2 text-sm font-bold text-orange-800 bg-orange-200 rounded-full">
                      CONFERENCE DAY
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Panel */}
        <div className="lg:sticky lg:top-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {dates[selectedIndex].event}
            </h3>
            <p className="mt-3 text-xl font-bold text-[#2295BA]">
              {dates[selectedIndex].date}
            </p>

            {selectedIndex === currentStageIndex && (
              <span className="inline-block mt-4 px-4 py-2 text-sm font-bold text-white bg-[#2295BA] rounded-full">
                Next Milestone
              </span>
            )}
            {dates[selectedIndex].isFinale && (
              <span className="inline-block mt-4 px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg">
                ICACIT Conference '26
              </span>
            )}

            <p className="mt-6 text-[17px] leading-relaxed text-gray-700 text-justify">
              {dates[selectedIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}