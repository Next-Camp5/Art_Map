import ExhibitionPager from "./components/ExhibitionPager";

const EndingSoonExhibitionsSection = () => {
  return (
    <section className="relative flex flex-col gap-5 px-4 mb-[50px]">
      <h2 className="text-lg font-bold text-gray-6 w-[343px]">
        곧 종료되는 전시
      </h2>
      <ExhibitionPager />
    </section>
  );
};

export default EndingSoonExhibitionsSection;
