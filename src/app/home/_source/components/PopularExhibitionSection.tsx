import VerticalExhibitionSection from '@/app/home/_source/components/common/VerticalExhibitionSection';

const PopularExhibitionSection = () => (
  <section className="flex flex-col gap-5 px-4 overflow-hidden w-full mb-[50px]">
    <h2 className="text-lg font-bold text-gray-6">지금 인기있는 전시</h2>
    <VerticalExhibitionSection />
  </section>
);

export default PopularExhibitionSection;
