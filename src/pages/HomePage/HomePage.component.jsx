import { Box, Typography } from '@mui/material'
import React from 'react'
import Introduction from './HomePageDetails/Introduction'
import OurService from './HomePageDetails/OurService'
import WhyUs from './HomePageDetails/WhyUs'
import ConsultVet from './HomePageDetails/ConsultVet'
import Stats from './HomePageDetails/Stats'
import Question from './HomePageDetails/Question'
import Customer from './HomePageDetails/Customer'
import Feedback from './HomePageDetails/Feedback'

const HomePageComponent = () => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} gap={'100px'} px={'30px'}>
        {/* INTRODUCTION */}
        <Introduction />
        {/* OUR SERVICES */}
        <OurService />
        {/* WHY KOI CARE CLINIC */}
        <WhyUs />
        {/* CONSULT A VETERINARIAN */}
        <ConsultVet />
        {/* STATS */}
        <Stats />
        {/* QUESTIONS */}
        <Question />
        {/* HOW CUSTOMER FEELS */}
        <Customer />
        {/* FEEDBACK */}
        <Feedback />
      </Box>
    </>
  )
}

export default HomePageComponent
