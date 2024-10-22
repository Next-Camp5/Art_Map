import ART_GALLERIES from "@/mocks/exhibitions";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

const PosCluster = () => {
  return (
    <>
      {ART_GALLERIES.map((artGallery) => (
        <CustomOverlayMap
          key={artGallery.ART_GALLERY}
          position={{
            lat: artGallery.posY,
            lng: artGallery.posX,
          }}
        >
          <div>
            <svg
              width={50}
              height={50}
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[50px] h-[50px] relative"
              preserveAspectRatio="none"
            >
              <path
                d="M24.9998 4.16699C15.8103 4.16699 8.33318 11.6441 8.33318 20.8232C8.27276 34.2503 24.3665 45.3837 24.9998 45.8337C24.9998 45.8337 41.7269 34.2503 41.6665 20.8337C41.6665 11.6441 34.1894 4.16699 24.9998 4.16699ZM24.9998 29.167C20.3957 29.167 16.6665 25.4378 16.6665 20.8337C16.6665 16.2295 20.3957 12.5003 24.9998 12.5003C29.604 12.5003 33.3332 16.2295 33.3332 20.8337C33.3332 25.4378 29.604 29.167 24.9998 29.167Z"
                fill="black"
              />
            </svg>
          </div>
        </CustomOverlayMap>
      ))}
    </>
  );
};

export default PosCluster;
