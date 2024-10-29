import { useCallback, useState } from 'react';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import PosMarker from '../marker/PosMarker';
import { AreaInfo } from '../../actions/exhibitionsAreaInfo';

interface props {
  areaInfo: AreaInfo;
}

const PosCluster = ({ areaInfo }: props) => {
  const { artGalleries } = areaInfo;

  const [active, setActive] = useState<number | null>(null);

  const handleClick = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  return (
    <MarkerClusterer
      styles={[
        {
          height: '30px',
          width: '30px',
          background: 'black',
          color: 'white',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      {artGalleries.map((artGallery) => (
        <PosMarker
          key={artGallery.id}
          id={artGallery.id}
          active={active === artGallery.id}
          onClick={handleClick}
          lat={artGallery.posX}
          lng={artGallery.posY}
        />
      ))}
    </MarkerClusterer>
  );
};

export default PosCluster;
