import Link from "next/link";

import { FillIconProps } from "../types/icon";

interface MenuIconProps extends FillIconProps {
  href: string;
  children: React.ReactNode;
}

const MenuIcon = ({ href, children }: MenuIconProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-1 w-14"
    >
      {children}
    </Link>
  );
};

export default MenuIcon;
