'use server';

import { UpdateExhibition } from '@/services/exhibition/type';
import exhibitionService from './../../services/exhibition/exhibitionService';

const updateExhibition = (exhibition: UpdateExhibition) => {
  return exhibitionService.updateExhibition(exhibition);
};

export default updateExhibition;
