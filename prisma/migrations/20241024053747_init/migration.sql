-- CreateEnum
CREATE TYPE "ExhibitionStatus" AS ENUM ('EXHIBITING', 'UPCOMING', 'FINISHED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ARTIST', 'ART_GALLERY');

-- CreateTable
CREATE TABLE "ArtGallery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bgImage" TEXT,
    "posX" DOUBLE PRECISION NOT NULL,
    "posY" DOUBLE PRECISION NOT NULL,
    "isOpen" BOOLEAN NOT NULL,
    "mainAreaId" INTEGER NOT NULL,
    "subAreaId" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "openTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "lastOrder" INTEGER,
    "ClosedDays" TEXT,
    "phoneNumber" TEXT,
    "callEmail" TEXT,
    "introduce" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "naverBlog" TEXT,
    "homepage" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "ArtGallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainArea" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MainArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubArea" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mainAreaId" INTEGER NOT NULL,

    CONSTRAINT "SubArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exhibition" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "openTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "status" "ExhibitionStatus" NOT NULL,
    "introduce" TEXT NOT NULL,
    "artGalleryId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Exhibition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImage" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommonUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CommonUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT,
    "name" TEXT NOT NULL,
    "bgImage" TEXT,
    "mainGenreId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artwork" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "genreId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Artwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikeArtGallery" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "artGalleryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeArtGallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikeArtwork" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "artworkId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeArtwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikeArtist" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeArtist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikeExhibition" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "exhibitionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeExhibition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "exhibitionId" INTEGER NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtistToExhibition" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CommonUser_name_key" ON "CommonUser"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistToExhibition_AB_unique" ON "_ArtistToExhibition"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistToExhibition_B_index" ON "_ArtistToExhibition"("B");

-- AddForeignKey
ALTER TABLE "ArtGallery" ADD CONSTRAINT "ArtGallery_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtGallery" ADD CONSTRAINT "ArtGallery_mainAreaId_fkey" FOREIGN KEY ("mainAreaId") REFERENCES "MainArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtGallery" ADD CONSTRAINT "ArtGallery_subAreaId_fkey" FOREIGN KEY ("subAreaId") REFERENCES "SubArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubArea" ADD CONSTRAINT "SubArea_mainAreaId_fkey" FOREIGN KEY ("mainAreaId") REFERENCES "MainArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exhibition" ADD CONSTRAINT "Exhibition_artGalleryId_fkey" FOREIGN KEY ("artGalleryId") REFERENCES "ArtGallery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exhibition" ADD CONSTRAINT "Exhibition_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommonUser" ADD CONSTRAINT "CommonUser_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_mainGenreId_fkey" FOREIGN KEY ("mainGenreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artwork" ADD CONSTRAINT "Artwork_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artwork" ADD CONSTRAINT "Artwork_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeArtGallery" ADD CONSTRAINT "LikeArtGallery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeArtGallery" ADD CONSTRAINT "LikeArtGallery_artGalleryId_fkey" FOREIGN KEY ("artGalleryId") REFERENCES "ArtGallery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeArtwork" ADD CONSTRAINT "LikeArtwork_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeArtwork" ADD CONSTRAINT "LikeArtwork_artworkId_fkey" FOREIGN KEY ("artworkId") REFERENCES "Artwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeArtist" ADD CONSTRAINT "LikeArtist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeArtist" ADD CONSTRAINT "LikeArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeExhibition" ADD CONSTRAINT "LikeExhibition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeExhibition" ADD CONSTRAINT "LikeExhibition_exhibitionId_fkey" FOREIGN KEY ("exhibitionId") REFERENCES "Exhibition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_exhibitionId_fkey" FOREIGN KEY ("exhibitionId") REFERENCES "Exhibition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToExhibition" ADD CONSTRAINT "_ArtistToExhibition_A_fkey" FOREIGN KEY ("A") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToExhibition" ADD CONSTRAINT "_ArtistToExhibition_B_fkey" FOREIGN KEY ("B") REFERENCES "Exhibition"("id") ON DELETE CASCADE ON UPDATE CASCADE;
