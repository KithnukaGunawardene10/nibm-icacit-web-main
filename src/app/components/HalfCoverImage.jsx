"use client";

import { BASE_URL } from "../util/constant/common";

export default function HalfCoverImage({
  title,
  description,
  image,
  height = "30vh",
  blackOpacity = "bg-black/60",
}) {
  return (
    <section className="relative w-full" style={{ height }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${BASE_URL}${image}')`,
        }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${blackOpacity} flex items-center`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-left">
              {title.split(" ")[0]}{" "}
              <span className="text-[#2295BA] drop-shadow-md">
                {title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Description */}
            {description && (
              <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-white/90 drop-shadow text-left">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
