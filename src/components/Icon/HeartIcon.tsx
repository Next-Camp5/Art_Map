import themeConfig from "@/configs/theme";
import BaseIcon from "./BaseIcon";

import { FillAndStrokeIconProps } from "./types/icon";

const HeartIcon = ({
  stroke = themeConfig.DEFAULT_COLOR,
  fill = themeConfig.DEFAULT_COLOR,
  ...props
}: FillAndStrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M12.4795 21.6269C12.4035 21.6271 12.3298 21.6014 12.2705 21.5539C11.9525 21.2989 4.4795 15.2719 3.3625 11.7049C3.06174 10.8787 2.94494 9.9968 3.02025 9.12077C3.09555 8.24474 3.36115 7.39569 3.79849 6.63292C4.14224 6.05157 4.61783 5.55919 5.18689 5.19545C5.75595 4.83171 6.40254 4.60681 7.07449 4.53892C8.10495 4.44143 9.14317 4.61031 10.0896 5.02934C11.0361 5.44837 11.859 6.10349 12.4795 6.93193C13.0999 6.10334 13.9228 5.44811 14.8693 5.02907C15.8157 4.61002 16.854 4.44123 17.8845 4.53892C18.5565 4.60681 19.203 4.83171 19.7721 5.19545C20.3412 5.55919 20.8167 6.05157 21.1605 6.63292C21.5987 7.39856 21.8643 8.25079 21.9386 9.12986C22.0129 10.0089 21.8941 10.8936 21.5905 11.7219C20.4775 15.2719 13.0055 21.2989 12.6905 21.5539C12.6307 21.6018 12.5561 21.6276 12.4795 21.6269V21.6269Z"
        className={`fill-${fill} stroke-${stroke}`}
        stroke-width="1.5"
      />
    </BaseIcon>
  );
};

export default HeartIcon;