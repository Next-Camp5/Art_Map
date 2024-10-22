import BestPicksContainer from "./bestPicks/BestPicksContainer";
import CuratorsContainer from "./curators/CuratorsContainer";
import LatestPostsContainer from "./latestPost/LatestPostsContainer";
import FilterRemote from "@/components/@Map/FilterRemote";

const CuratorContainer = () => {
  return (
    <div className=" w-full pl-[16px] pr-[16px] pb-[50px]">
      <BestPicksContainer />
      <CuratorsContainer />
      <LatestPostsContainer />
      <FilterRemote />
    </div>
  );
};

export default CuratorContainer;
