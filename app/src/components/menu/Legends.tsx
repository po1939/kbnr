import React from 'react';
import { Box, Typography } from '@mui/material';

interface LegendItem {
  icon: string;
  text: string;
}

interface LegendsProps {
  items: LegendItem[];
}

export default function Legends({ items }: LegendsProps) {
  return (
    <Box className="legends" display="flex" alignItems="flex-end">
      {items.map((item, index) => (
        <Box key={index} display="flex" alignItems="flex-end">
          <img src={item.icon} alt={item.text} style={{ marginRight: '0.5rem' }} className='menu-item-icon' />
          <Typography variant="body1">
            {item.text}
          </Typography>
          {index < items.length - 1 && (
            <Typography variant="body1" style={{ margin: '0 0.5rem' }}>
              |
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
