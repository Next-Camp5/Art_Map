import ExhibitionPager from "./components/ExhibitionPager";

const NewExhibitionSection = () => (
  <section className="relative flex flex-col gap-5 px-4 mb-[50px]">
    <h2 className="text-lg font-bold text-gray-6 w-[343px]">
      새로 시작한 전시
    </h2>
    <ExhibitionPager />
  </section>
);

export default NewExhibitionSection;
