export default function LeftRightParaSection({
  firstTitle,
  firstDescription,
  secondTitle,
  secondDescription,
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {/* Left Column */}
        {(firstTitle || firstDescription) && (
          <div className="space-y-6">
            {firstTitle && (
              <h3 className="text-xl font-semibold text-black relative">
                {firstTitle}
              </h3>
            )}
            {firstDescription && (
              <p
                className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify"
                dangerouslySetInnerHTML={{ __html: firstDescription }}
              ></p>
            )}
          </div>
        )}

        {/* Right Column */}
        {(secondTitle || secondDescription) && (
          <div className="space-y-6">
            {secondTitle && (
              <h3 className="text-xl font-semibold text-black relative">
                {secondTitle}
              </h3>
            )}
            {secondDescription && (
              <p
                className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify"
                dangerouslySetInnerHTML={{ __html: secondDescription }}
              ></p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
