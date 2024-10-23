import ART_GALLERIES from "@/mocks/exhibitions";
import { useCallback, useState } from "react";
import { MarkerClusterer } from "react-kakao-maps-sdk";
import PosMarker from "../marker/PosMarker";

const PosCluster = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  return (
    <MarkerClusterer
      styles={[
        {
          height: "30px",
          width: "30px",
          background: "black",
          color: "white",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      {ART_GALLERIES.map((artGallery, idx) => (
        <PosMarker
          key={artGallery.ART_GALLERY}
          id={idx}
          active={active === idx}
          onClick={handleClick}
          lat={artGallery.POS_Y}
          lng={artGallery.POS_X}
        />
      ))}
    </MarkerClusterer>
  );
};

export default PosCluster;
