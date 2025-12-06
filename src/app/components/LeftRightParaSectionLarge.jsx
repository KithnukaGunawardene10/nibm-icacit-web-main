// app/components/LeftRightParaSectionLarge.jsx
import Image from "next/image";

import ICACITLogo from "../images/ICACITLogo.png";
import NIBMLogo from "../images/NIBMlogo.png";
import SOCELogo from "../images/socelogos.png";

export default function LeftRightParaSectionLarge({
  firstTitle,
  firstDescription,
  tagline,
}) {
  const logos = [
    { src: ICACITLogo, alt: "ICACIT 2026 Logo" },
    { src: NIBMLogo, alt: "NIBM Logo" },
    { src: SOCELogo, alt: "School of Computing & Engineering Logo" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Side – Text */}
        {(firstTitle || firstDescription) && (
          <div className="order-2 lg:order-1 space-y-6">
            {firstTitle && (
              <h3 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                {firstTitle}
              </h3>
            )}

            {tagline && (
              <p className="text-[19px] md:text-xl font-semibold text-[#2295BA] italic">
                {tagline}
              </p>
            )}

            {/* Body text = exactly 18px, no inline style → no hydration error */}
            {firstDescription && (
              <div
                className="text-gray-700 leading-relaxed text-lg [font-size:18px] prose prose-lg max-w-none text-justify"
                dangerouslySetInnerHTML={{ __html: firstDescription }}
              />
            )}
          </div>
        )}

        {/* Right Side – Logos */}
        <div className="order-1 lg:order-2 flex flex-col justify-center items-center gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-36 lg:w-72 lg:h-40 xl:w-80 xl:h-44"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain drop-shadow-md"
                sizes="(max-width: 768px) 190px, (max-width: 1024px) 220px, 280px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}