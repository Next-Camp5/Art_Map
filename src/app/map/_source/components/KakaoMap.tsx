'use client';

import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';

import GuCluster from './cluster/GuCluster';
import PosCluster from './cluster/PosCluster';
import ArtGalleryCluster from './cluster/ArtGalleryCluster';
import Header from './header/Header';
import { AreaInfo } from './../actions/exhibitionsAreaInfo';
import { ZOOM_LEVELS } from '@/constants/map';

const {
  MAIN_CLUSTER,
  MIN_LEVEL,
  ART_GALLERY_CLUSTER,
  SUB_CLUSTER,
  POS_CLUSTER,
  DEFAULT_ZOOM_LEVEL,
} = ZOOM_LEVELS;

interface props {
  areaInfo: AreaInfo;
}

const KaKaoMap = ({ areaInfo }: props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
    libraries: ['clusterer'],
  });
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    posX: number;
    posY: number;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({
            posX: longitude,
            posY: latitude,
          });
        },
        (error) => {
          console.error('위치 정보를 가져오지 못했습니다:', error);
          setPosition({ posX: 127.024612, posY: 37.5326 });
        }
      );
    }
  }, []);

  const [zoomLevel, setZoomLevel] = useState<number>(DEFAULT_ZOOM_LEVEL);

  if (!position) {
    return <div>위치 정보를 가져오는 중입니다</div>;
  }
  return (
    <>
      <Header />
      <Map
        onZoomStart={() => setIsZooming(true)}
        onZoomChanged={(e) => {
          setZoomLevel(e.getLevel());
          setIsZooming(false);
        }}
        center={{
          lat: position?.posY,
          lng: position?.posX,
        }}
        style={{
          width: '100%',
          height: '840px',
        }}
        level={DEFAULT_ZOOM_LEVEL}
        minLevel={MIN_LEVEL}
      >
        {zoomLevel <= MAIN_CLUSTER && zoomLevel > SUB_CLUSTER && !isZooming && (
          <GuCluster areaInfo={areaInfo} isMain={true} />
        )}
        {zoomLevel <= SUB_CLUSTER && zoomLevel > POS_CLUSTER && !isZooming && (
          <GuCluster areaInfo={areaInfo} isMain={false} />
        )}
        {zoomLevel <= POS_CLUSTER &&
          zoomLevel > ART_GALLERY_CLUSTER &&
          !isZooming && <PosCluster areaInfo={areaInfo} />}
        {zoomLevel <= ART_GALLERY_CLUSTER && !isZooming && (
          <ArtGalleryCluster areaInfo={areaInfo} />
        )}
      </Map>
    </>
  );
};

export default KaKaoMap;
