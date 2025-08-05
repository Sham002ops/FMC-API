/*
  Warnings:

  - You are about to drop the column `executiveId` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `executiveId` on the `User` table. All the data in the column will be lost.
  - Added the required column `executiveRefode` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Referral" DROP CONSTRAINT "Referral_executiveId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_executiveId_fkey";

-- AlterTable
ALTER TABLE "public"."Referral" DROP COLUMN "executiveId",
ADD COLUMN     "executiveRefode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "executiveId",
ADD COLUMN     "executiveRefode" TEXT;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_executiveRefode_fkey" FOREIGN KEY ("executiveRefode") REFERENCES "public"."Executive"("referralCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Referral" ADD CONSTRAINT "Referral_executiveRefode_fkey" FOREIGN KEY ("executiveRefode") REFERENCES "public"."Executive"("referralCode") ON DELETE RESTRICT ON UPDATE CASCADE;
