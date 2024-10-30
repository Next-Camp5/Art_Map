import GalleryInfo from './_source/components/main/galleryInfo/GalleryInfo';
import GalleryExplain from './_source/components/main/explain/GalleryExplain';
import ExhibitionSchedule from './_source/components/main/schedule/ExhibitionSchedule';
import PosterSection from '@/app/exhibition/[id]/_source/components/main/poster/PosterSection';

const Gallery = () => {
  return (
    <div>
      <PosterSection />
      <main className="bg-white absolute top-[520px] left-0 rounded-t-[20px] pb-[100px] w-full">
        <h1 className="sr-only">전시관 정보</h1>
        <GalleryInfo />
        <GalleryExplain />
        <ExhibitionSchedule />
      </main>
    </div>
  );
};

export default Gallery;
