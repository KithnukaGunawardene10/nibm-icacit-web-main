// // app/components/ImportantDates.jsx
// "use client";

// import { useEffect, useRef, useState } from "react";

// const dates = [
//   {
//     event: "Submission Opens",
//     date: "1st October 2026",
//     dateISO: "2026-10-01",
//     description:
//       "The Microsoft CMT submission portal opens for ICACIT 2027. Authors are invited to submit abstracts and extended abstracts through the conference submission system.",
//   },
//   {
//     event: "Submission Deadline",
//     date: "30th November 2026",
//     dateISO: "2026-11-30",
//     description:
//       "Final date to submit abstracts and extended abstracts through the Microsoft CMT system. Submissions received after this date will not be considered for review.",
//   },
//   {
//     event: "Notification of Acceptance",
//     date: "5th January 2027",
//     dateISO: "2027-01-05",
//     description:
//       "Authors will be notified of the outcome of the review process. Accepted papers proceed to the camera-ready stage.",
//   },
//   {
//     event: "Camera-Ready Submission",
//     date: "15th January 2027",
//     dateISO: "2027-01-15",
//     description:
//       "Accepted authors must submit the final camera-ready version of their paper, prepared according to the ICACIT 2027 guidelines.",
//   },
//   {
//     event: "Registration Deadline",
//     date: "5th February 2027",
//     dateISO: "2027-02-05",
//     description:
//       "Final date to complete conference registration. At least one author of each accepted paper must register by this date for the paper to be included in the proceedings.",
//   },
//   {
//     event: "ICACIT Conference 2027",
//     date: "12th February 2027",
//     dateISO: "2027-02-12",
//     description:
//       "The conference will be held at the National Institute of Business Management (NIBM), Colombo, Sri Lanka. The programme includes keynote addresses, paper presentations, poster sessions, and networking.",
//     highlight: true,
//   },
// ];

// function getStatus(dateISO) {
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   const d = new Date(dateISO);
//   d.setHours(0, 0, 0, 0);
//   if (d < today) return "completed";
//   if (d.getTime() === today.getTime()) return "today";
//   // next upcoming
//   return "upcoming";
// }

// function StatusBadge({ status, highlight }) {
//   if (highlight) {
//     return (
//       <span className="inline-flex items-center rounded-md border border-[#2295BA]/40 bg-[#2295BA]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#2295BA]">
//         Conference
//       </span>
//     );
//   }
//   if (status === "completed") {
//     return (
//       <span className="inline-flex items-center rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
//         Completed
//       </span>
//     );
//   }
//   if (status === "today") {
//     return (
//       <span className="inline-flex items-center rounded-md border border-emerald-400/50 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
//         Today
//       </span>
//     );
//   }
//   return (
//     <span className="inline-flex items-center rounded-md border border-[#2295BA]/35 bg-[#2295BA]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#2295BA]">
//       Next up
//     </span>
//   );
// }

// function TimelineItem({ item, index, visible }) {
//   const status = getStatus(item.dateISO);
//   const isLeft = index % 2 === 0; // even → left on desktop
//   const isHighlight = item.highlight;

//   return (
//     <li
//       className={`
//         relative flex flex-col md:flex-row md:items-center
//         ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
//         transition-all duration-700 ease-out
//         ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
//       `}
//       style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
//     >
//       {/* Card */}
//       <div
//         className={`
//           w-full md:w-[45%] pl-14 sm:pl-16 md:pl-0
//           ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}
//         `}
//       >
//         <div
//           className={`
//             relative overflow-hidden rounded-2xl border p-5 sm:p-7
//             transition-all duration-500
//             ${
//               isHighlight
//                 ? "border-[#2295BA]/35 bg-[#2295BA]/[0.07] shadow-lg shadow-[#2295BA]/10"
//                 : status === "completed"
//                   ? "border-slate-200/80 bg-white/70 opacity-80 hover:opacity-100"
//                   : "border-slate-200/90 bg-white/90 shadow-sm hover:shadow-md hover:border-slate-300"
//             }
//             backdrop-blur-sm
//           `}
//         >
//           {/* soft sheen */}
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

//           <div className="relative z-10">
//             <div
//               className={`
//                 mb-3 flex flex-wrap items-center gap-2 font-mono text-xs tracking-widest
//                 ${isLeft ? "md:justify-end" : "md:justify-start"}
//                 ${status === "completed" ? "text-slate-400" : "text-slate-500"}
//               `}
//             >
//               <time>{item.date}</time>
//               <StatusBadge status={status} highlight={isHighlight} />
//             </div>

//             <h3
//               className={`
//                 text-xl sm:text-2xl font-bold tracking-tight mb-2
//                 ${isHighlight ? "text-[#2295BA]" : status === "completed" ? "text-slate-500" : "text-slate-900"}
//               `}
//             >
//               {item.event}
//             </h3>

