import Button from "@/components/common/Botton";
import Profile from "@/components/common/profile/Profile";

const CuratorProfile = () => {
  return (
    <div className="flex items-center justify-between mb-[40px]">
      <Profile imageSrc={"/prototypeImg.jpg"} size="M" />
      <p className="text-md font-bold ">아트맵매거진</p>

      <Button size="SM" color="point" border={true}>
        크리틱 의뢰
      </Button>
    </div>
  );
};

export default CuratorProfile;
