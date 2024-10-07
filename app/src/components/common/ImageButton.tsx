import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { HashLink } from "react-router-hash-link";

interface ImageButtonProps {
  src: string;
  to: string;
  label: string;
}

const MyImageButton: React.FC<ImageButtonProps> = ({ src, to, label }) => {
  const rippleRef = useRef<HTMLDivElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const ripple = rippleRef.current;
    if (ripple) {
      const rect = ripple.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add("show");
      setTimeout(() => ripple.classList.remove("show"), 600);
    }
  };

  const scrollWithOffset = (el: HTMLElement) => {
    const yOffset = -230; // Adjust this value to match your sticky navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <HashLink smooth className="img-btn" to={to} scroll={scrollWithOffset}>
      <Button className="p-0">
        <img src={src} />
        <div className="image-overlay"></div>
        <div className="ripple" ref={rippleRef} />
        <span className="label">{label}</span>
      </Button>
    </HashLink>
  );
};

export default MyImageButton;
