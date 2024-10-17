import Image from "next/image";

import { MY_IMAGES } from "@/generated/path/images";

interface Props {
  social: "KAKAO" | "NAVER" | "INSTAGRAM" | "HOMEPAGE" | "FACEBOOK";
  link: string;
}

const SNSLinkButton = ({ social, link, ...props }: Props) => {
  const { src, alt } = MY_IMAGES.SOCIAL.LINK[social];

  link = link.startsWith("http") ? link : `https://${link}`;

  return (
    <a href={link} target="_blank">
      <button {...props}>
        <Image src={src} alt={alt} height={40} width={40} />
      </button>
    </a>
  );
};

export default SNSLinkButton;
