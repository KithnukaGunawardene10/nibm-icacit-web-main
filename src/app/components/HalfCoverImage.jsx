"use client";

import { BASE_URL } from "../util/constant/common";

export default function HalfCoverImage({
  title,
  description,
  image = "/main-hero.jpg",
  height = "30vh",
  blackOpacity = "bg-black/50",
}) {
  return (
    <section
      className="relative w-full overflow-hidden mb-0"
      style={{ height, minHeight: height }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${BASE_URL}${image}')`,
        }}
      />
      <div className={`absolute inset-0 ${blackOpacity}`} />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
          <div className="max-w-3xl text-left">
            {title && (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/85 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}