//             <p
//               className={`
//                 text-sm sm:text-base font-light leading-relaxed
//                 ${status === "completed" ? "text-slate-400" : "text-slate-600"}
//                 ${isLeft ? "md:ml-auto" : ""}
//                 max-w-md
//                 ${isLeft ? "md:mr-0" : ""}
//               `}
//             >
//               {item.description}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Center node */}
//       <div className="absolute left-[19px] sm:left-[23px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
//         <span
//           className={`
//             flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full
//             border-2 transition-all duration-700
//             ${
//               isHighlight
//                 ? "border-[#2295BA] bg-[#2295BA] shadow-[0_0_16px_rgba(34,149,186,0.55)]"
//                 : status === "completed"
//                   ? "border-slate-300 bg-white shadow-[0_0_8px_rgba(34,149,186,0.15)]"
//                   : "border-[#2295BA]/70 bg-white shadow-[0_0_12px_rgba(34,149,186,0.35)]"
//             }
//           `}
//         >
//           <span
//             className={`
//               h-1.5 w-1.5 rounded-full transition-colors duration-700
//               ${
//                 isHighlight
//                   ? "bg-white"
//                   : status === "completed"
//                     ? "bg-slate-300"
//                     : "bg-[#2295BA]"
//               }
//             `}
//           />
//         </span>
//       </div>

//       {/* Spacer for alternating layout */}
//       <div className="hidden md:block md:w-[45%]" />
//     </li>
//   );
// }

// export default function ImportantDates() {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);
//   const [progress, setProgress] = useState(0);

//   // How far along the timeline we are (completed items)
//   useEffect(() => {
//     const completed = dates.filter((d) => getStatus(d.dateISO) === "completed").length;
//     setProgress(completed / dates.length);
//   }, []);

//   // Scroll-in animation (CodeX-style)
//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           io.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <section
//       id="important-dates"
//       ref={sectionRef}
//       className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
//     >
//       {/* ambient glow */}
//       <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-[#2295BA]/10 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#2295BA]/[0.06] blur-3xl" />

//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         {/* Header — CodeX style */}
//         <div className="text-center mb-14 sm:mb-20">
//           <span className="inline-block px-4 py-1 mb-5 rounded-full border border-slate-200/80 bg-white/70 text-[#2295BA] text-xs font-mono uppercase tracking-[0.2em] shadow-sm backdrop-blur-sm">
//             Timeline
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
//             Important{" "}
//             <span className="text-[#2295BA]">Dates</span>
//           </h2>
//           <p className="mt-4 text-slate-500 font-light tracking-wide max-w-lg mx-auto text-sm sm:text-base">
//             The roadmap for submissions, decisions, and the conference day.
//           </p>
//         </div>

//         {/* Timeline spine + items */}
//         <div className="relative max-w-5xl mx-auto">
//           {/* Base line */}
//           <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-200 z-0" />

//           {/* Progress / accent line (fills as events complete) */}
//           <div
//             className="absolute left-[27px] md:left-1/2 top-0 w-[2px] -translate-x-1/2 z-0 bg-[#2295BA] shadow-[0_0_12px_rgba(34,149,186,0.45)] transition-all duration-1000 ease-out"
//             style={{ height: `${Math.max(progress * 100, 4)}%` }}
//           />

//           <ol className="relative space-y-12 sm:space-y-16">
//             {dates.map((item, index) => (
//               <TimelineItem
//                 key={index}
//                 item={item}
//                 index={index}
//                 visible={visible}
//               />
//             ))}
//           </ol>
//         </div>
//       </div>
//     </section>
//   );
// }

// app/components/ImportantDates.jsx
"use client";

import { useEffect, useRef, useState } from "react";

const dates = [
  {
    event: "Submission Opens",
    date: "1st October 2026",
    dateISO: "2026-10-01",
    description:
      "The Microsoft CMT submission portal opens for ICACIT 2027. Authors are invited to submit abstracts and extended abstracts through the conference submission system.",
    icon: "calendar",
  },
  {
    event: "Submission Deadline",
    date: "30th November 2026",
    dateISO: "2026-11-30",
    description:
      "Final date to submit abstracts and extended abstracts through the Microsoft CMT system. Submissions received after this date will not be considered for review.",
    icon: "clock",
  },
  {
    event: "Notification of Acceptance",
    date: "5th January 2027",
    dateISO: "2027-01-05",
    description:
      "Authors will be notified of the outcome of the review process. Accepted papers proceed to the camera-ready stage.",
    icon: "check",
  },
  {
    event: "Camera-Ready Submission",
    date: "15th January 2027",
    dateISO: "2027-01-15",
    description:
      "Accepted authors must submit the final camera-ready version of their paper, prepared according to the ICACIT 2027 guidelines.",
    icon: "user",
  },
  {
    event: "Registration Deadline",
    date: "5th February 2027",
    dateISO: "2027-02-05",
    description:
      "Final date to complete conference registration. At least one author of each accepted paper must register by this date for the paper to be included in the proceedings.",
    icon: "calendar",
  },
  {
    event: "ICACIT Conference 2027",
    date: "12th February 2027",
    dateISO: "2027-02-12",
    description:
      "The conference will be held at the National Institute of Business Management (NIBM), Colombo, Sri Lanka. The programme includes keynote addresses, paper presentations, poster sessions, and networking.",
    highlight: true,
    icon: "star",
  },
];

