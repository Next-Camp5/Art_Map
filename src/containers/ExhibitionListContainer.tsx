import HomeHeader from '@/components/@Layout/Header/HomeHeader';
import ExhibitionGallery from '@/app/exhibition/_source/components/ExhibitionGallery';
import ExhibitionListNavigation from '@/components/@Layout/Navigation/ExhibitionListNavigation';

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
