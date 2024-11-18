/*
  Warnings:

  - Made the column `updatedAt` on table `ArtGallery` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Artist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Exhibition` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."ArtGallery" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Artist" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Artwork" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Exhibition" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "updatedAt" SET NOT NULL;
