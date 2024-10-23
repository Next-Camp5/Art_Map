import MenuIcon from '@/components/Icon/menu/MenuIcon';
import MenuMapIcon from '@/components/Icon/menu/Icons/MenuMapIcon';
import MentHomeIcon from '@/components/Icon/menu/Icons/MenuHomeIcon';
import MenuMyPageIcon from '@/components/Icon/menu/Icons/MenuMyPageIcon';
import MenuCurationIcon from '@/components/Icon/menu/Icons/MenuCurationIcon';
import MentExhibitionIcon from '@/components/Icon/menu/Icons/MentExhibitionIcon';

const MainNavigation = () => {
  return (
    <div className="fixed bottom-0 flex justify-center border-t border-gray-200 z-50 bg-white w-[375px]">
      <nav className=" flex w-full items-center justify-between bg-white p-4">
        <MenuIcon href="/">
          <MentHomeIcon href={'/'} iconName={'홈'} />
        </MenuIcon>
        <MenuIcon href="/exhibition">
          <MentExhibitionIcon href={'/exhibition'} iconName={'작품정보'} />
        </MenuIcon>
        <MenuIcon href="/map">
          <MenuMapIcon href={'/map'} iconName={'내주변전시'} />
        </MenuIcon>
        <MenuIcon href="/curator">
          <MenuCurationIcon href={'/curator'} iconName={'큐레이터픽'} />
        </MenuIcon>
        <MenuIcon href="/mypage">
          <MenuMyPageIcon href={'/mypage'} iconName={'마이페이지'} />
        </MenuIcon>
      </nav>
    </div>
  );
};

export default MainNavigation;
