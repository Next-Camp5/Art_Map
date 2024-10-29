import { MarkerClusterer } from 'react-kakao-maps-sdk';
import PosMarker from '../marker/PosMarker';
import { AreaInfo } from '../../actions/exhibitionsAreaInfo';

interface props {
  areaInfo: AreaInfo;
  onClick: (id: number) => void;
  selectedArtGalleryId: number | null;
}

const PosCluster = ({ areaInfo, onClick, selectedArtGalleryId }: props) => {
  const { artGalleries } = areaInfo;

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
          active={selectedArtGalleryId === artGallery.id}
          onClick={onClick}
          lat={artGallery.posX}
          lng={artGallery.posY}
        />
      ))}
    </MarkerClusterer>
  );
};

export default PosCluster;
