import { Artwork as IArtWork } from '@prisma/client';

export type Artwork = Omit<IArtWork, 'genreId' | 'artistId'>;
export interface UpdateArtwork extends Partial<Omit<Artwork, 'id'>> {
  id: number;
}
export type CreateArtwork = Omit<IArtWork, 'id' | 'createdAt' | 'updatedAt'>;
