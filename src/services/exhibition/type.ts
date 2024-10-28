import { Exhibition as IExhibition } from '@prisma/client';

export type Exhibition = Omit<
  IExhibition,
  'artGalleryId' | 'genreId' | 'visitedUsers' | 'likedByUser'
>;
export interface UpdateExhibition extends Partial<Omit<Exhibition, 'id'>> {
  id: number;
}
export type CreateExhibition = Omit<
  IExhibition,
  'id' | 'createdAt' | 'updatedAt'
>;
