/*
  Warnings:

  - The primary key for the `CoinTransaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Executive` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Package` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Referral` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserPackage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Webinar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WebinarAttendance` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."CoinTransaction" DROP CONSTRAINT "CoinTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Referral" DROP CONSTRAINT "Referral_executiveId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Referral" DROP CONSTRAINT "Referral_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_executiveId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserPackage" DROP CONSTRAINT "UserPackage_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserPackage" DROP CONSTRAINT "UserPackage_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Webinar" DROP CONSTRAINT "Webinar_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."WebinarAttendance" DROP CONSTRAINT "WebinarAttendance_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."WebinarAttendance" DROP CONSTRAINT "WebinarAttendance_webinarId_fkey";

-- AlterTable
ALTER TABLE "public"."CoinTransaction" DROP CONSTRAINT "CoinTransaction_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CoinTransaction_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Executive" DROP CONSTRAINT "Executive_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Executive_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Package" DROP CONSTRAINT "Package_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Package_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Referral" DROP CONSTRAINT "Referral_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "executiveId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Referral_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "packageId" SET DATA TYPE TEXT,
ALTER COLUMN "executiveId" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."UserPackage" DROP CONSTRAINT "UserPackage_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "packageId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserPackage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Webinar" DROP CONSTRAINT "Webinar_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "packageId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Webinar_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."WebinarAttendance" DROP CONSTRAINT "WebinarAttendance_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "webinarId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WebinarAttendance_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_executiveId_fkey" FOREIGN KEY ("executiveId") REFERENCES "public"."Executive"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Webinar" ADD CONSTRAINT "Webinar_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserPackage" ADD CONSTRAINT "UserPackage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserPackage" ADD CONSTRAINT "UserPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WebinarAttendance" ADD CONSTRAINT "WebinarAttendance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WebinarAttendance" ADD CONSTRAINT "WebinarAttendance_webinarId_fkey" FOREIGN KEY ("webinarId") REFERENCES "public"."Webinar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Referral" ADD CONSTRAINT "Referral_executiveId_fkey" FOREIGN KEY ("executiveId") REFERENCES "public"."Executive"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Referral" ADD CONSTRAINT "Referral_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CoinTransaction" ADD CONSTRAINT "CoinTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
