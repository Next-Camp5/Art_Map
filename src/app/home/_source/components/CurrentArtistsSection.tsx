import ArtistItem from './common/ArtistItem';

const CurrentArtistsSection = () => (
  <section className="flex flex-col gap-5 px-4 mb-[50px]">
    <h2 className="text-lg font-bold text-gray-6">현재 전시 중인 작가</h2>
    <ArtistItem />
  </section>
);

export default CurrentArtistsSection;
