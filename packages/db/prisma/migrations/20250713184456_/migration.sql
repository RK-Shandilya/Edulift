/*
  Warnings:

  - You are about to drop the column `videoUrl` on the `subsections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "subsections" DROP COLUMN "videoUrl";

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "duration" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subsectionId" TEXT NOT NULL,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_subsectionId_fkey" FOREIGN KEY ("subsectionId") REFERENCES "subsections"("id") ON DELETE CASCADE ON UPDATE CASCADE;
