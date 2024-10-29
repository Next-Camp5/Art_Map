'use server';

import prisma from '@/lib/prisma';
import { unstable_cache } from 'next/cache';

type AreaResult = {
  id: number;
  name: string;
  exhibitions: number[];
};

const EXHIBITIONS_AREA_INFO = {
  GET_EXHIBITIONS_AREA: (query: string = '') => ['exhibitions-area', query],
};

export const getExhibitionAreaInfo = async (query?: string) =>
  unstable_cache(
    async () => {
      try {
        const exhibitions = await prisma.exhibition.findMany({
          select: {
            id: true,
            artGallery: {
              select: {
                mainArea: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
                subArea: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        });

        const result: {
          main: Record<number, AreaResult>;
          sub: Record<number, AreaResult>;
        } = {
          main: {},
          sub: {},
        };

        exhibitions.forEach((exhibition) => {
          const { id: mainAreaId, name: mainAreaName } =
            exhibition.artGallery.mainArea;
          const { id: subAreaId, name: subAreaName } =
            exhibition.artGallery.subArea;

          if (!result.main[mainAreaId]) {
            result.main[mainAreaId] = {
              id: mainAreaId,
              name: mainAreaName,
              exhibitions: [],
            };
          }
          result.main[mainAreaId].exhibitions.push(exhibition.id);

          if (!result.sub[subAreaId]) {
            result.sub[subAreaId] = {
              id: subAreaId,
              name: subAreaName,
              exhibitions: [],
            };
          }

          result.sub[subAreaId].exhibitions.push(exhibition.id);
        });

        return result;
      } catch (e) {
        throw new Error(JSON.stringify(e));
      }
    },
    EXHIBITIONS_AREA_INFO.GET_EXHIBITIONS_AREA(query),
    { tags: ['abc'], revalidate: 1000 }
  )();

export default getExhibitionAreaInfo;
