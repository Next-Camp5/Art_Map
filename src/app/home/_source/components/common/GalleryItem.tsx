import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import StatusBadge from "./StatusBadge";

interface GalleryItemProps {
  href: string;
  title: string;
  imageSrc: StaticImageData;
  altText: string;
  status: string;
  gallery: string;
  date: string;
}

const GalleryItem = ({
  href,
  title,
  imageSrc,
  altText,
  status,
  gallery,
  date,
}: GalleryItemProps) => {
  return (
    <figure className="break-inside-avoid mb-10">
      <Link href={href} aria-label={`${title}으로 이동하기`}>
        <div className="mb-2.5 border border-gray-200">
          <Image
            src={imageSrc}
            alt={altText}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <figcaption className="flex flex-col justify-start items-start gap-1.5">
          <StatusBadge status={status} />
          <div className="flex flex-col justify-start items-start gap-1.5">
            <h3 className="text-base font-bold text-gray-6">{title}</h3>
            <div className="flex flex-col justify-start items-start">
              <p className="text-xs text-gray-4">{gallery}</p>
              <p className="text-xs text-gray-4">{date}</p>
            </div>
          </div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default GalleryItem;
