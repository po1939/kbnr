import React from "react";
import Button from "@mui/material/Button";

interface CTAButtonProps {
  to: string;
  className?: string;
  label?: string | null;
  alt?: string;
  imgSrc?: string | null;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  to,
  label,
  className,
  imgSrc,
  alt,
}: CTAButtonProps) => {
  return imgSrc ? (
    <Button
      className={`${className} cta-btn icon-btn`}
      href={to}
      variant="contained"
    >
      <img src={imgSrc} alt={alt || label || "cta-button"} />
    </Button>
  ) : (
    <Button
      className="cta-btn"
      href={to}
      variant="contained"
    >
      {label}
    </Button>
  );
};

export default CTAButton;
