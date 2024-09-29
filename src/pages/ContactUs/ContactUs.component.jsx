import React from 'react';
import { Box, Typography } from '@mui/material'
import Introduction from './ContactPageDetails/Introduction';


const ContactUsComponent = () => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} gap={'100px'} px={'30px'}>
        {/* INTRODUCTION */}
        <Introduction />
      </Box>
    </>
  );
}

export default ContactUsComponent;
