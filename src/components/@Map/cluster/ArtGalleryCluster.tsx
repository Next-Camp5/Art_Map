import ART_GALLERIES from "@/mocks/exhibitions";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

const ArtGalleryCluster = () => {
  return (
    <>
      {ART_GALLERIES.map((artGallery) => (
        <CustomOverlayMap
          key={artGallery.ART_GALLERY}
          position={{ lat: artGallery.posY, lng: artGallery.posX }}
        >
          <div
            className="flex flex-col justify-start items-start  gap-2.5 pl-[5px] pr-[5px] py-[5px] rounded-[23px] bg-white"
            style={{ boxShadow: "0px 0px 10px 0 rgba(26,26,26,0.1)" }}
          >
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
              <div className=" rounded-full bg-point h-[36px] w-[36px] flex justify-center items-center">
                <p className=" text-white text-xl font-bold">
                  {artGallery.EXHIBITIONS.length}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow relative">
                <p className=" text-xs font-bold text-point">전시중</p>
                <p className="text-xs font-bold text-primary">
                  {artGallery.ART_GALLERY}
                </p>
              </div>
            </div>
          </div>
        </CustomOverlayMap>
      ))}
    </>
  );
};

export default ArtGalleryCluster;
