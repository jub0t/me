import clsx from "clsx";
import Link from "next/link";

import { GoldBrand } from "../../types";

type BrandProps = {
  brandName: string;
  brandKey: GoldBrand;
  isActive?: boolean;
};

export const Brand = ({ brandName, brandKey, isActive }: BrandProps) => {
  return (
    <li>
      <Link
        href={`/apps/gold-price?brand=${brandKey}`}
        className={clsx(
          "flex h-8 select-none items-center rounded-full px-4 font-medium transition-colors",
          {
            "bg-yellow-600": isActive,
            "hover:bg-slate-700": !isActive,
          }
        )}
      >
        {brandName}
      </Link>
    </li>
  );
};
