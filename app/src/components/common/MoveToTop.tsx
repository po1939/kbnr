import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const MoveToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000', // Customize button color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {isVisible && (
        <Fab
          color="primary"
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={styles.fabButton}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </ThemeProvider>
  );
};

const styles = {
  fabButton: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 1000,
  },
};

export default MoveToTop;
