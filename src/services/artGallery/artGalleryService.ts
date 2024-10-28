import prisma from '@/lib/prisma';
import { artGalleryDefaultQuery } from './queries';
import { CreateArtGallery, UpdateArtGallery } from './type';

class ArtGalleryService {
  private prisma;

  constructor(prismaInstance: typeof prisma) {
    this.prisma = prismaInstance;
  }

  public async getArtGalleries(count: number) {
    return this.prisma.artGallery.findMany({
      ...artGalleryDefaultQuery,
      take: count,
    });
  }

  public async getArtGallery(id: number) {
    return this.prisma.artGallery.findUniqueOrThrow({
      where: { id },
      ...artGalleryDefaultQuery,
    });
  }

  public async createArtGallery(artGallery: CreateArtGallery) {
    return this.prisma.artGallery.create({
      data: artGallery,
    });
  }

  public async updateArtGallery(artGallery: UpdateArtGallery) {
    return this.prisma.artGallery.update({
      where: { id: artGallery.id },
      data: artGallery,
    });
  }

  public async deleteArtGallery(id: number) {
    return this.prisma.artGallery.delete({
      where: { id },
    });
  }
}

const artGalleryService = new ArtGalleryService(prisma);
export default artGalleryService;
