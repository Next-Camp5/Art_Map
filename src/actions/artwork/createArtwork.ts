'use server';

import artworkService from '@/services/artwork/artworkService';

const createArtwork = (e: FormData) => {
  const title = e.get('title') as string;
  const image = e.get('title') as string;
  const ingredients = e.get('title') as string;
  const size = e.get('size') as string;
  const genreId = Number(e.get('genreId'));
  const artistId = Number(e.get('artistId'));

  const newArtwork = artworkService.createArtwork({
    title,
    image,
    ingredients,
    size,
    genreId,
    artistId,
  });
  return newArtwork;
};

export default createArtwork;
