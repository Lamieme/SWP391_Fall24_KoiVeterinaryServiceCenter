import { Box, Typography } from '@mui/material'
import React from 'react'
import { BLUE_COLOR, ORANGE_COLOR } from '~/theme'

function SatisfactionGuaranteed() {
  return (
    <div >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
        <Box
          component="img"
          src="https://img.freepik.com/premium-photo/beautiful-painting-three-colorful-koi-fish-are-swimming-pet-generative-ai-illustration_132416-8965.jpg"
          alt="Koi Fish Image"
          sx={{
            objectFit: 'contain',
            width: '600px',
            borderRadius: '26px'
          }}
        />
        <Box sx={{ width: '600px', borderRadius: '26px' }}>
          <Box sx={{ width: '600px', borderRadius: '26px' }}>
            <Typography
              sx={{
                fontFamily: 'SVN-Konga Pro',
                fontSize: '48px',
                color: BLUE_COLOR,
                justifyContent: 'start'
              }}
            >
              <span style={{ color: ORANGE_COLOR }}>Satisfaction </span>
              Guaranteed
            </Typography>

            <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 1.7 }}>
              Koi Care Clinic is a unique facility that specializes in providing comprehensive care for koi fish.
              <br />
              Our team of experienced professionals offers a wide range of services, including routine check-ups, disease diagnosis and treatment, pond maintenance, and water quality testing.
              <br />
              We are dedicated to helping koi enthusiasts maintain the health and well-being of their beloved fish.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div >
  )
}

export default SatisfactionGuaranteed
