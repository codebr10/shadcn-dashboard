"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { CustomLinksProps } from "@/types";

const CustomLink = ({ href, children, name }: CustomLinksProps) => {
  const pathName = usePathname();

  const isActive = href === "/" ? pathName === "/" : pathName.startsWith(href);

  return (
    <Button
      asChild
      className={`${isActive ? "bg-gray-800" : "bg-gray-400"} w-full flex items-center justify-center gap-3 mb-4 text-gray-100`}
    >
      <Link href={href} aria-label={name}>
        {children}
      </Link>
    </Button>
  );
};

export default CustomLink;
