"use client";

export default function VenueFees() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="space-y-8">
        {/* Title */}
        

        {/* Intro text */}
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
          The conference will be held at the National Institute of Business
          Management (NIBM), Colombo 07. Please refer to the fee structure below
          for local and foreign participants.
        </p>

        {/* Fee Table – Improved visibility */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-900 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 font-semibold text-gray-900 uppercase tracking-wider">
                  Fee
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">NIBM Students</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">LKR 1,000.00</td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  Local Students (Other Institutions)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">LKR 1,500.00</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">International Students</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">16 USD</td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  Professionals / Industry Participants
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">LKR 5,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Instructions */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="text-gray-800 font-medium mb-3">
            Please make your payment using the bank details below:
          </p>

          <p className="text-gray-700 mb-2">
            Bank Deposit / Transfer to NIBM Account
          </p>

          <p className="text-gray-700 mb-4">
            <strong className="text-red-700">
              Please clearly mention your NIC number and full name on the bank slip / payment proof.
            </strong>
          </p>

          <ul className="list-disc pl-6 space-y-1.5 text-gray-900">
            <li>Bank: Bank of Ceylon</li>
            <li>Branch: Torrington (453)</li>
            <li>Branch Code: 7010</li>
            <li>Account Number: 2323080</li>
            <li>Account Name: National Institute of Business Management</li>
          </ul>
        </div>

        {/* Deadline */}
        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
          <p className="text-red-800 font-medium">
            DEADLINE: Please submit the registration form along with your payment slip/proof
            <strong> on or before Friday, 20th February 2026</strong>.
          </p>
        </div>

        {/* Form Link */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Complete Your Registration
          </h4>

          <p className="text-gray-700 mb-6">
            After payment, fill out the form and upload your payment proof.
          </p>

          <a
            href="https://forms.gle/d6mngaKuEfDZGHiaA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow transition"
          >
            Open Registration Form →
          </a>
        </div>
      </div>
    </section>
  );
}