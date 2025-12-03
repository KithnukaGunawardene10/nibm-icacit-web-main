"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

/**
 * Reusable Expandable Section Component
 * @param {Array} items - Array of objects with `title` and `content` (string or array of strings)
 * @param {string} containerClass - Optional extra classes for the container
 */
export default function ExpandableSection({ items, containerClass = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`bg-[#F5F3F1] py-16 lg:py-20 ${containerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-0 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="border-t border-black">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-4 flex items-start justify-between text-left hover:bg-gray-200 transition cursor-pointer"
              >
                <h4 className="text-lg text-black font-semibold flex-1">
                  {item.title}
                </h4>
                <div className="flex items-start justify-center shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-black" />
                  ) : (
                    <Plus className="w-6 h-6 text-black" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-10 pt-6 text-black text-base leading-relaxed text-justify">
                  {Array.isArray(item.content) ? (
                    <ul className="list-disc list-inside space-y-2">
                      {item.content.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
