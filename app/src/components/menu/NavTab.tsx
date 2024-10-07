import React from "react";
import { Link } from "@mui/material";
import { convertToKebabCase } from "../../utils/convertToKebabCase";

interface NavTabsProps {
  links: { label: string; href: string }[];
}

export default function NavTabs({ links }: NavTabsProps) {
  return (
    <div className="nav-tab sticky-top">
      <ul className="container nav-tab-container">
        {links.map((link, index) => {
          console.log(convertToKebabCase(link.label))
          return(
          <li>
            <Link key={index} href={link.href} className={convertToKebabCase(link.label)}>
              {link.label}
            </Link>
          </li>
        )})}
      </ul>
    </div>
  );
}
