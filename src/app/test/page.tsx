import prisma from '@/lib/prisma';

import Test from './Test';
import getExhibitionAreaInfo from '../map/_source/actions/exhibitionsAreaInfo';
import { getExhibitions } from '@/actions/exhibition/getExhibition';
import { unstable_cache } from 'next/cache';
import artGalleryService from '@/services/artGallery/artGalleryService';
import exhibitionService from '@/services/exhibition/exhibitionService';
import createExhibition from '@/actions/exhibition/createExhibition';

const page = async () => {
  const d = unstable_cache(
    async () => {
      const data = await exhibitionService.getExhibitions();
      return data;
    },
    ['a'],
    { tags: ['abcd'], revalidate: 60 }
  );
  const data = await d();

  // const handleClick = async () => {
  //   'use server';
  //   const a = await prisma.exhibition.create({
  //     data: {
  //       title: 'aa전시회',
  //       image:
  //         'https://cdn.pixabay.com/photo/2024/10/17/16/14/waterfall-9128051_1280.jpg',
  //       startDate: new Date(2024, 10, 12),
  //       endDate: new Date(2024, 12, 11),
  //       openTime: 10,
  //       endTime: 18,
  //       status: 'EXHIBITING',
  //       introduce: '전시회 소개글입니다/',
  //       artGalleryId: 1,
  //       genreId: 1,
  //       artists: {
  //         connect: { id: 2 },
  //       },
  //     },
  //   });
  // };
  return (
    <form action={createExhibition}>
      <input name="title" type="text" placeholder="title" />
      <input name="image" type="text" placeholder="image" />
      <input name="startDate" type="date" placeholder="startDate" />
      <input name="endDate" type="date" placeholder="endDate" />
      <input name="openTime" type="number" placeholder="openTime" />
      <input name="endTime" type="number" placeholder="endTime" />
      <input name="status" type="status" placeholder="status" />
      <input name="introduce" type="introduce" placeholder="introduce" />
      <input name="artGalleryId" type="text" placeholder="artGalleryId" />
      <input name="genreId" type="text" placeholder="genreId" />
      <input name="artists" type="text" placeholder="artists" />
      <button>서브밋버튼</button>
      {data.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
      <Test />
    </form>
  );
};

export default page;
