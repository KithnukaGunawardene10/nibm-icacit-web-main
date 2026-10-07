// app/components/ImportantDates.jsx
"use client";

const dates = [
  {
    event: "Submission Opens",
    date: "1st October 2026",
    description:
      "The Microsoft CMT submission portal opens for ICACIT 2027. Authors are invited to submit abstracts and extended abstracts through the conference submission system.",
  },
  {
    event: "Notification of Acceptance",
    date: "5th January 2027",
    description:
      "Authors will be notified of the outcome of the review process. Accepted papers proceed to the camera-ready stage.",
  },
  {
    event: "Camera-Ready Submission",
    date: "15th January 2027",
    description:
      "Accepted authors must submit the final camera-ready version of their paper, prepared according to the ICACIT 2027 guidelines.",
  },
  {
    event: "Registration Deadline",
    date: "5th February 2027",
    description:
      "Final date to complete conference registration. At least one author of each accepted paper must register by this date for the paper to be included in the proceedings.",
  },
  {
    event: "ICACIT Conference 2027",
    date: "12th February 2027",
    description:
      "The conference will be held at the National Institute of Business Management (NIBM), Colombo, Sri Lanka. The programme includes keynote addresses, paper presentations, poster sessions, and networking.",
  },
];

export default function ImportantDates() {
  return (
    <section id="important-dates" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Important Dates
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
          <p className="mt-6 text-[17px] leading-relaxed text-gray-700 max-w-5xl text-justify">
            The following dates apply to ICACIT 2027. Authors and participants
            are advised to note these deadlines carefully and plan their
            submissions and travel accordingly.
          </p>
        </div>

        {/* Mobile — stacked cards */}
        <div className="lg:hidden space-y-6">
          {dates.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 border-l-4 border-l-[#2295BA] p-5"
            >
              <p className="text-[14px] font-semibold text-[#2295BA] uppercase tracking-wider">
                {item.date}
              </p>
              <h3 className="mt-2 text-[17px] font-bold text-gray-900 leading-snug">
                {item.event}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop — table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider w-[18%]">
                  Date
                </th>
                <th className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider w-[32%]">
                  Event
                </th>
                <th className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 1 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-6 py-5 align-top">
                    <span className="font-semibold text-[#2295BA] text-[15px]">
                      {item.date}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-6 py-5 align-top">
                    <span className="font-bold text-gray-900 text-[16px] leading-snug">
                      {item.event}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-6 py-5 align-top">
                    <span className="text-[15px] leading-relaxed text-gray-700">
                      {item.description}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
