import MapIcon from '@/components/Icon/MapIcon';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import { memo } from 'react';

interface Props {
  id: number;
  active: boolean;
  onClick: (idx: number) => void;
  lat: number;
  lng: number;
}

const PosMarker = ({ active = false, onClick, lat, lng, id }: Props) => {
  return (
    <CustomOverlayMap
      position={{
        lat,
        lng,
      }}
    >
      <MapIcon
        width={50}
        height={50}
        onClick={() => onClick(id)}
        fill={active ? 'point' : 'primary'}
      />
    </CustomOverlayMap>
  );
};

export default memo(PosMarker);
