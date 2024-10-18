import VerticalExhibitionSection from "@/components/@Home/components/VerticalExhibitionSection";

const MyTasteExhibitionSection = () => (
  <section className="flex flex-col pl-4 overflow-hidden w-full mt-[40px] mb-[50px] gap-5">
    <h2 className="text-lg font-bold text-gray-6">내 취향 전시</h2>
    <VerticalExhibitionSection />
  </section>
);

export default MyTasteExhibitionSection;
