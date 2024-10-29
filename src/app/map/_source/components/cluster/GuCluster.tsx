import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import GuMarker from '../marker/GuMarker';
import { AreaInfo } from '../../actions/exhibitionsAreaInfo';

interface props {
  areaInfo: AreaInfo;
  isMain: boolean;
}

const GuCluster = ({ areaInfo, isMain }: props) => {
  const mainAreas = areaInfo.main;
  const subAreas = areaInfo.sub;

  return (
    <>
      {isMain
        ? mainAreas.map((mainArea) => (
            <CustomOverlayMap
              key={mainArea.id}
              position={{
                lat: mainArea.posX,
                lng: mainArea.posY,
              }}
            >
              <GuMarker name={mainArea.name} count={mainArea.count}></GuMarker>
            </CustomOverlayMap>
          ))
        : subAreas.map((subArea) => (
            <CustomOverlayMap
              key={subArea.id}
              position={{
                lat: subArea.posX,
                lng: subArea.posY,
              }}
            >
              <GuMarker name={subArea.name} count={subArea.count}></GuMarker>
            </CustomOverlayMap>
          ))}
    </>
  );
};

export default GuCluster;
