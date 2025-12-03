"use client";

export default function VenueFees() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="space-y-6">
        <h3 className="text-lg sm:text-xl font-semibold text-black">
          Venue & Fees 2024
        </h3>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
          The conference will be held at the National Institute of Business
          Management (NIBM), Colombo 07. Please refer to the fee structure below
          for local and foreign participants.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-black border-gray-300 font-semibold">
                  Category
                </th>
                <th className="p-3 border text-black border-gray-300 font-semibold">
                  Fee
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border text-black border-gray-300">Local</td>
                <td className="p-3 border text-black border-gray-300">
                  LKR 5,000.00
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-black border-gray-300">
                  Foreign
                </td>
                <td className="p-3 border text-black border-gray-300">
                  USD 50
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
