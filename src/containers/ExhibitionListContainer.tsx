import HomeHeader from "@/components/@Layout/HomeHeader";
import ExhibitionGallery from "@/components/@Home/ExhibitionGallery";
import ExhibitionListNavigation from "@/components/@Layout/ExhibitionListNavigation";
import FilterSetting from "@/components/@Modal/FilterSetting";

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
