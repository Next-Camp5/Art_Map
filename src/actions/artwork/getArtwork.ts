import artworkService from '@/services/artwork/artworkService';

export const getArtworks = (count: number = 10) => {
  return artworkService.getArtworks(count);
};

export const getArtwork = (id: number) => {
  return artworkService.getArtwork(id);
};
