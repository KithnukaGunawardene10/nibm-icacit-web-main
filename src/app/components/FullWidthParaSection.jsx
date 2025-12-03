"use client";

export default function FullWidthParaSection({ title, description }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="space-y-6">
        {title && (
          <h3 className="text-lg sm:text-xl font-semibold text-black relative">
            {title}
          </h3>
        )}
        {description && (
          <p
            className="text-gray-700 leading-relaxed text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        )}
      </div>
    </section>
  );
}
