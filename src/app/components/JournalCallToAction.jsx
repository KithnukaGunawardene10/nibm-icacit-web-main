import Link from "next/link";

export default function JournalCallToAction({
  title = "Journal Submissions Open",
  description = "Submit your groundbreaking research to the International Journal on Advanced Computing and Information Technology (IJACIT) 2026 and contribute to the global advancement of knowledge in computing and IT.",
  buttonText = "Submit Now",
  href = "/journal",
}) {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className="inline-flex items-center px-6 py-3 bg-[#2295BA] text-white font-semibold rounded-lg shadow hover:bg-[#1a7a9e] transition-colors text-sm sm:text-base"
          >
            {buttonText}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
