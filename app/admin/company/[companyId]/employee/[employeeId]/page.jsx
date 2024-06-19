import React from "react";
import { FaEye, FaEdit } from "react-icons/fa";

// Sample employee data
const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    status: "Completed",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "UI/UX Designer",
    department: "Design",
    status: "Pending",
  },
  // Add more employees as needed
];

// Function to get row color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100";
    case "Ongoing":
      return "bg-yellow-100";
    case "Pending":
      return "bg-red-100";
    default:
      return "bg-gray-100";
  }
};

const EmployeeList = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Employee List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/12 px-4 py-2 text-left text-gray-600 font-semibold">
                #
              </th>
              <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">
                Name
              </th>
              <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">
                Position
              </th>
              <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">
                Department
              </th>
              <th className="w-2/12 px-4 py-2 text-left text-gray-600 font-semibold">
                Status
              </th>
              <th className="w-2/12 px-4 py-2 text-center text-gray-600 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.id}
                className={`hover:bg-gray-50 ${getStatusColor(
                  employee.status
                )}`}
              >
                <td className="border-t px-4 py-2 text-gray-800">
                  {index + 1}
                </td>
                <td className="border-t px-4 py-2 text-gray-800">
                  {employee.name}
                </td>
                <td className="border-t px-4 py-2 text-gray-800">
                  {employee.position}
                </td>
                <td className="border-t px-4 py-2 text-gray-800">
                  {employee.department}
                </td>
                <td className="border-t px-4 py-2 text-gray-800">
                  {employee.status}
                </td>
                <td className="border-t px-4 py-2 text-center">
                  <div className="flex justify-center space-x-4">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      title="View Application Process"
                      onClick={() =>
                        alert(
                          `Viewing application process for ${employee.name}`
                        )
                      }
                    >
                      <FaEye className="w-5 h-5" />
                    </button>
                    <button
                      className="text-green-500 hover:text-green-700"
                      title="Edit Employee Details"
                      onClick={() =>
                        alert(`Editing details for ${employee.name}`)
                      }
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
