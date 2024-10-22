"use client";

import { Map, useKakaoLoader } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

import GuCluster from "./cluster/GuCluster";
import PosCluster from "./cluster/PosCluster";
import ArtGalleryCluster from "./cluster/ArtGalleryCluster";
import Header from "./header/Header";

const DEFAULT_ZOOM_LEVEL = 8;

const MapContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
  });

  const [position, setPosition] = useState<{
    posX: number;
    posY: number;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition({
          posX: longitude,
          posY: latitude,
        });
      });
    }
  }, []);

  const [zoomLevel, setZoomLevel] = useState<number>(DEFAULT_ZOOM_LEVEL);
  if (!position) {
    return <div>위치 정보를 가져오는 중입니다</div>;
  }
  return (
    <div className=" relative flex justify-center">
      <Header />
      <Map
        onZoomChanged={(e) => setZoomLevel(e.getLevel())}
        center={{
          lat: position?.posY,
          lng: position?.posX,
        }}
        style={{
          width: "100%",
          height: "820px",
        }}
        level={DEFAULT_ZOOM_LEVEL}
      >
        {zoomLevel <= 9 && zoomLevel >= 7 && <GuCluster />}
        {zoomLevel <= 6 && zoomLevel >= 3 && <PosCluster />}
        {zoomLevel <= 2 && <ArtGalleryCluster />}
      </Map>
    </div>
  );
};

export default MapContainer;
