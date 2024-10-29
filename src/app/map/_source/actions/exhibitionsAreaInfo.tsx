'use server';

import prisma from '@/lib/prisma';

export interface ArtGalleryResult {
  id: number;
  name: string;
  posX: number;
  posY: number;
  isOpen: boolean;
  count: number;
}

interface AreaResult {
  id: number;
  name: string;
  count: number;
  posX: number;
  posY: number;
}

export interface AreaInfo {
  main: AreaResult[];
  sub: AreaResult[];
  artGalleries: ArtGalleryResult[];
}

export const getExhibitionAreaInfo = async () => {
  try {
    const exhibitions = await prisma.exhibition.findMany({
      select: {
        id: true,
        artGallery: {
          select: {
            id: true,
            name: true,
            isOpen: true,
            posX: true,
            posY: true,
            mainArea: {
              select: {
                id: true,
                name: true,
                posX: true,
                posY: true,
              },
            },
            subArea: {
              select: {
                id: true,
                name: true,
                posX: true,
                posY: true,
              },
            },
          },
        },
      },
    });

    const result = {
      main: {} as Record<number, AreaResult>,
      sub: {} as Record<number, AreaResult>,
      artGalleries: {} as Record<number, Omit<ArtGalleryResult, 'id'>>,
    };

    exhibitions.forEach((exhibition) => {
      const {
        id: mainAreaId,
        name: mainAreaName,
        posX,
        posY,
      } = exhibition.artGallery.mainArea;
      const { id: subAreaId, name: subAreaName } =
        exhibition.artGallery.subArea;

      if (!result.main[mainAreaId]) {
        result.main[mainAreaId] = {
          id: mainAreaId,
          name: mainAreaName,
          count: 0,
          posX,
          posY,
        };
      }
      result.main[mainAreaId].count += 1;

      if (!result.sub[subAreaId]) {
        const { posX, posY } = exhibition.artGallery.subArea;
        result.sub[subAreaId] = {
          id: subAreaId,
          name: subAreaName,
          count: 0,
          posX,
          posY,
        };
      }
      result.sub[subAreaId].count += 1;

      if (!result.artGalleries[exhibition.artGallery.id]) {
        result.artGalleries[exhibition.artGallery.id] = {
          name: exhibition.artGallery.name,
          posX: exhibition.artGallery.posX,
          posY: exhibition.artGallery.posY,
          isOpen: exhibition.artGallery.isOpen,
          count: 0,
        };
      }
      result.artGalleries[exhibition.artGallery.id].count += 1;
    });

    const areaInfo: AreaInfo = {
      main: Object.values(result.main),
      sub: Object.values(result.sub),
      artGalleries: Object.entries(result.artGalleries).map(
        ([id, gallery]) => ({
          id: Number(id),
          ...gallery,
        })
      ),
    };

    return areaInfo;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export default getExhibitionAreaInfo;
