import NoDataMessage from './components/NoDataMessage';
import SectionHeader from '../../common/SectionHeader';
import MyCollectionNav from './components/MyCollectionNav';
import ArtworkList from './components/ArtworkList';
import ArtistList from './components/ArtistList';
import ExhibitionList from './components/ExhibitionList';
import { DATA, artworkData, artistData, exhibitionData } from './mocks';

const MyCollectionSection = () => {
  // 질문 사항.
  /**
   * 1. 지금 위치의 컴포넌트는 서버컴포넌트가 되어야할까?
   * 2. 만약 그렇다면 데이터를 3개를 모두 처음부터 가져와야하나? => 별로 좋은거같지 않음.
   * 3. 그러면 버튼부터 해당 전부를 클라컴포로 만들어서, 해당 버튼이 눌릴때마다 데이터를 가져오는 방식이어야 하나?
   */
  return (
    <section className="bg-white px-4 flex flex-col min-h-[290px]">
      <SectionHeader title="나의 컬렉션" link="/" />
      <MyCollectionNav />
      <div className="flex items-center justify-center flex-grow">
        {DATA && artworkData ? (
          <ArtworkList image={artworkData[0].title} />
        ) : (
          <NoDataMessage />
        )}
        {DATA && artistData ? (
          <ArtistList name={artistData[0].name} genre={artistData[0].genre} />
        ) : (
          <NoDataMessage />
        )}
        {DATA && exhibitionData ? (
          <ExhibitionList name={exhibitionData[0].name} />
        ) : (
          <NoDataMessage />
        )}
      </div>
    </section>
  );
};

export default MyCollectionSection;
