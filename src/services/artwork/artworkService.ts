import prisma from '@/lib/prisma';
import { artworkDefaultQuery } from './queries';
import { CreateArtwork, UpdateArtwork } from './type';

class ArtworkService {
  private prisma;

  constructor(prismaInstance: typeof prisma) {
    this.prisma = prismaInstance;
  }

  public async getArtworks(count: number) {
    return this.prisma.artwork.findMany({
      ...artworkDefaultQuery,
      take: count,
    });
  }

  public async getArtwork(id: number) {
    return this.prisma.artwork.findUniqueOrThrow({
      where: { id },
    });
  }

  public async updateArtwork(artwork: UpdateArtwork) {
    return this.prisma.artwork.update({
      where: { id: artwork.id },
      data: artwork,
    });
  }

  public async createArtwork(artwork: CreateArtwork) {
    return this.prisma.artwork.create({
      data: artwork,
    });
  }

  public async deleteArtwork(id: number) {
    return this.prisma.artwork.delete({
      where: { id },
    });
  }
}

const artworkService = new ArtworkService(prisma);
export default artworkService;
