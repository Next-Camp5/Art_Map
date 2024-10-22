const createBgOrBorderMap = (
  colors: typeof colorArray,
  isBorder: boolean
): BgOrBorderMap => {
  return colors.reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: `${
        isBorder
          ? `border-${cur} border border-1 text-${cur} bg-white`
          : `bg-${cur} text-white`
      }`,
    };
  }, {} as BgOrBorderMap);
};

const colorArray = ["gray-3", "point", "primary", "white"] as const;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "XL" | "L" | "M" | "SM" | "NONE";
  children?: React.ReactNode;
  color: (typeof colorArray)[number];
  border: boolean;
}

const SIZE_MAP: { [k in Props["size"]]: string } = {
  XL: "w-[343px] h-[50px] rounded-[5px] text-md font-bold",
  L: "w-[343px] h-[40px] rounded-[5px] text-sm font-bold",
  M: "w-[165px] h-[40px] rounded-[5px] text-sm font-bold",
  SM: "w-[88px] h-[30px] rounded-[15px] text-sm font-bold",
  NONE: "",
};

type BgOrBorderMap = {
  [key in (typeof colorArray)[number]]: string;
};

const BG_COLOR_MAP = createBgOrBorderMap(colorArray, false);

const BORDER_COLOR_MAP = createBgOrBorderMap(colorArray, true);

const Button = ({ size, color, border, children, ...props }: Props) => {
  const className = `${SIZE_MAP[size]} ${
    border ? BORDER_COLOR_MAP[color] : BG_COLOR_MAP[color]
  }`;

  return (
    <button
      {...props}
      className={`flex justify-center items-center ${className} font-bold hover: brightness-110`}
    >
      {children}
    </button>
  );
};

export default Button;
