// src/app/components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import { BASE_URL } from "../util/constant/common";

export default function Hero() {
  const targetDate = new Date("2026-02-26T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Start with zeros to avoid hydration mismatch
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  // Optional: Show a simple placeholder while loading
  if (!mounted) {
    return (
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            ICACIT 2026
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden h-[80vh] sm:h-[75vh] lg:h-[80vh]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BASE_URL}/main-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight">
          The International Conference on
          <br />
          <span className="text-[#2295BA] drop-shadow-2xl">
            Advanced Computing and Information Technology
          </span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-100 font-medium">
          February 26th, 2026 • Colombo, Sri Lanka
        </p>

        {/* MASSIVE COUNTDOWN — NO ERROR */}
        <div className="mt-16 flex flex-wrap gap-10 sm:gap-14 justify-center">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/10 backdrop-blur-2xl border-3 border-white/30 rounded-3xl px-10 py-9 min-w-[200px] shadow-4xl hover:scale-110 transition-all"
            >
              {/* HUGE DIGITS — SAFE & GORGEOUS */}
              <span className="text-6xl sm:text-6xl md:text-10xl lg:text-[100px] xl:text-[45px] leading-none font-extrabold text-[#2295BA] drop-shadow-2xl">
                {formatNumber(item.value)}
              </span>
              <span className="mt-6 text-2xl md:text-3xl font-bold text-white uppercase tracking-widest opacity-90">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-5xl text-lg md:text-xl text-gray-200 font-light leading-relaxed">
          ICACIT 2026, organized by NIBM School of Computing & Engineering, is a premier forum for researchers, practitioners, and students to share innovative ideas and present original research.
        </p>
      </div>
    </section>
  );
}