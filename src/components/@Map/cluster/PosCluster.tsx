import MapIcon from "@/components/Icon/MapIcon";
import ART_GALLERIES from "@/mocks/exhibitions";
import { useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

const PosCluster = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      {ART_GALLERIES.map((artGallery, idx) => (
        <CustomOverlayMap
          key={artGallery.ART_GALLERY}
          position={{
            lat: artGallery.POS_Y,
            lng: artGallery.POS_X,
          }}
        >
          <MapIcon
            width={50}
            height={50}
            onClick={() => setActive(idx)}
            fill={`${active === idx ? "point" : "primary"}`}
          ></MapIcon>
        </CustomOverlayMap>
      ))}
    </>
  );
};

export default PosCluster;