function getStatus(dateISO) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(dateISO);
  d.setHours(0, 0, 0, 0);

  // Special case: Submission Opens window (1 Oct – 30 Nov 2026)
  if (dateISO === "2026-10-01") {
    const deadline = new Date("2026-11-30");
    deadline.setHours(0, 0, 0, 0);
    if (today >= d && today <= deadline) return "open"; // currently open
    if (today > deadline) return "completed";
  }

  if (d < today) return "completed";
  if (d.getTime() === today.getTime()) return "today";
  return "upcoming";
}

function getNextMilestoneIndex() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // While submissions are open, highlight "Submission Opens"
  const openDate = new Date("2026-10-01");
  const deadline = new Date("2026-11-30");
  openDate.setHours(0, 0, 0, 0);
  deadline.setHours(0, 0, 0, 0);

  if (today >= openDate && today <= deadline) {
    return 0; // index of "Submission Opens"
  }

  for (let i = 0; i < dates.length; i++) {
    const d = new Date(dates[i].dateISO);
    d.setHours(0, 0, 0, 0);
    if (d >= today) return i;
  }
  return -1;
}

/* ---------- Calendar helpers ---------- */
function formatICSDate(dateISO) {
  return dateISO.replace(/-/g, "") + "T090000";
}

function buildICS() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ICACIT 2027//Important Dates//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];

  dates.forEach((item, i) => {
    const start = formatICSDate(item.dateISO);
    lines.push(
      "BEGIN:VEVENT",
      `UID:icacit2027-${i}@nibm.lk`,
      `DTSTAMP:${formatICSDate(new Date().toISOString().slice(0, 10))}`,
      `DTSTART:${start}`,
      `DTEND:${start}`,
      `SUMMARY:ICACIT 2027 – ${item.event}`,
      `DESCRIPTION:${item.description.replace(/\n/g, " ")}`,
      "LOCATION:NIBM, Colombo, Sri Lanka",
      "END:VEVENT"
    );
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

function downloadICS() {
  const blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ICACIT_2027_Important_Dates.ics";
  a.click();
  URL.revokeObjectURL(url);
}

function googleCalendarUrl() {
  const conf = dates.find((d) => d.highlight) || dates[dates.length - 1];
  const start = conf.dateISO.replace(/-/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `ICACIT 2027 – ${conf.event}`,
    dates: `${start}/${start}`,
    details: conf.description,
    location: "NIBM, Colombo, Sri Lanka",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function outlookCalendarUrl() {
  const conf = dates.find((d) => d.highlight) || dates[dates.length - 1];
  const start = `${conf.dateISO}T09:00:00`;
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: `ICACIT 2027 – ${conf.event}`,
    startdt: start,
    enddt: start,
    body: conf.description,
    location: "NIBM, Colombo, Sri Lanka",
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

function yahooCalendarUrl() {
  const conf = dates.find((d) => d.highlight) || dates[dates.length - 1];
  const start = conf.dateISO.replace(/-/g, "");
  const params = new URLSearchParams({
    v: "60",
    title: `ICACIT 2027 – ${conf.event}`,
    st: start,
    desc: conf.description,
    in_loc: "NIBM, Colombo, Sri Lanka",
  });
  return `https://calendar.yahoo.com/?${params.toString()}`;
}

/* ---------- Icons ---------- */
const Icon = ({ name, className = "w-4 h-4" }) => {
  const icons = {
    calendar: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    user: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    star: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  };
  return icons[name] || icons.calendar;
};

function StatusBadge({ status, isNext, highlight }) {
  if (highlight) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2295BA]/10 border border-[#2295BA]/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#2295BA]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2295BA] animate-pulse" />
        Conference
      </span>
    );
  }

  // Currently open (Submission Opens window)
  if (status === "open") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Open Now
      </span>
    );
  }

  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        Completed
      </span>
    );
  }

  if (isNext) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Next Milestone
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-600">
      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
      Upcoming
    </span>
  );
}

