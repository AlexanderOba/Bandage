import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { Alert } from '@mui/material';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';

function TransitionDown(props) {
  return <Slide {...props} direction="left" />;
}

export default function NotificationBar({ message, color, icon }) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
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
        TransitionComponent={TransitionDown}
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
}