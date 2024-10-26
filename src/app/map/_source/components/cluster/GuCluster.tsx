import ART_GALLERIES from '@/mocks/exhibitions';
import GU_INFO from '@/mocks/guInfo';

import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import GuMarker from '../marker/GuMarker';

const GuCluster = () => {
  const guExhibitionObject = ART_GALLERIES.reduce(
    (acc: { [key: string]: number }, cur) => {
      return {
        ...acc,
        [cur.DISTRICT]: acc[cur.DISTRICT] ? acc[cur.DISTRICT] + 1 : 1,
      };
    },
    {}
  );

  const guExhibitions = Object.keys(guExhibitionObject).map((key) => ({
    name: key,
    count: guExhibitionObject[key],
  }));
  return (
    <>
      {guExhibitions.map((guExhibition) => (
        <CustomOverlayMap
          key={guExhibition.name}
          position={{
            lat: GU_INFO[guExhibition.name].POS_Y,
            lng: GU_INFO[guExhibition.name].POS_X,
          }}
        >
          <GuMarker
            name={guExhibition.name}
            count={guExhibition.count}
          ></GuMarker>
        </CustomOverlayMap>
      ))}
    </>
  );
};

export default GuCluster;