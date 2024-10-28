'use server';

import exhibitionService from '@/services/exhibition/exhibitionService';

const deleteExhibition = (id: number) => {
  return exhibitionService.deleteExhibition(id);
};

export default deleteExhibition;
