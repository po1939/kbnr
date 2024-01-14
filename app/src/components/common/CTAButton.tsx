import React from 'react';
import Button from '@mui/material/Button';

interface CTAButtonProps {
    to: string;
    label: string;
    // Add more props as needed
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, label }) => {
    return (
        <Button className="cta-btn" href={to} variant="contained">{label}</Button>
    );
};

export default CTAButton;
