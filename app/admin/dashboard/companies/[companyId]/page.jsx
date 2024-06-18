import Link from "next/link";
import React from "react";

const ComanyIdDetails = ({ params }) => {
  const company = {
    name: "Acme Corp",
    description: "Leading provider of innovative solutions.",
    address: "123 Elm Street, Springfield",
    mobile: "+1 234 567 890",
    email: "info@acme.com",
    website: "www.neuastro.com",
    established: "19/10/1991",
    employees: "100",
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow rounded-lg p-6 mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {company.name}
          </h1>
          <p className="text-gray-600 mb-4">{company.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">{company.address}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Mobile Number
              </h2>
              <p className="text-gray-600">{company.mobile}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">{company.email}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Website</h2>
              <a
                href={company.website}
                className="text-blue-500 hover:underline"
              >
                {company.website}
              </a>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Established
              </h2>
              <p className="text-gray-600">{company.established}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Employees</h2>
              <p className="text-gray-600">{company.employees}</p>
            </div>
          </div>
          <div className="text-center p-3 mt-4">
            <Link
              href={`/admin/company/${params.companyId}/`}
              className="border-"
            >
              Go To Company
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComanyIdDetails;
