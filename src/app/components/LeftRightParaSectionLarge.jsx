import Image from "next/image";
import { BASE_URL } from "../util/constant/common";

export default function LeftRightParaSectionLarge({
  firstTitle,
  firstDescription,
  tagline, // new prop
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {(firstTitle || firstDescription) && (
          <div className="order-2 lg:order-1 space-y-6">
            {firstTitle && (
              <>
                <h3 className="text-4xl font-extrabold text-black">
                  {firstTitle}
                </h3>
                {tagline && (
                  <p className="text-base sm:text-base font-semibold text-[#2295BA] mt-2 italic">
                    {tagline}
                  </p>
                )}
              </>
            )}
            {firstDescription && (
              <div
                className="text-gray-700 leading-relaxed text-sm sm:text-base prose text-justify"
                dangerouslySetInnerHTML={{ __html: firstDescription }}
              />
            )}
          </div>
        )}

        <div className="hidden lg:block order-1 lg:order-2 relative w-full pt-[56.25%] overflow-hidden">
          <Image
            src={`${BASE_URL}/welcome.jpg`}
            alt="SOCE Campus"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
