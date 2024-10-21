import ExhibitionBanner from "@/components/@Home/ExhibitionBanner";
import ArtMapSketchSection from "@/components/@Home/ArtMapSketchSection";
import NewExhibitionSection from "@/components/@Home/NewExhibitionSection";
import CurrentArtistsSection from "@/components/@Home/CurrentArtistsSection";
import PopularExhibitionSection from "@/components/@Home/PopularExhibitionSection";
import MyTasteExhibitionSection from "@/components/@Home/MyTasteExhibitionSection";

const HomeContainer = () => {
  return (
    <>
      <div className="h-11 bg-[#F15114]"></div>
      <ExhibitionBanner />
      <main>
        <MyTasteExhibitionSection />
        <PopularExhibitionSection />
        <CurrentArtistsSection />
        <NewExhibitionSection />
        <ArtMapSketchSection />
      </main>
    </>
  );
};

export default HomeContainer;
