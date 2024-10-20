import HomeHeader from "@/components/@Layout/HomeHeader";
import FilterSetting from "@/components/@Modal/FilterSetting";
import ExhibitionGallery from "@/components/@Home/ExhibitionGallery";
import ExhibitionListNavigation from "@/components/@Layout/ExhibitionListNavigation";

const ExhibitionListContainer = () => {
  return (
    <div className="w-[375px] mx-auto bg-white">
      <HomeHeader />
      <ExhibitionListNavigation />
      <ExhibitionGallery />
      <FilterSetting />
    </div>
  );
};

export default ExhibitionListContainer;
