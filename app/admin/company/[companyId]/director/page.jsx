"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaPlus, FaCheck, FaClock, FaTimes, FaUserPlus } from 'react-icons/fa';
import BreadCrumb from '../../../../components/breadCrumb';

const directors = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Completed' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321', status: 'Ongoing' },
  { id: 3, name: 'Jim Beam', email: 'jim.beam@example.com', phone: '111-222-3333', status: 'Pending' },
];

// Function to get row color based on status
const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-100';
    case 'Ongoing':
      return 'bg-yellow-100';
    case 'Pending':
      return 'bg-red-100';
    default:
      return 'bg-gray-100';
  }
};

const DirectorList = ({ params }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const handleDeleteDirector = (director) => {
    setSelectedDirector(director);
    setShowModal(true);
  };

  const confirmDirectorDelete = () => {
    alert(`Director ${selectedDirector.name} has been deleted.`);
    setShowModal(false);
    // Add logic for deleting the director
  };

  const handleViewDirector = (director) => {
    alert(`Viewing details for director: ${director.name}`);
    // Add logic for viewing the director
  };

  const handleEditDirector = (director) => {
    alert(`Editing details for director: ${director.name}`);
    // Add logic for editing the director
  };

  const handleAddDirector = () => {
    alert('Adding a new director');
    // Add logic for adding a new director
  };

  const breadCrumbLinkDetails = [
    { link: "/", title: "Home" },
    {
      link: `/admin/company/${params.companyId}/`,
      title: `Company-${params.companyId}`,
    },
    {
      link: `/admin/company/${params.companyId}/director`,
      title: "Director List",
      isActive: true,
    },
  ];

  return (
    <>
      <BreadCrumb title={"Director List"} linkesDetails={breadCrumbLinkDetails} />
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Directors</h1>
          {/* Responsive button */}
          <Link className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded sm:hidden"
            href={`/admin/company/${params.companyId}/director/add`}
          >
            <FaUserPlus className="text-lg" />
          </Link>
          <Link className="hidden sm:flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            href={`/admin/company/${params.companyId}/director/add`}
          >
            <FaPlus className="mr-2" />
            Add Director
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/12 px-4 py-2 text-left text-gray-600 font-semibold">#</th>
                <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">Name</th>
                <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">Email</th>
                <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">Phone</th>
                <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">Status</th>
                <th className="w-3/12 px-4 py-2 text-center text-gray-600 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {directors.map((director, index) => (
                <tr key={director.id} className={`hover:bg-gray-50 ${getStatusColor(director.status)}`}>
                  <td className="border-t px-4 py-2 text-gray-800">{index + 1}</td>
                  <td className="border-t px-4 py-2 text-gray-800">{director.name}</td>
                  <td className="border-t px-4 py-2 text-gray-800">{director.email}</td>
                  <td className="border-t px-4 py-2 text-gray-800">{director.phone}</td>
                  <td className="border-t px-4 py-2 text-gray-800">{director.status}</td>
                  <td className="border-t px-4 py-2 text-center">
                    <div className="flex justify-center space-x-4">
                      <Link className="text-blue-500 hover:text-blue-700" title='View Application Process'
                        href={`/admin/company/${params.companyId}/director/${director.id}/application_process`}>
                        <FaEye className="w-5 h-5" />
                      </Link>

                      <Link className="text-green-500 hover:text-green-700" title='Edit Director Details'
                        href={`/admin/company/${params.companyId}/director/${director.id}/edit`}>
                        <FaEdit className="w-5 h-5" />
                      </Link>

                      <button
                        className="text-red-500 hover:text-red-700"
                        title="Delete Director"
                        onClick={() => handleDeleteDirector(director)}
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <DeleteModal
            director={selectedDirector}
            onClose={() => setShowModal(false)}
            onConfirm={confirmDirectorDelete}
          />
        )}
      </div>
    </>
  );
};

const DeleteModal = ({ director, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out scale-100 w-full max-w-sm sm:max-w-md mx-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Delete Director</h2>
        <p className="mb-4 sm:mb-6 text-gray-700 text-center">
          Are you sure you want to delete <strong>{director.name}</strong> from the list?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 sm:px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-150"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectorList;

