import Image from "next/image";

import { MY_IMAGES } from "@/generated/path/images";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  social: "KAKAO" | "NAVER" | "APPLE" | "GOOGLE" | "FACEBOOK";
}

const SNSLoginButton = ({ social, ...props }: Props) => {
  const { src, alt } = MY_IMAGES.SOCIAL.LOGIN[social];
  return (
    <button {...props}>
      <Image src={src} alt={alt} height={44} width={44} />
    </button>
  );
};

export default SNSLoginButton;
