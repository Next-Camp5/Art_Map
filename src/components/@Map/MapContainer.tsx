"use client";

import { Map, useKakaoLoader } from "react-kakao-maps-sdk";
import { useState } from "react";

import GuCluster from "./cluster/GuCluster";
import PosCluster from "./cluster/PosCluster";
import ArtGalleryCluster from "./cluster/ArtGalleryCluster";

const DEFAULT_ZOOM_LEVEL = 10;

const MapContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
  });

  const [zoomLevel, setZoomLevel] = useState<number>(DEFAULT_ZOOM_LEVEL);
  console.log(zoomLevel);
  return (
    <Map
      onZoomChanged={(e) => setZoomLevel(e.getLevel())}
      center={{
        lat: 36.2683,
        lng: 127.6358,
      }}
      style={{
        width: "100%",
        height: "100vh",
      }}
      level={DEFAULT_ZOOM_LEVEL}
    >
      {zoomLevel <= 9 && zoomLevel >= 7 && <GuCluster />}
      {zoomLevel <= 6 && zoomLevel >= 3 && <PosCluster />}
      {zoomLevel <= 2 && <ArtGalleryCluster />}
    </Map>
  );
};

export default MapContainer;
