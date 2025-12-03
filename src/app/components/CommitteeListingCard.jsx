"use client";

import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "../util/constant/common";

export default function CommitteeListingCard({ image, name, position, href }) {
  return (
    <Link href={href || "#"} className="group">
      <div className="bg-[#F5F3F1] overflow-hidden hover:cursor-pointer">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden mb-4 transition-all duration-300 transform group-hover:scale-102">
          <Image
            src={`${BASE_URL}${image}`}
            alt={name}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Position */}
        <div className="space-y-2 p-4">
          <h3 className="text-lg font-bold text-black relative group-hover:text-[#25D366] transition">
            {name}
            {/* Bar under name */}
            <div className="w-16 h-1 bg-black group-hover:bg-[#25D366] mt-2"></div>
          </h3>
          {position && <p className="text-sm text-gray-500">{position}</p>}
        </div>
      </div>
    </Link>
  );
}
