import React from 'react';

import BaseIcon from './BaseIcon';

import themeConfig from '@/configs/theme';
import { FillAndStrokeIconProps } from './types/icon';

const ShareIcon = ({
  stroke = themeConfig.DEFAULT_COLOR,
  fill = themeConfig.DEFAULT_COLOR,
  ...props
}: FillAndStrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M19.2098 16.6369C18.5922 16.293 17.8716 16.182 17.179 16.3242C16.4865 16.4664 15.868 16.8524 15.4358 17.4119L8.32483 13.4919C8.48513 13.0337 8.53147 12.5433 8.45987 12.0632C8.38826 11.583 8.20086 11.1275 7.91383 10.7359L15.5818 6.39195C16.0592 6.9941 16.7455 7.39469 17.5045 7.51419C18.2635 7.63369 19.0398 7.46336 19.679 7.037C20.3183 6.61065 20.7738 5.95948 20.9551 5.2128C21.1364 4.46612 21.0303 3.67854 20.6578 3.00649C20.2853 2.33443 19.6737 1.82706 18.9444 1.58513C18.2151 1.3432 17.4214 1.3844 16.7211 1.70056C16.0208 2.01672 15.465 2.5847 15.1641 3.29172C14.8631 3.99873 14.8392 4.79306 15.0968 5.51695L7.15083 10.017C7.08183 9.97195 7.02183 9.91695 6.95083 9.87795C6.44988 9.59301 5.87767 9.45784 5.30217 9.48847C4.72666 9.51909 4.17204 9.71423 3.70416 10.0507C3.23628 10.3872 2.87479 10.8509 2.66262 11.3868C2.45046 11.9226 2.39654 12.5081 2.50726 13.0737C2.61798 13.6392 2.88868 14.1612 3.28723 14.5775C3.68578 14.9937 4.19543 15.2869 4.75566 15.4221C5.31588 15.5574 5.90315 15.529 6.44772 15.3403C6.99229 15.1517 7.4713 14.8107 7.82783 14.3579L14.9388 18.278C14.7501 18.8182 14.7198 19.4012 14.8516 19.9581C14.9834 20.515 15.2717 21.0226 15.6826 21.421C16.0935 21.8194 16.6097 22.092 17.1704 22.2066C17.7311 22.3211 18.3129 22.2729 18.8471 22.0677C19.3813 21.8624 19.8456 21.5086 20.1853 21.048C20.525 20.5874 20.7259 20.0393 20.7642 19.4683C20.8026 18.8973 20.6768 18.3272 20.4017 17.8254C20.1267 17.3235 19.7138 16.9108 19.2118 16.6359L19.2098 16.6369ZM16.1548 3.53694C16.3458 3.19052 16.6352 2.90851 16.9864 2.72656C17.3377 2.54462 17.735 2.47092 18.1281 2.51477C18.5212 2.55863 18.8925 2.71807 19.195 2.97295C19.4975 3.22782 19.7176 3.56667 19.8276 3.94666C19.9375 4.32664 19.9323 4.73068 19.8126 5.1077C19.6928 5.48471 19.464 5.81776 19.155 6.06473C18.846 6.3117 18.4708 6.4615 18.0766 6.49518C17.6825 6.52886 17.2872 6.44492 16.9408 6.25395C16.7106 6.12716 16.5075 5.95622 16.3434 5.7509C16.1792 5.54559 16.0572 5.30992 15.9842 5.05739C15.9112 4.80486 15.8887 4.54041 15.9179 4.27918C15.9472 4.01794 16.0277 3.76504 16.1548 3.53494V3.53694ZM5.49783 14.5089C5.05938 14.5085 4.63323 14.3639 4.28497 14.0975C3.93671 13.8312 3.68563 13.4577 3.57037 13.0347C3.45511 12.6116 3.48206 12.1625 3.64708 11.7562C3.81209 11.35 4.10603 11.0093 4.48364 10.7865C4.86125 10.5636 5.30161 10.4711 5.73698 10.523C6.17235 10.575 6.57858 10.7686 6.89317 11.074C7.20776 11.3794 7.41327 11.7797 7.47807 12.2133C7.54287 12.647 7.46338 13.0899 7.25183 13.474C7.0787 13.7874 6.82461 14.0486 6.51608 14.2303C6.20755 14.412 5.85589 14.5075 5.49783 14.5069V14.5089ZM19.5128 20.232C19.3219 20.5784 19.0325 20.8604 18.6812 21.0423C18.33 21.2243 17.9327 21.298 17.5396 21.2541C17.1465 21.2103 16.7752 21.0508 16.4727 20.796C16.1701 20.5411 15.95 20.2022 15.8401 19.8223C15.7302 19.4423 15.7354 19.0382 15.8551 18.6612C15.9748 18.2842 16.2036 17.9511 16.5126 17.7042C16.8216 17.4572 17.1969 17.3074 17.591 17.2737C17.9851 17.24 18.3804 17.324 18.7268 17.515C19.1908 17.771 19.5342 18.2008 19.6816 18.7098C19.8289 19.2189 19.7683 19.7656 19.5128 20.23V20.232Z"
        className={`fill-${fill} stroke-${stroke}`}
        stroke-width="0.5"
      />
    </BaseIcon>
  );
};

export default ShareIcon;
