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
        {/* Text block */}
        {(firstTitle || firstDescription) && (
          <div>
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
        )}

        {/* Logos row */}
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
