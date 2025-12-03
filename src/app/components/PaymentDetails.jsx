// components/PaymentDetails.jsx
"use client";

export default function PaymentDetails() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-black">
          Payment Details
        </h3>

        {/* Online Payment */}
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          <strong>Online Payment Gateway:</strong>
          <br />
          The Online Payment Gateway will be available along with the Bank
          Transfer option. Once the registration is completed via the Online
          Payment Gateway, authors will receive an email notification confirming
          the successful payment.
        </p>

        {/* Bank Transfer */}
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          <strong>Bank Transfer / Online Transfer:</strong>
          <br />
          Authors who cannot use the Online Payment Gateway may proceed with a
          bank transfer or online transfer using the details provided below.{" "}
          <br />
          <br />
          <span className="text-red-600 font-semibold">
            NOTE: Please refrain from depositing funds via CDM/CRM machines.
          </span>
        </p>

        {/* Bank Details Table */}
        <div className="pt-4">
          <h4 className="text-md sm:text-lg font-semibold text-black mb-4">
            Bank Details
          </h4>

          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-black border-gray-300 font-semibold">
                  Field
                </th>
                <th className="p-3 border text-black border-gray-300 font-semibold">
                  Details
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border text-black border-gray-300">
                  Bank Name
                </td>
                <td className="p-3 border text-black border-gray-300">
                  Bank of Ceylon
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-black border-gray-300">
                  Branch
                </td>
                <td className="p-3 border text-black border-gray-300">
                  Colombo – Super Grade Branch
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-black border-gray-300">
                  Account Name
                </td>
                <td className="p-3 border text-black border-gray-300">
                  National Institute of Business Management
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-black border-gray-300">
                  Account Number
                </td>
                <td className="p-3 border text-black border-gray-300">
                  7039238465
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-black border-gray-300">
                  SWIFT Code
                </td>
                <td className="p-3 border text-black border-gray-300">
                  BCEYLKLX
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
