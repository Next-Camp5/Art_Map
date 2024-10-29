import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import { AreaInfo } from '../../actions/exhibitionsAreaInfo';

interface props {
  areaInfo: AreaInfo;
}

const ArtGalleryCluster = ({ areaInfo }: props) => {
  const artGalleries = areaInfo.artGalleries;

  return (
    <>
      {artGalleries.map((artGallery) => (
        <CustomOverlayMap
          key={artGallery.id}
          position={{ lat: artGallery.posX, lng: artGallery.posY }}
        >
          <div
            className="flex flex-col justify-start items-start  gap-2.5 pl-[5px] pr-[5px] py-[5px] rounded-[23px] bg-white"
            style={{ boxShadow: '0px 0px 10px 0 rgba(26,26,26,0.1)' }}
          >
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
              <div
                className={`rounded-full h-[36px] w-[36px] flex justify-center items-center ${
                  artGallery.isOpen ? 'bg-point' : 'bg-gray-4'
                }`}
              >
                <p className=" text-white text-xl font-bold">
                  {artGallery.count}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow relative">
                <p
                  className={`text-xs font-bold ${
                    artGallery.isOpen ? 'text-point' : 'text-gray-4'
                  }`}
                >
                  {artGallery.isOpen ? '전시중' : '휴관중'}
                </p>
                <p className="text-xs font-bold text-primary">
                  {artGallery.name}
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
