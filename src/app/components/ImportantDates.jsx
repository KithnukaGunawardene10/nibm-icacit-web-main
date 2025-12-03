"use client";

import { useState } from "react";

export default function ImportantDates({ dates, currentStageIndex = 0 }) {
  const [selectedIndex, setSelectedIndex] = useState(currentStageIndex);

  return (
    <section
      id="important-dates"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Title */}
      <div className="space-y-4 text-left mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Important Dates
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
          Explore the key milestones of ICACIT 2026, from submission deadlines
          to conference highlights. Click on each event to access detailed
          information, understand its significance, and plan your participation
          in this premier international gathering of researchers, practitioners,
          and students in computing and engineering.
        </p>
      </div>

      {/* Timeline & Details */}
      <div className="mt-12 flex flex-col lg:flex-row lg:items-start lg:gap-16">
        {/* Timeline */}
        <div className="relative lg:flex-shrink-0 lg:w-1/2">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 w-1 bg-gray-300 h-full"></div>

          <div className="space-y-8 relative z-10">
            {dates.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="flex items-start relative cursor-pointer transition-transform duration-300"
              >
                {/* Circle */}
                <div
                  className={`flex-shrink-0 w-10 h-10 flex items-center justify-center font-bold z-10 transition-colors duration-300 ${
                    selectedIndex === index
                      ? "bg-gray-500 text-white"
                      : index === currentStageIndex
                      ? "bg-[#2295BA] text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Card Content */}
                <div
                  className={`ml-6 p-4 shadow hover:shadow-lg transition-all duration-300 w-full ${
                    selectedIndex === index
                      ? "bg-white"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      selectedIndex === index
                        ? "text-gray-900"
                        : "text-gray-800"
                    }`}
                  >
                    {item.event}
                  </h3>
                  <p
                    className={`text-sm mt-1 transition-colors duration-300 ${
                      selectedIndex === index
                        ? "text-gray-700"
                        : "text-gray-600"
                    }`}
                  >
                    {item.date}
                  </p>
                  {/* Current Stage Badge */}
                  {index === currentStageIndex && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-white bg-[#2295BA]">
                      Next Milestone
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Box */}
        <div className="mt-10 lg:mt-0 lg:flex-1">
          <h3 className="text-2xl font-bold text-gray-900">
            {dates[selectedIndex].event}
          </h3>
          {selectedIndex === currentStageIndex && (
            <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold text-white bg-[#2295BA]">
              Next Milestone
            </span>
          )}
          <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed text-justify">
            {dates[selectedIndex].description ||
              "Detailed information about this event will appear here."}
          </p>
        </div>
      </div>
    </section>
  );
}
