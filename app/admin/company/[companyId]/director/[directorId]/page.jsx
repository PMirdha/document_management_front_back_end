"use client";
import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaHome, FaCity, FaGlobe, FaMapPin, FaDownload, FaEdit } from 'react-icons/fa';

const DirectorDetails = () => {
  const director = {
    profilePicture: 'path_to_profile_picture.jpg', // Replace with actual path
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    position: 'Director of Operations',
    address: '123 Main St, Springfield',
    city: 'Springfield',
    state: 'Illinois',
    country: 'USA',
    pinCode: '62704',
    addressProof: 'path_to_address_proof.pdf', // Replace with actual path
    passport: 'path_to_passport.pdf', // Replace with actual path
  };
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 my-10">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Director Details</h1>
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shadow-md">
            {director.profilePicture ? (
              <img src={director.profilePicture} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <FaUser className="text-6xl text-gray-400 mx-auto mt-10" />
            )}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaUser className="text-gray-500 mr-2" />
              <span>{director.name}</span>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <span>{director.email}</span>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaPhone className="text-gray-500 mr-2" />
              <span>{director.phone}</span>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaBriefcase className="text-gray-500 mr-2" />
              <span>{director.position}</span>
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <p className="flex items-center bg-gray-100 rounded-md p-2">
            <FaHome className="text-gray-500 mr-2" />
            <span>{director.address}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaCity className="text-gray-500 mr-2" />
              <span>{director.city}</span>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaMapPin className="text-gray-500 mr-2" />
              <span>{director.state}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaGlobe className="text-gray-500 mr-2" />
              <span>{director.country}</span>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
            <p className="flex items-center bg-gray-100 rounded-md p-2">
              <FaMapPin className="text-gray-500 mr-2" />
              <span>{director.pinCode}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address Proof</label>
            <div className="relative bg-gray-100 p-4 rounded-md text-center">
              {director.addressProof ? (
                <a href={director.addressProof} download className="flex justify-center items-center text-blue-500">
                  <FaDownload className="text-2xl mr-2" />
                  <span>Download Address Proof</span>
                </a>
              ) : (
                <p className="text-gray-500">No file uploaded</p>
              )}
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Passport</label>
            <div className="relative bg-gray-100 p-4 rounded-md text-center">
              {director.passport ? (
                <a href={director.passport} download className="flex justify-center items-center text-blue-500">
                  <FaDownload className="text-2xl mr-2" />
                  <span>Download Passport</span>
                </a>
              ) : (
                <p className="text-gray-500">No file uploaded</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center space-x-2">
            <FaEdit className="text-xl" />
            <span>Edit Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectorDetails;
// Example data to be passed to the component