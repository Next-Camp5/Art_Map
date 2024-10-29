'use server';

import exhibitionService from './../../services/exhibition/exhibitionService';

export const getExhibition = (id: number) => {
  return exhibitionService.getExhibition(id);
};

export const getExhibitions = (count: number = 10) => {
  return exhibitionService.getExhibitions(count);
};

export const getSimpleExhibitions = (count: number = 10) => {
  return exhibitionService.getSimpleExhibitions(count);
};

export const getSimpleExhibitionsByArtGalleryId = (
  id: number,
  count: number = 10
) => {
  return exhibitionService.getSimpleExhibitionsByArtGalleryId(id, count);
};
