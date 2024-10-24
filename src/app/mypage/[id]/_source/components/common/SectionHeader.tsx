import Link from 'next/link';
import Image from 'next/image';

import ArrowRightIcon from '/public/svgs/SingleArrowRight.svg';

interface SectionHeaderProps {
  title: string;
  link: string;
}

const SectionHeader = ({ title, link }: SectionHeaderProps) => {
  return (
    <Link href={link} className="flex items-center justify-between py-5">
      <h2 className="text-lg font-bold text-gray-6">{title}</h2>
      <Image
        src={ArrowRightIcon}
        alt={`${title}로 이동`}
        width={24}
        height={24}
      />
    </Link>
  );
};

export default SectionHeader;
