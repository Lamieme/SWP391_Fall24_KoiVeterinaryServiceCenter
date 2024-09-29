import { Box, Typography } from '@mui/material'
import React from 'react'
import { BLUE_COLOR, ORANGE_COLOR } from '~/theme'

function Introduction() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url("src/assets/images/bg.png")', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontFamily: 'SVN-Konga Pro', fontSize: 100, color: BLUE_COLOR }}>
            Your <span style={{ color: ORANGE_COLOR }}>koi's</span> best
          </Typography>
          <Typography sx={{ fontFamily: 'SVN-Konga Pro', fontSize: 100, color: ORANGE_COLOR, marginTop: '-30px' }}>
            friend
          </Typography>
        </Box>

        <Typography sx={{ textAlign: 'center', fontSize: 14, marginTop: '10px' }}>
          Welcome to Koi Veterinary Service, where we specialize in the health and well-being of your aquatic companions.<br /> Our expert team is dedicated to providing top-notch care for koi, ensuring they thrive in their aquatic environments.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
              Get Started
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
    </div >
  )
}

export default Introduction
