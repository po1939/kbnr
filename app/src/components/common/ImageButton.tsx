import React, {useRef} from 'react';
import Button from '@mui/material/Button';

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
      ripple.classList.add('show');
      setTimeout(() => ripple.classList.remove('show'), 600);
    }
  };

  return (
    <Button className="img-btn" href={to}>
      <img src = {src} />
      <div className="ripple" ref={rippleRef} />
      <span className="label">{label}</span>
    </Button>
  );
};

export default MyImageButton;
