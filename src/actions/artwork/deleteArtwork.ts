'use server';

import artworkService from '@/services/artwork/artworkService';

const deleteArtwork = (id: number) => {
  return artworkService.deleteArtwork(id);
};

export default deleteArtwork;
