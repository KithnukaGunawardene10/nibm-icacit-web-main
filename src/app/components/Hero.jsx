// src/app/components/Hero.jsx
"use client";

import Link from "next/link";
import { BASE_URL } from "../util/constant/common";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BASE_URL}/main-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            The International Conference on
            <br />
            <span className="text-[#2295BA] drop-shadow-2xl">
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

          <p className="mt-8 sm:mt-10 lg:mt-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
            ICACIT 2027 is organised by the School of Computing and Engineering,
            NIBM. The conference welcomes researchers, academics, industry
            professionals, and students to present their work and discuss recent
            developments in computing and information technology.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="/submission/submit-paper"
              className="inline-block bg-[#2295BA] hover:bg-[#1a7a99] text-white font-semibold px-8 py-3 text-[15px] sm:text-[16px] transition-colors"
            >
              Submit Your Paper
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
