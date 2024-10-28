'use server';

import artworkService from '@/services/artwork/artworkService';
import { UpdateArtwork } from '@/services/artwork/type';

const updateArtwork = (artwork: UpdateArtwork) => {
  return artworkService.updateArtwork(artwork);
};

export default updateArtwork;
