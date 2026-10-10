// app/components/LeftRightParaSectionLarge.jsx
import Image from "next/image";

export default function LeftRightParaSectionLarge({
  firstTitle,
  firstDescription,
  tagline,
}) {
  const logos = [
    { src: "/icacit-logo.png", alt: "ICACIT 2027 Logo" },
    { src: "/nibm-logo.png", alt: "NIBM Logo" },
    { src: "/soce-logo.png", alt: "School of Computing & Engineering Logo" },
  ];

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Two-column: text left, flyer right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — Text */}
          <div className="lg:col-span-8">
            {firstTitle && (
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {firstTitle}
              </h3>
            )}

            <div className="mt-4 w-20 h-1 bg-[#2295BA]" />

            {tagline && (
              <p className="mt-6 text-[17px] md:text-lg font-semibold text-[#2295BA] italic leading-relaxed">
                {tagline}
              </p>
            )}

            {firstDescription && (
              <div
                className="mt-6 text-gray-700 leading-relaxed text-[17px] prose prose-lg max-w-none text-justify"
                dangerouslySetInnerHTML={{ __html: firstDescription }}
              />
            )}
          </div>

          {/* Right — Flyer */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm border border-gray-300">
              <Image
                src="/icacit-2027-flyer.webp"
                alt="ICACIT 2027 Conference Flyer"
                width={1200}
                height={1600}
                className="w-full h-auto"
                sizes="(max-width: 768px) 90vw, 384px"
              />
            </div>
          </div>
        </div>

        {/* Logos row — bottom, horizontal */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 pt-10 mt-10 border-t border-gray-200">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
