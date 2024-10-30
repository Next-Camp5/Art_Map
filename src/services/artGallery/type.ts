import { ArtGallery as IArtGallery } from '@prisma/client';

export type ArtGallery = Omit<IArtGallery, 'mainAreaId' | 'subAreaId'>;
export interface UpdateArtGallery extends Partial<Omit<ArtGallery, 'id'>> {
  id: number;
}
export type CreateArtGallery = Omit<IArtGallery, 'id'>;
