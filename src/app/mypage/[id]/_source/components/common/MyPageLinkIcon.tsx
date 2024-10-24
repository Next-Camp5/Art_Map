import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface MyPageLinkIconProps {
  imgSrc: StaticImageData;
  link: string;
  title: string;
}

const MyPageLinkIcon = ({ imgSrc, link, title }: MyPageLinkIconProps) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center w-[100px] h-[100px]"
    >
      <Image src={imgSrc} alt={title} width={50} height={50} />
      <span className="text-sm text-gray-4 font-bold">{title}</span>
    </Link>
  );
};

export default MyPageLinkIcon;
