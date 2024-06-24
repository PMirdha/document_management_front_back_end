/*
  Warnings:

  - You are about to drop the column `userId` on the `Company` table. All the data in the column will be lost.
  - Added the required column `userServiceId` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_userId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "userId",
ADD COLUMN     "userServiceId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userServiceId_fkey" FOREIGN KEY ("userServiceId") REFERENCES "UserService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
