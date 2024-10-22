import ExhibitionBanner from "@/components/@Home/ExhibitionBanner";
import ArtMapSketchSection from "@/components/@Home/ArtMapSketchSection";
import NewExhibitionSection from "@/components/@Home/NewExhibitionSection";
import CurrentArtistsSection from "@/components/@Home/CurrentArtistsSection";
import PopularExhibitionSection from "@/components/@Home/PopularExhibitionSection";
import MyTasteExhibitionSection from "@/components/@Home/MyTasteExhibitionSection";
import EndingSoonExhibitionsSection from "@/components/@Home/EndingSoonExhibitionsSection";

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
