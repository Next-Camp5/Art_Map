import artGalleryService from '@/services/artGallery/artGalleryService';

export const getArtGalleries = (count: number = 10) => {
  return artGalleryService.getArtGalleries(count);
};

export const getArtGallery = (id: number) => {
  return artGalleryService.getArtGallery(id);
};
