"use client";
import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { PencilAltIcon, TrashIcon, EyeIcon } from "@heroicons/react/solid";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

// // Define the type for the table data item
// interface TableItem {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
// }

// // Define the type for the component's props
// interface TableComponentProps {
//   data: TableItem[];
// }

// // Define the type for the sorting configuration
// interface SortConfig {
//   key: keyof TableItem | null;
//   direction: 'asc' | 'desc';
// }

const TableComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Set itemsPerPage to 8 as specified
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Filter and search logic
  const filteredData = data.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const filterMatch = filter ? item.category === filter : true;
    return searchMatch && filterMatch;
  });

  // Sorting logic
  const sortedData = React.useMemo(() => {
    if (sortConfig.key) {
      return [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredData;
  }, [filteredData, sortConfig]);

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleRowSelection = (index) => {
    setSelectedRows((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  const handleSort = (key) => {
    let direction = "asc"; // 'asc' | 'desc'
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const getPaginationGroup = () => {
    const pages = [];
    const maxButtons = 5;
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="min-w-full mx-auto p-6 bg-white shadow-md rounded-lg overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="min-w-full border-b overflow-x-auto no-scrollbar">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                #
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                <input type="checkbox" disabled className="opacity-0" />
              </th>
              <th
                className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "asc" ? (
                    <ArrowUpIcon className="inline h-4 w-4 ml-1" />
                  ) : (
                    <ArrowDownIcon className="inline h-4 w-4 ml-1" />
                  ))}
              </th>
              <th
                className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider cursor-pointer"
                onClick={() => handleSort("category")}
              >
                Category
                {sortConfig.key === "category" &&
                  (sortConfig.direction === "asc" ? (
                    <ArrowUpIcon className="inline h-4 w-4 ml-1" />
                  ) : (
                    <ArrowDownIcon className="inline h-4 w-4 ml-1" />
                  ))}
              </th>
              <th
                className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider cursor-pointer"
                onClick={() => handleSort("price")}
              >
                Price
                {sortConfig.key === "price" &&
                  (sortConfig.direction === "asc" ? (
                    <ArrowUpIcon className="inline h-4 w-4 ml-1" />
                  ) : (
                    <ArrowDownIcon className="inline h-4 w-4 ml-1" />
                  ))}
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className={`hover:bg-gray-100 ${
                  selectedRows.includes(index) ? "bg-gray-200" : ""
                }`}
              >
                <td className="px-6 py-4 border-b border-gray-200 text-left">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-left">
                  <input
                    type="checkbox"
                    onChange={() => handleRowSelection(index)}
                    checked={selectedRows.includes(index)}
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-left">
                  {item.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-left">
                  {item.category}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-left">
                  ${item.price}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-left">
                  <div className="flex space-x-2">
                    <Link
                      href={`/dashboard/companies/${item.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </Link>
                    {/* <button className="text-blue-600 hover:text-blue-900" onClick={() => router.push(`/dashboard/companies/${item.id}`)}>
                      <EyeIcon className="h-5 w-5" />
                    </button> */}
                    <button className="text-green-600 hover:text-green-900">
                      <PencilAltIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>

      <div className="mt-4 pt-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className={`px-4 py-2 border rounded focus:outline-none ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex space-x-1">
            {getPaginationGroup().map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 border rounded ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages - 1 && currentPage < totalPages - 2 && (
              <>
                <span className="px-4 py-2">...</span>
                <button
                  onClick={() => goToPage(totalPages)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
          <button
            onClick={() => goToPage(currentPage + 1)}
            className={`px-4 py-2 border rounded focus:outline-none ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
