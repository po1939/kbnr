import React from 'react';
import { Link } from '@mui/material';

interface NavTabsProps {
  links: { label: string; href: string }[];
}

export default function NavTabs({ links }: NavTabsProps) {
  return (
    <div className="nav-tab sticky-top">
      <div className="container nav-tab-container">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.label}
          </Link>
          
        ))}
        </div>
    </div>
  );
}
