"use client";

import {
  Map,
  MapMarker,
  MarkerClusterer,
  useKakaoLoader,
} from "react-kakao-maps-sdk";

const MapContainer = () => {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
  });
  return (
    <Map
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
      }}
      level={3} // 지도의 확대 레벨
    >
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={10} // 클러스터 할 최소 지도 레벨
      >
        {Array.from({ length: 10 }).map((_, idx) => (
          <MapMarker
            key={`${idx * 4}`}
            position={{
              lat: 36.2683,
              lng: 127.6358,
            }}
          />
        ))}
      </MarkerClusterer>
    </Map>
  );
};

export default MapContainer;
