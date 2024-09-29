import React from 'react'
import { Box, Typography } from '@mui/material'
import { BG_COLOR, BLUE_COLOR, GRAY_COLOR, ORANGE_COLOR } from '~/theme'

function WhyUs() {
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start'
            }}
          >
            <Box
              component="img"
              src="src\assets\images\wavy.png"
              alt="Wavy Image"
              sx={{
                width: '60%'
              }}
            />
          </Box>
          <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 1.7 }}>Koi Care Clinic is a unique facility that specializes in providing comprehensive care for koi fish.<br /> Our team of experienced professionals offers a wide range of services, including routine check-ups, disease diagnosis and treatment, pond maintenance, and water quality testing. <br />We are dedicated to helping koi enthusiasts maintain the health and well-being of their beloved fish.</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              marginTop: '40px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '170px',
                height: 'fit-content',
                backgroundColor: BLUE_COLOR,
                borderRadius: '40px',
                // boxShadow: '0px 5px 10px #bebebe',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {/* Text on the left */}
              <Box
                sx={{
                  width: 'calc(170px - 45px)',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'Poppins'
                }}
              >
                Learn More
              </Box>

              {/* Circle with icon on the right */}
              <Box
                sx={{
                  width: '45px',
                  height: '45px',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '3px solid #1d2129',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: 'rotate(-45deg)', transitionDuration: '1.5s' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <img src="https://img.freepik.com/premium-photo/painting-koi-fish-bowl-with-flowers_961875-254698.jpg" style={{ objectFit: 'contain', width: '400px', borderRadius: '26px' }} />

      </Box>
    </div>
  )
}

export default WhyUs
