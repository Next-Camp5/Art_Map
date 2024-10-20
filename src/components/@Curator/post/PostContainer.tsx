import RelatedWorksContainer from "./RelatedWorks/RelatedWorksContainer";
import CuratorProfile from "./CuratorProfile/CuratorProfile";
import Title from "./Title/Title";
import CuratorsContainer from "./Curators/CuratorsContainer";
import RelatedExhibitionContainer from "./RelatedExhibition/RelatedExhibitionContainer";
import OtherPostsContainer from "./Other/OtherPostsContainer";

const PostContainer = () => {
  return (
    <div>
      <Title />
      <div className=" pl-[16px] pr-[16px]">
        <CuratorProfile />
        <RelatedWorksContainer />
        <CuratorsContainer />
        <RelatedExhibitionContainer />
        <OtherPostsContainer />
      </div>
    </div>
  );
};

export default PostContainer;
