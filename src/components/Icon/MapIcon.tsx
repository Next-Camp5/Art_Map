import themeConfig from "@/configs/theme";
import BaseIcon from "./BaseIcon";
import { FillIconProps } from "./types/icon";

const MapIcon = ({
  fill = themeConfig.DEFAULT_COLOR,
  ...props
}: FillIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M24.9998 4.16699C15.8103 4.16699 8.33318 11.6441 8.33318 20.8232C8.27276 34.2503 24.3665 45.3837 24.9998 45.8337C24.9998 45.8337 41.7269 34.2503 41.6665 20.8337C41.6665 11.6441 34.1894 4.16699 24.9998 4.16699ZM24.9998 29.167C20.3957 29.167 16.6665 25.4378 16.6665 20.8337C16.6665 16.2295 20.3957 12.5003 24.9998 12.5003C29.604 12.5003 33.3332 16.2295 33.3332 20.8337C33.3332 25.4378 29.604 29.167 24.9998 29.167Z"
        className={`fill-${fill}`}
      />
    </BaseIcon>
  );
};

export default MapIcon;
