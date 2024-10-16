import Image from "next/image";
import artistThumbnail from "@/public/images/profile.png";

const CurrentArtistsSection = () => (
  <section className="flex flex-col gap-5 px-4 mb-[50px]">
    <h2 className="text-lg font-bold text-gray-6">현재 전시 중인 작가</h2>
    <div className="flex">
      <div className="flex flex-col items-center gap-2.5">
        <Image
          src={artistThumbnail}
          alt={"작가 이름"}
          width={70}
          height={70}
          className="rounded-full"
        />
        <span className="text-sm text-gray-7">{"홍길동"}</span>
      </div>
    </div>
  </section>
);

export default CurrentArtistsSection;
