/*
  Warnings:

  - A unique constraint covering the columns `[referralCode]` on the table `Executive` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `referralCode` to the `Executive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Executive" ADD COLUMN     "referralCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Executive_referralCode_key" ON "public"."Executive"("referralCode");
