'use server';

import exhibitionService from '@/services/exhibition/exhibitionService';

const createExhibition = (e: FormData) => {
  const title = e.get('title') as string;
  const image = e.get('image') as string;
  const startDate = new Date(e.get('startDate') as string);
  const endDate = new Date(e.get('endDate') as string);
  const openTime = Number(e.get('openTime'));
  const introduce = e.get('introduce') as string;
  const endTime = Number(e.get('endTime'));
  const status = 'EXHIBITING';
  const artGalleryId = Number(e.get('artGalleryId'));
  const genreId = Number(e.get('genreId'));
  const artists = Number(e.get('artists'));

  const data = exhibitionService.createExhibition(
    {
      title,
      image,
      startDate,
      endDate,
      openTime,
      endTime,
      introduce,
      status,
      artGalleryId,
      genreId,
    },
    [artists]
  );
  return data;
};

export default createExhibition;
