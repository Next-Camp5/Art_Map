import Image from "next/image";

import Profile from "@/components/common/profile/Profile";
import Link from "next/link";

const Post = () => {
  return (
    <Link href={"/curator/post/1"}>
      <div className="flex items-center mb-[20px] ">
        <div className=" shrink-0 mr-[10px]">
          <Image
            src={"/social/login/kakao.png"}
            alt="이미지"
            width={80}
            height={80}
            className=" h-[80px] w-[80px]"
          ></Image>
        </div>
        <div className=" flex-grow">
          <span className="text-md font-bold">상처가 어쩌구...</span>
          <p className=" text-sm] mb-[5px]">투어를 다녀와서</p>
          <div className=" flex ">
            <span className="text-sm text-gray-4 mr-[5px]">
              2021.08.20 | by. 이름
            </span>
            <Profile size="SM" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
