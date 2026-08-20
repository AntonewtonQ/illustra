import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  inverse?: boolean;
  markOnly?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  className,
  inverse = false,
  markOnly = false,
  priority = false,
}: BrandLogoProps) {
  const src = markOnly
    ? inverse
      ? "/brand/illustra-mark-inverse.svg"
      : "/brand/illustra-mark.svg"
    : inverse
      ? "/brand/illustra-logo-inverse.svg"
      : "/brand/illustra-logo.svg";

  return (
    <Image
      src={src}
      alt="Illustra"
      width={markOnly ? 48 : 264}
      height={72}
      priority={priority}
      className={cn(
        "h-auto object-contain object-left",
        markOnly ? "w-6" : "w-32 sm:w-36",
        className
      )}
    />
  );
}
