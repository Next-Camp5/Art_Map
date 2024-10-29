import { ArtGallery, Exhibition as IExhibition } from '@prisma/client';

export type BaseExhibition = Omit<
  IExhibition,
  'artGalleryId' | 'genreId' | 'visitedUsers' | 'likedByUser'
>;
export interface UpdateExhibition extends Partial<Omit<BaseExhibition, 'id'>> {
  id: number;
}
export type CreateExhibition = Omit<
  IExhibition,
  'id' | 'createdAt' | 'updatedAt'
>;

export type SimpleExhibition = Pick<
  IExhibition,
  'id' | 'title' | 'image' | 'startDate' | 'endDate' | 'status'
> & { artGallery: Pick<ArtGallery, 'id' | 'name' | 'ClosedDays'> };
