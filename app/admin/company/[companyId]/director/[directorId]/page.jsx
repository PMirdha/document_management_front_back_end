import Link from "next/link";
import React from "react";

const DirectorDetails = ({ params }) => {
  const director = {
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
            {director.name}
          </h1>
          <p className="text-gray-600 mb-4">{director.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">{director.address}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Mobile Number
              </h2>
              <p className="text-gray-600">{director.mobile}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">{director.email}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Website</h2>
              <a
                href={director.website}
                className="text-blue-500 hover:underline"
              >
                {director.website}
              </a>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Established
              </h2>
              <p className="text-gray-600">{director.established}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Employees</h2>
              <p className="text-gray-600">{director.employees}</p>
            </div>
          </div>
          <div className="text-center p-3 mt-4">
            <Link
              href={`/admin/company/${params.companyId}/director/${params.directorId}/edit`}
              className="border-"
            >
              Edit Director Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorDetails;