function TimelineItem({ item, index, visible, isNext }) {
  const status = getStatus(item.dateISO);
  const isLeft = index % 2 === 0;
  const isHighlight = item.highlight;
  const isActive = isNext || status === "open";

  return (
    <li
      className={`
        relative flex flex-col md:flex-row md:items-center
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
    >
      {/* Card */}
      <div
        className={`
          w-full md:w-[45%] pl-16 md:pl-0
          ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}
        `}
      >
        <div
          className={`
            relative rounded-2xl border p-5 sm:p-6 transition-all duration-300
            ${
              isHighlight
                ? "border-[#2295BA]/40 bg-[#2295BA]/[0.06] shadow-lg shadow-[#2295BA]/10"
                : status === "completed"
                ? "border-slate-200 bg-white/80 opacity-75 hover:opacity-100"
                : isActive
                ? "border-emerald-200 bg-white shadow-md shadow-emerald-100/50"
                : "border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300"
            }
          `}
        >
          <div
            className={`flex flex-wrap items-center gap-2 mb-3 ${
              isLeft ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <time className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {item.date}
            </time>
            <StatusBadge status={status} isNext={isNext} highlight={isHighlight} />
          </div>

          <h3
            className={`
              text-lg sm:text-xl font-bold tracking-tight mb-2
              ${
                isHighlight
                  ? "text-[#2295BA]"
                  : status === "completed"
                  ? "text-slate-500"
                  : "text-slate-900"
              }
            `}
          >
            {item.event}
          </h3>

          <p
            className={`
              text-sm leading-relaxed
              ${status === "completed" ? "text-slate-400" : "text-slate-600"}
              max-w-md ${isLeft ? "md:ml-auto" : ""}
            `}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Center node with icon + animations */}
      <div className="absolute left-[22px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
        {/* Running ring animation around the CURRENT / OPEN milestone */}
        {isActive && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-40" />
            <span className="absolute -inset-1 rounded-full border border-emerald-300/70 animate-pulse" />
            <span
              className="absolute -inset-3 rounded-full border border-emerald-200/50 animate-pulse"
              style={{ animationDuration: "2.5s" }}
            />
          </>
        )}

        {/* Continuous gentle scale pulse on every icon */}
        <span
          className={`
            relative flex h-11 w-11 items-center justify-center rounded-full border-2
            ${
              isHighlight
                ? "border-[#2295BA] bg-[#2295BA] text-white shadow-[0_0_20px_rgba(34,149,186,0.45)]"
                : status === "completed"
                ? "border-slate-300 bg-white text-slate-400"
                : isActive
                ? "border-emerald-400 bg-emerald-50 text-emerald-600 shadow-[0_0_18px_rgba(16,185,129,0.4)]"
                : "border-[#2295BA]/50 bg-white text-[#2295BA] shadow-[0_0_12px_rgba(34,149,186,0.2)]"
            }
          `}
          style={{
            animation: "iconBuzz 3s ease-in-out infinite",
            animationDelay: `${index * 0.35}s`,
          }}
        >
          <Icon name={item.icon} className="w-5 h-5" />
        </span>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-[45%]" />
    </li>
  );
}

export default function ImportantDates() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [nextIndex, setNextIndex] = useState(-1);

  // Calculate next milestone only on the client to avoid hydration mismatch
  useEffect(() => {
    setNextIndex(getNextMilestoneIndex());
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="important-dates"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white"
    >
      {/* Keyframes – plain style tag (no styled-jsx) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes iconBuzz {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.08); }
            }
          `,
        }}
      />

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-[#2295BA]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-64 w-64 rounded-full bg-[#2295BA]/5 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Important Dates
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-[#2295BA]" />
          <p className="mt-4 text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
            Mark your calendar with these crucial milestones for ICACIT 2027
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-slate-200" />

          <ol className="relative space-y-12 sm:space-y-16">
            {dates.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                visible={visible}
                isNext={index === nextIndex}
              />
            ))}
          </ol>

          <div className="absolute left-[27px] md:left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300" />
        </div>

        {/* Don't Miss Out CTA + Calendar options */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="group relative inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-full text-[15px] shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Don't Miss Out! Start Planning Today
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                showOptions ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expandable calendar options */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-out
              ${showOptions ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
            `}
          >
            <p className="text-center text-sm text-slate-500 mb-4">
              Add all important dates to your calendar
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={googleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-red-300 hover:bg-red-50 text-slate-800 font-medium px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all"
              >
                Google Calendar
              </a>

              <a
                href={outlookCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-800 font-medium px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all"
              >
                Outlook
              </a>

              <button
                onClick={downloadICS}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-medium px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all"
              >
                Apple Calendar
              </button>

              <a
                href={yahooCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-slate-800 font-medium px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all"
              >
                Yahoo Calendar
              </a>

              <button
                onClick={downloadICS}
                className="inline-flex items-center gap-2 bg-[#2295BA] hover:bg-[#197a95] text-white font-medium px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all"
              >
                Download .ics
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}