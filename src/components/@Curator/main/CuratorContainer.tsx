import BestPicksContainer from "./bestPicks/BestPicksContainer";
import CuratorsContainer from "./curators/CuratorsContainer";
import LatestPostsContainer from "./latestPost/LatestPostsContainer";

const CuratorContainer = () => {
  return (
    <div className=" w-full pl-[16px] pr-[16px]">
      <BestPicksContainer />
      <CuratorsContainer />
      <LatestPostsContainer />
    </div>
  );
};

export default CuratorContainer;
