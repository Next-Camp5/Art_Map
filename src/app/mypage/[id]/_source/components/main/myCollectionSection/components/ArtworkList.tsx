import Image from 'next/image';

interface ArtworkListProps {
  image: string;
}

const ArtworkList = ({ image }: ArtworkListProps) => {
  return (
    <figure className="max-w-[110px] max-h-[110px]">
      <Image src={image} alt="" />
      <figcaption>
        <p className="sr-only">작품명</p>
        <p className="sr-only">작가명</p>
      </figcaption>
    </figure>
  );
};

export default ArtworkList;
