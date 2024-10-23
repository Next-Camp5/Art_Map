import ExhibitionImage1 from '/public/images/poster3.png';
import ExhibitionImage2 from '/public/images/poster2.png';
import GalleryItem from '@/app/home/_source/components/common/GalleryItem';

// 상수로 미리 정의된 데이터
const EXHIBITION_DATA1 = {
  href: '/exhibition/1',
  title: '컬렉션 : 취향의발견',
  imageSrc: ExhibitionImage1,
  altText: '컬렉션 : 취향의발견 전시 이미지',
  status: '업커밍',
  gallery: '에이갤러리',
  date: '2021.08.01 ~ 2021.09.09',
};

const EXHIBITION_DATA2 = {
  href: '/exhibition/2',
  title: '다른 전시',
  imageSrc: ExhibitionImage2,
  altText: '다른 전시 이미지',
  status: '전시중',
  gallery: '비 갤러리',
  date: '2021.09.10 ~ 2021.10.10',
};

const ExhibitionGallery = () => {
  return (
    <main className="columns-2 px-4 gap-2.5 mt-5 max-w-[375px] pb-[100px]">
      <GalleryItem {...EXHIBITION_DATA1} />
      <GalleryItem {...EXHIBITION_DATA2} />
      <GalleryItem {...EXHIBITION_DATA2} />
      <GalleryItem {...EXHIBITION_DATA1} />
      <GalleryItem {...EXHIBITION_DATA1} />
      <GalleryItem {...EXHIBITION_DATA1} />
      <GalleryItem {...EXHIBITION_DATA2} />
    </main>
  );
};

export default ExhibitionGallery;
