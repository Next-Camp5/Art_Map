import Link from "next/link";

import Profile from "../common/profile/Profile";
import artistThumbnail from "@/public/images/profile.png";

const CurrentArtistsSection = () => (
  <section className="flex flex-col gap-5 px-4 mb-[50px]">
    <h2 className="text-lg font-bold text-gray-6">현재 전시 중인 작가</h2>
    <div className="flex">
      <Link
        href="/artist/detail"
        className="flex flex-col items-center gap-2.5"
      >
        <Profile size="L" imageSrc={artistThumbnail} />
        <span className="text-sm text-gray-7">{"홍길동"}</span>
      </Link>
    </div>
  </section>
);

export default CurrentArtistsSection;
