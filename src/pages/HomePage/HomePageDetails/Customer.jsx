import { Box, Typography } from '@mui/material'
import React from 'react'
import { BLUE_COLOR, ORANGE_COLOR } from '~/theme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GradeIcon from '@mui/icons-material/Grade'

function Customer() {
  return (
    <div>
      <Box sx={{ bgcolor: '#D3EFED', padding: '50px 0px 50px 0px', borderRadius: '14px' }}>
        <Typography
          sx={{
            fontFamily: 'SVN-Konga Pro',
            fontSize: '48px',
            color: BLUE_COLOR,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          What <span style={{ color: ORANGE_COLOR, marginLeft: '8px' }}> Customer Says</span>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            component="img"
            src="src\assets\images\wavy.png"
            alt="Wavy Image"
            sx={{
              width: '40%'
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <img src='src\assets\images\OrangeLine.png' style={{ width: '5px', height: '320px' }} />
          <Box sx={{ width: '600px', borderRadius: '26px', padding: '0px 50px' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 2 }}>
                I had a fantastic experience at Koi Care Clinic! The staff was friendly and knowledgeable, and they explained every step of my koi’s treatment clearly. The follow-up care really showed how much they care about their clients. My only suggestion would be to offer weekend appointments for added convenience. Highly recommend this clinic for any koi care!
              </Typography>
              <Box sx={{ display: 'flex', gap: 5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 24 }}>Sarah Thompson</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <GradeIcon sx={{ color: '#F3A230', fontSize: 24 }} />
                  <Typography sx={{ fontWeight: 700, fontSize: 24 }}>5.0</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontWeight: 400, fontSize: 16 }}>Marketing Manager</Typography>


              <Box sx={{ display: 'flex', gap: 2, margin: '20px 0px 20px 0px', color: BLUE_COLOR }}>
                <ArrowBackIcon />
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Box>
          <Box>
            <img
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewpersonaltraining-697509.jpg&fm=jpg"
              style={{
                objectFit: 'cover',
                width: '300px',
                height: '300px',
                borderRadius: '26px'
              }}
            />
          </Box>
        </Box>
      </Box>
    </div >
  )
}

export default Customer
