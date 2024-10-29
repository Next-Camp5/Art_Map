import getExhibitionAreaInfo from '../actions/exhibitionsAreaInfo';
import KaKaoMap from './KakaoMap';

const MapContainer = async () => {
  const areaInfo = await getExhibitionAreaInfo();

  return (
    <div className="relative flex justify-center">
      <KaKaoMap areaInfo={areaInfo} />
    </div>
  );
};

export default MapContainer;
