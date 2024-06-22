import React from "react";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaClock,
  FaFileDownload,
} from "react-icons/fa";

const ProcessCard = ({ process, completeProcess }) => {
  const { id, name, state, details, documents } = process;

  // Define styles based on process state
  const stateStyles = {
    completed: "bg-green-100 border-green-400 text-green-600",
    processing: "bg-yellow-100 border-yellow-400 text-yellow-600",
    "to-be-done":
      "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border-gray-400 text-gray-600",
  };

  // Define icons based on process state
  const stateIcons = {
    completed: <FaCheckCircle className="w-5 h-5" />,
    processing: <FaHourglassHalf className="w-5 h-5" />,
    "to-be-done": <FaClock className="w-5 h-5" />, // Using a clock icon for future tasks
  };

  // Function to handle document download
  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`p-6 border-l-4 shadow-md rounded-lg transition-all duration-200 ${stateStyles[state]} flex flex-col space-y-4 shadow`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {stateIcons[state]}
          <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          {documents && documents.length > 0 && (
            <button
              onClick={() =>
                documents.forEach((doc) => handleDownload(doc.url))
              }
              className="text-indigo-600 hover:text-indigo-800"
              title="Download Documents"
            >
              <FaFileDownload className="w-5 h-5" />
            </button>
          )}
          {state !== "completed" && (
            <button
              onClick={() => completeProcess(id)}
              className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm sm:text-base"
            >
              Complete
            </button>
          )}
        </div>
      </div>
      <p className="text-gray-600 text-sm sm:text-base">{details}</p>
    </div>
  );
};

export default ProcessCard;
