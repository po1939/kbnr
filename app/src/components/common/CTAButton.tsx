import React from 'react';
import Button from '@mui/material/Button';

interface CTAButtonProps {
    to: string;
    label?: string | null;
    imgSrc?: string | null;
    // Add more props as needed
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, label, imgSrc }: CTAButtonProps) => {
    return (
        imgSrc ?
        <Button className="cta-btn icon-btn" href={to} variant="contained">
            
            < img src = {imgSrc} />
        </Button>
        :
    <Button className="cta-btn" href={to} variant="contained">{label} </Button>
    );
};

export default CTAButton;
