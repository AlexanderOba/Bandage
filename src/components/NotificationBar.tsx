import React from 'react';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import Box from '@mui/material/Box';


interface NotificationBarProps {
  message: string;
  color: string;
  icon: React.ReactNode;
}

interface TransitionDownProps extends SlideProps {
  direction: 'left' | 'right' | 'up' | 'down';
}

const TransitionDown: React.FC<TransitionDownProps> = ({ direction, ...props }) => {
  return <Slide direction={direction} {...props} />;
};

const NotificationBar: React.FC<NotificationBarProps> = ({ message, color, icon }) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom' as 'bottom' | 'top',
    horizontal: 'right' as 'center' | 'left' | 'right',
  });

  const { vertical, horizontal, open } = state;

  React.useEffect(() => {
    if (message) {
      setState((prevState) => ({
        ...prevState,
        open: true,
      }));
      const timeout = setTimeout(() => {
        handleClose();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  return (
    <Box sx={{ background: color, color: "#fff" }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        TransitionComponent={(props) => <TransitionDown {...props} direction="left" />} // Specify direction here
        key={vertical + horizontal}
        onClose={handleClose}
      >
        <Alert icon={false} sx={{ minWidth: '300px', background: color, color: "#fff", display: "flex" }}>
          <div className='flex text-[14px]'>
            {icon}
            {message}
          </div>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NotificationBar;