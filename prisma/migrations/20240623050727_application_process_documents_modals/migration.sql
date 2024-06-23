-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('COMPANY_CREATION', 'CONSULTANCY', 'LEGAL_ADVICE', 'ACCOUNTING', 'TAXATION');

-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('PENDING', 'ONGOING', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ProcessStatus" AS ENUM ('TO_BE_DONE', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ApplicationProcessType" AS ENUM ('COMPANY', 'DIRECTOR', 'EMPLOYEE');

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserService" (
    "id" SERIAL NOT NULL,
    "status" "ServiceStatus" NOT NULL,
    "userId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyApplicationProcess" (
    "id" SERIAL NOT NULL,
    "status" "ProcessStatus" NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyApplicationProcess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyApplicationProcessDocument" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "companyApplicationProcessId" INTEGER NOT NULL,
    "documentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyApplicationProcessDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeApplicationProcess" (
    "id" SERIAL NOT NULL,
    "status" "ProcessStatus" NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeApplicationProcess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeApplicationProcessDocument" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "employeeApplicationProcessId" INTEGER NOT NULL,
    "documentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeApplicationProcessDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectorApplicationProcess" (
    "id" SERIAL NOT NULL,
    "status" "ProcessStatus" NOT NULL,
    "directorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectorApplicationProcess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectorApplicationProcessDocument" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "directorApplicationProcessId" INTEGER NOT NULL,
    "documentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectorApplicationProcessDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserService" ADD CONSTRAINT "UserService_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserService" ADD CONSTRAINT "UserService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyApplicationProcess" ADD CONSTRAINT "CompanyApplicationProcess_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyApplicationProcessDocument" ADD CONSTRAINT "CompanyApplicationProcessDocument_companyApplicationProces_fkey" FOREIGN KEY ("companyApplicationProcessId") REFERENCES "CompanyApplicationProcess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyApplicationProcessDocument" ADD CONSTRAINT "CompanyApplicationProcessDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeApplicationProcess" ADD CONSTRAINT "EmployeeApplicationProcess_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeApplicationProcessDocument" ADD CONSTRAINT "EmployeeApplicationProcessDocument_employeeApplicationProc_fkey" FOREIGN KEY ("employeeApplicationProcessId") REFERENCES "EmployeeApplicationProcess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeApplicationProcessDocument" ADD CONSTRAINT "EmployeeApplicationProcessDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectorApplicationProcess" ADD CONSTRAINT "DirectorApplicationProcess_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectorApplicationProcessDocument" ADD CONSTRAINT "DirectorApplicationProcessDocument_directorApplicationProc_fkey" FOREIGN KEY ("directorApplicationProcessId") REFERENCES "DirectorApplicationProcess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectorApplicationProcessDocument" ADD CONSTRAINT "DirectorApplicationProcessDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
