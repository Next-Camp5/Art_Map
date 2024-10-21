import HomeHeader from "@/components/@Layout/HomeHeader";
import ExhibitionGallery from "@/components/@Home/ExhibitionGallery";
import ExhibitionListNavigation from "@/components/@Layout/Navigation/ExhibitionListNavigation";

const ExhibitionListContainer = () => {
  return (
    <>
      <HomeHeader />
      <ExhibitionListNavigation />
      <ExhibitionGallery />
    </>
  );
};

export default ExhibitionListContainer;
