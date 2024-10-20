import Link from "next/link";

import { FillIconProps } from "../types/icon";

interface MenuIconProps extends FillIconProps {
  href: string;
  iconName: string;
}

const MenuIcon = ({ href, iconName, children }: MenuIconProps) => {
  return (
    <Link
      href={href}
      aria-label={iconName}
      className="flex flex-col items-center justify-center gap-1 w-14"
    >
      {children}
      <p className="text-xs font-medium">{iconName}</p>
    </Link>
  );
};

export default MenuIcon;
