import React from 'react'
import { Box, Typography } from '@mui/material'
import { BG_COLOR, BLUE_COLOR, GRAY_COLOR, ORANGE_COLOR } from '~/theme'

function ServiceNo1() {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '600px', borderRadius: '26px' }}>
          <Typography
            sx={{
              fontFamily: 'SVN-Konga Pro',
              fontSize: '48px',
              color: BLUE_COLOR,
              display: 'flex',
              justifyContent: 'start'
            }}
          >
            Why <span style={{ color: ORANGE_COLOR, marginLeft: '8px' }}> Koi Care Clinic?</span>
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 1.7, marginTop: '20px' }}>Koi Care Clinic is a unique facility that specializes in providing comprehensive care for koi fish.<br /> Our team of experienced professionals offers a wide range of services, including routine check-ups, disease diagnosis and treatment, pond maintenance, and water quality testing.</Typography>
        </Box>
        <img src="https://cdn.shopify.com/s/files/1/1083/2612/files/koi2_480x480.jpg?v=1719301650" style={{ objectFit: 'contain', width: '500px', borderRadius: '26px' }} />

      </Box>
    </div>
  )
}

export default ServiceNo1
