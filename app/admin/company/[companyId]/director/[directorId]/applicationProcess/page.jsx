"use client";
import React, { useState } from "react";
import ProcessCard from "./processCard";
import BreadCrumb from "../../../../components/breadCrumb";

// Sample data for processes with documents
const initialProcesses = [
  {
    id: 1,
    name: "Application Submission",
    state: "completed",
    details: "Submitted on 2023-01-01",
    documents: [{ name: "Resume.pdf", url: "/path/to/resume.pdf" }],
  },
  {
    id: 2,
    name: "Initial Screening",
    state: "processing",
    details: "Currently being reviewed by HR",
    documents: [],
  },
  {
    id: 3,
    name: "Technical Interview",
    state: "to-be-done",
    details: "Pending scheduling",
    documents: [],
  },
  {
    id: 4,
    name: "HR Interview",
    state: "to-be-done",
    details: "Pending technical interview completion",
    documents: [
      { name: "InterviewNotes.pdf", url: "/path/to/InterviewNotes.pdf" },
    ],
  },
  {
    id: 5,
    name: "Final Decision",
    state: "to-be-done",
    details: "Pending HR interview completion",
    documents: [],
  },
];

const ApplicationProcess = ({ params }) => {
  const [processes, setProcesses] = useState(initialProcesses);

  const completeProcess = (id) => {
    setProcesses((prevProcesses) =>
      prevProcesses.map((process) =>
        process.id === id ? { ...process, state: "completed" } : process
      )
    );
  };

  const completeAllProcesses = () => {
    setProcesses((prevProcesses) =>
      prevProcesses.map((process) => ({ ...process, state: "completed" }))
    );
  };

  const downloadAllDocuments = () => {
    processes.forEach((process) => {
      process.documents.forEach((doc) => {
        window.open(doc.url, "_blank");
      });
    });
  };

  const breadCrumbLinkDetails = [
    { link: "/", title: "Home" },
    {
      link: `/admin/company/${params.companyId}/`,
      title: `Company-${params.companyId}`,
    },
    {
      link: `/admin/company/${params.companyId}/director/${params.directorId}`,
      title: `Director-${params.directorId}`,
    },
    {
      link: `/admin/company/${params.companyId}/director/${params.directorId}/application_process`,
      title: "Director Application Process",
      isActive: true,
    },
  ];

  return (
    <>
      <BreadCrumb
        title={"Director Application Process"}
        linkesDetails={breadCrumbLinkDetails}
      />

      <div className="p-4 sm:p-10 bg-white min-h-screen">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-blue-700">
          Director Application Process
        </h1>
        <div className="flex flex-col sm:flex-row items-start">
          <div className="relative w-full sm:w-1 bg-gray-300 sm:h-full sm:mx-4">
            <div
              className="absolute w-full sm:w-1 bg-blue-600"
              style={{
                height: `${
                  (processes.filter((p) => p.state === "completed").length /
                    processes.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
          <div className="space-y-6 w-full sm:w-3/4">
            {processes.map((process, index) => (
              <ProcessCard
                key={process.id}
                process={process}
                completeProcess={completeProcess}
                isLast={index === processes.length - 1}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={completeAllProcesses}
            className="px-4 sm:px-6 py-2 sm:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm sm:text-base"
          >
            Complete All
          </button>
          <button
            onClick={downloadAllDocuments}
            className="px-4 sm:px-6 py-2 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base"
          >
            Download All
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplicationProcess;
