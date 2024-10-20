import MenuIcon from "@/components/Icon/menu/MenuIcon";
import MenuMapIcon from "@/components/Icon/menu/Icons/MenuMapIcon";
import MentHomeIcon from "@/components/Icon/menu/Icons/MenuHomeIcon";
import MenuMyPageIcon from "@/components/Icon/menu/Icons/MenuMyPageIcon";
import MenuCurationIcon from "@/components/Icon/menu/Icons/MenuCurationIcon";
import MentExhibitionIcon from "@/components/Icon/menu/Icons/MentExhibitionIcon";

const MainNavigation = () => {
  return (
    <div className="fixed bottom-0 flex justify-center border-t border-gray-200 z-50 bg-white w-[375px]">
      <nav className=" flex w-full items-center justify-between bg-white p-4">
        <MenuIcon href="/" iconName="홈">
          <MentHomeIcon href={"/"} />
        </MenuIcon>
        <MenuIcon href="/exhibition" iconName="작품정보">
          <MentExhibitionIcon href={"/exhibition"} />
        </MenuIcon>
        <MenuIcon href="/map" iconName="내주변전시">
          <MenuMapIcon href={"/map"} />
        </MenuIcon>
        <MenuIcon href="/curation" iconName="큐레이터픽">
          <MenuCurationIcon href={"/curation"} />
        </MenuIcon>
        <MenuIcon href="/mypage" iconName="마이페이지">
          <MenuMyPageIcon href={"/mypage"} />
        </MenuIcon>
      </nav>
    </div>
  );
};

export default MainNavigation;
