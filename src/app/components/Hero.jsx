"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_URL } from "../util/constant/common";
import Counter from "./Counter";

const TARGET = new Date("2027-02-12T00:00:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Hero() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const counterProps = {
    bounce: 0.5,
    stagger: 0.06,
    direction: "down",
    duration: 0.8,
    fontSize: 78,
    fontWeight: 700,
    textColor: "#ffffff",
    gap: 2,
    padding: 4,
    fade: 0.25,
    motionBlur: true,
    intro: false,
    minDigits: 1,
    style: {
    fontFamily: ' "Inter", system-ui',
    // or any font you already load:
    // fontFamily: '"Poppins", sans-serif',
    // fontFamily: '"Roboto Mono", monospace',  // for a tech/odometer feel
  },
  };

  return (
    <section className="relative overflow-hidden min-h-[50vh] sm:min-h-[95vh] lg:min-h-[80vh] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BASE_URL}/main-hero.jpg')` }}
        // style={{ backgroundImage: `url('/committee/halo.png')` }}*/
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            The International Conference on
            <br />
            <span className="text-white drop-shadow-2xl">
              Advanced Computing and Information Technology
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-medium">
            12th February 2027 • Colombo, Sri Lanka
          </p>

          

          <p className="mt-4 max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 italic leading-relaxed">
            Theme: Intelligent Computing for a Resilient Future - AI, Security
            and Sustainable Innovation
          </p>

          {/* Countdown — React Bits Counter */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-end justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "Days", value: time.days },
              { label: "Hours", value: time.hours },
              { label: "Minutes", value: time.minutes },
              { label: "Seconds", value: time.seconds },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="rounded-xl bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 border border-white/10">
                  <Counter value={unit.value} {...counterProps} />
                </div>
                <span className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-gray-300">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 lg:mt-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
            ICACIT 2027 is organised by the School of Computing and Engineering,
            NIBM. The conference welcomes researchers, academics, industry
            professionals, and students to present their work and discuss recent
            developments in computing and information technology.
          </p>

                      {/* CTA */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <Link
                href="/submission/submit-paper"
                className="group relative inline-flex items-center justify-center rounded-2xl p-[2px] overflow-hidden"
              >
                {/* Spinning light border */}
                <span
                  className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#2295BA_50%,#7dd3fc_60%,transparent_70%,transparent_100%)]"
                  aria-hidden
                />

                {/* Button face */}
                <span className="relative z-10 inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#0f172a] px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold text-white transition-colors duration-300 group-hover:bg-[#2295BA]">
                  Submit Your Paper
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}