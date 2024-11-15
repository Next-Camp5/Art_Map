/*
  Warnings:

  - The primary key for the `ArtGallery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Artist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CommonUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- DropForeignKey
ALTER TABLE "public"."ArtGallery" DROP CONSTRAINT "ArtGallery_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Artist" DROP CONSTRAINT "Artist_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Artwork" DROP CONSTRAINT "Artwork_artistId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CommonUser" DROP CONSTRAINT "CommonUser_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Exhibition" DROP CONSTRAINT "Exhibition_artGalleryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LikeArtGallery" DROP CONSTRAINT "LikeArtGallery_artGalleryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LikeArtGallery" DROP CONSTRAINT "LikeArtGallery_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LikeArtist" DROP CONSTRAINT "LikeArtist_artistId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LikeArtist" DROP CONSTRAINT "LikeArtist_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LikeArtwork" DROP CONSTRAINT "LikeArtwork_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LikeExhibition" DROP CONSTRAINT "LikeExhibition_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Visit" DROP CONSTRAINT "Visit_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ArtistToExhibition" DROP CONSTRAINT "_ArtistToExhibition_A_fkey";

-- AlterTable
ALTER TABLE "public"."ArtGallery" DROP CONSTRAINT "ArtGallery_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ArtGallery_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ArtGallery_id_seq";

-- AlterTable
ALTER TABLE "public"."Artist" DROP CONSTRAINT "Artist_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Artist_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Artist_id_seq";

-- AlterTable
ALTER TABLE "public"."Artwork" ALTER COLUMN "artistId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."CommonUser" DROP CONSTRAINT "CommonUser_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CommonUser_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CommonUser_id_seq";

-- AlterTable
ALTER TABLE "public"."Exhibition" ALTER COLUMN "artGalleryId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."LikeArtGallery" ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "artGalleryId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."LikeArtist" ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "artistId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."LikeArtwork" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."LikeExhibition" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "public"."Visit" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."_ArtistToExhibition" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "public"."ArtGallery" ADD CONSTRAINT "ArtGallery_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exhibition" ADD CONSTRAINT "Exhibition_artGalleryId_fkey" FOREIGN KEY ("artGalleryId") REFERENCES "public"."ArtGallery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommonUser" ADD CONSTRAINT "CommonUser_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Artist" ADD CONSTRAINT "Artist_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Artwork" ADD CONSTRAINT "Artwork_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LikeArtGallery" ADD CONSTRAINT "LikeArtGallery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LikeArtGallery" ADD CONSTRAINT "LikeArtGallery_artGalleryId_fkey" FOREIGN KEY ("artGalleryId") REFERENCES "public"."ArtGallery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LikeArtwork" ADD CONSTRAINT "LikeArtwork_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LikeArtist" ADD CONSTRAINT "LikeArtist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LikeArtist" ADD CONSTRAINT "LikeArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LikeExhibition" ADD CONSTRAINT "LikeExhibition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Visit" ADD CONSTRAINT "Visit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ArtistToExhibition" ADD CONSTRAINT "_ArtistToExhibition_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
