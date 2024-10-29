import prisma from '@/lib/prisma';
import { exhibitionDefaultQuery } from './queries';
import { CreateExhibition, UpdateExhibition } from './type';

class ExhibitionService {
  private prisma;

  constructor(prismaInstance: typeof prisma) {
    this.prisma = prismaInstance;
  }

  public async getExhibitions(count: number) {
    return this.prisma.exhibition.findMany({
      ...exhibitionDefaultQuery,
      take: count,
    });
  }

  public async getExhibition(id: number) {
    return this.prisma.exhibition.findUniqueOrThrow({
      where: { id },
      ...exhibitionDefaultQuery,
    });
  }
  public async getSimpleExhibitionsByArtGalleryId(id: number, count: number) {
    return this.prisma.artGallery.findUniqueOrThrow({
      where: { id },

      select: {
        exhibitions: {
          select: {
            id: true,
            title: true,
            image: true,
            startDate: true,
            endDate: true,
            status: true,
            artGallery: {
              select: {
                id: true,
                name: true,
                ClosedDays: true,
              },
            },
          },
          take: count,
        },
      },
    });
  }
  public async getSimpleExhibitions(count: number) {
    return this.prisma.exhibition.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        startDate: true,
        endDate: true,
        status: true,
        artGallery: {
          select: {
            id: true,
            name: true,
            ClosedDays: true,
          },
        },
      },
      take: count,
    });
  }

  public async createExhibition(
    exhibition: CreateExhibition,
    artistsId: Array<number>
  ) {
    return this.prisma.exhibition.create({
      data: {
        ...exhibition,
        artists: {
          connect: artistsId.map((artistId) => {
            return { id: artistId };
          }),
        },
      },
    });
  }

  public async updateExhibition(exhibition: UpdateExhibition) {
    return this.prisma.exhibition.update({
      where: {
        id: exhibition.id,
      },
      data: { ...exhibition },
    });
  }

  public async deleteExhibition(id: number) {
    return this.prisma.exhibition.delete({
      where: { id },
    });
  }
}

const exhibitionService = new ExhibitionService(prisma);
export default exhibitionService;
