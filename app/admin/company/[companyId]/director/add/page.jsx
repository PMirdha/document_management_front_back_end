"use client";
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaHome, FaCity, FaGlobe, FaMapPin, FaUpload } from 'react-icons/fa';

const AddCompanyDirector = ({ params }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
    profilePicture: null,
    addressProof: null,
    passport: null,
  });

  const [errors, setErrors] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.pinCode) {
      newErrors.pinCode = 'Pin Code is required';
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = 'Pin Code is invalid';
    }
    if (!formData.addressProof) newErrors.addressProof = 'Address proof is required';
    if (!formData.passport) newErrors.passport = 'Passport is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });

    if (name === 'profilePicture' && files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Director added successfully!');
      // Add logic to handle form submission
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pinCode: '',
      profilePicture: null,
      addressProof: null,
      passport: null,
    });
    setErrors({});
    setPreviewUrl(null);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 my-10">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Add New Director</h1>
      <div className="flex justify-center mb-6">
        <div className="relative">
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="profilePicture"
            className="flex justify-center items-center w-32 h-32 bg-gray-200 text-gray-500 rounded-full overflow-hidden cursor-pointer shadow-md"
          >
            {previewUrl ? (
              <img src={previewUrl} alt="Profile Preview" className="object-cover w-full h-full" />
            ) : (
              <FaUser className="text-6xl" />
            )}
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="example@example.com"
              />
            </div>
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="1234567890"
              />
            </div>
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">Position</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBriefcase className="text-gray-400" />
              </div>
              <input
                type="text"
                name="position"
                id="position"
                value={formData.position}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.position ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Director of Operations"
              />
            </div>
            {errors.position && <p className="text-sm text-red-600 mt-1">{errors.position}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaHome className="text-gray-400" />
              </div>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.address ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="123 Main St, Springfield, IL"
              />
            </div>
            {errors.address && <p className="text-sm text-red-600 mt-1">{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCity className="text-gray-400" />
              </div>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.city ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Springfield"
              />
            </div>
            {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city}</p>}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapPin className="text-gray-400" />
              </div>
              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.state ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Illinois"
              />
            </div>
            {errors.state && <p className="text-sm text-red-600 mt-1">{errors.state}</p>}
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaGlobe className="text-gray-400" />
              </div>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.country ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="USA"
              />
            </div>
            {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country}</p>}
          </div>

          <div>
            <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700 mb-2">Pin Code</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapPin className="text-gray-400" />
              </div>
              <input
                type="text"
                name="pinCode"
                id="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                className={`block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md border ${errors.pinCode ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="62704"
              />
            </div>
            {errors.pinCode && <p className="text-sm text-red-600 mt-1">{errors.pinCode}</p>}
          </div>

          <div className="lg:col-span-2 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="addressProof" className="block text-sm font-medium text-gray-700 mb-2">Address Proof</label>
              <div className="relative">
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-all duration-150">
                  <input
                    type="file"
                    name="addressProof"
                    id="addressProof"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="addressProof" className="flex items-center justify-center space-x-2 text-blue-500">
                    <FaUpload className="text-2xl" />
                    <span>Upload Address Proof</span>
                  </label>
                </div>
              </div>
              {errors.addressProof && <p className="text-sm text-red-600 mt-1">{errors.addressProof}</p>}
            </div>

            <div className="w-1/2">
              <label htmlFor="passport" className="block text-sm font-medium text-gray-700 mb-2">Passport</label>
              <div className="relative">
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-all duration-150">
                  <input
                    type="file"
                    name="passport"
                    id="passport"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="passport" className="flex items-center justify-center space-x-2 text-blue-500">
                    <FaUpload className="text-2xl" />
                    <span>Upload Passport</span>
                  </label>
                </div>
              </div>
              {errors.passport && <p className="text-sm text-red-600 mt-1">{errors.passport}</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
          >
            Add Director
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-150"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompanyDirector;
