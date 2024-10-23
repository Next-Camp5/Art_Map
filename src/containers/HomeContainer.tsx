import ExhibitionBanner from '@/app/home/_source/components/common/ExhibitionBanner';
import ArtMapSketchSection from '@/app/home/_source/components/ArtMapSketchSection';
import NewExhibitionSection from '@/app/home/_source/components/NewExhibitionSection';
import PopularExhibitionSection from '@/app/home/_source/components/PopularExhibitionSection';
import MyTasteExhibitionSection from '@/app/home/_source/components/MyTasteExhibitionSection';
import EndingSoonExhibitionsSection from '@/app/home/_source/components/EndingSoonExhibitionsSection';
import CurrentArtistsSection from '@/app/home/_source/components/CurrentArtistsSection';

const HomeContainer = () => {
  return (
    <>
      <ExhibitionBanner />
      <main>
        <MyTasteExhibitionSection />
        <PopularExhibitionSection />
        <CurrentArtistsSection />
        <NewExhibitionSection />
        <EndingSoonExhibitionsSection />
        <ArtMapSketchSection />
      </main>
    </>
  );
};

export default HomeContainer;
