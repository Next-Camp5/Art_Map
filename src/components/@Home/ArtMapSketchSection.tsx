import Image from "next/image";

import VideoThumbnail from "@/public/images/video.png";

const ArtMapSketchSection = () => (
  <section className="flex flex-col gap-5 px-4 mb-[50px]">
    <h2 className="text-lg font-bold text-gray-6">아트맵 현장스케치</h2>
    <Image src={VideoThumbnail} alt={`전시 이미지`} width={325} height={180} />
  </section>
);

export default ArtMapSketchSection;
