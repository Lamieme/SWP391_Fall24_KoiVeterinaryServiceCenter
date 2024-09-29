import React from 'react'
import { Box, Typography } from '@mui/material'
import { BG_COLOR, BLUE_COLOR, GRAY_COLOR, ORANGE_COLOR } from '~/theme'
import { List, ListItem } from '@mui/material'


function ConsultVet() {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <img src="src\assets\images\vet.jpg" style={{ objectFit: 'contain', width: '400px', borderRadius: '26px' }} />
        </Box>
        <Box sx={{ width: '600px', borderRadius: '26px', padding: '0px 50px 0px 50px' }}>
          <Typography
            sx={{
              fontFamily: 'SVN-Konga Pro',
              fontSize: '48px',
              color: BLUE_COLOR,
              display: 'flex',
              justifyContent: 'start'
            }}
          >
            Consult a <span style={{ color: ORANGE_COLOR, marginLeft: '8px' }}>Veterinarian</span>
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
                width: '80%'
              }}
            />
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 1.7 }}>With years of experience in aquatic animal health, our veterinarian is well-equipped to diagnose and treat various koi ailments.</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 1.7 }}>
              <ul>
                <li>Regular check-ups can help prevent costly treatments in the long run.</li>
                <li>Early detection and treatment can significantly improve your koi's chances of recovery.</li>
                <li>A veterinarian can help you create a healthy environment for your koi to thrive.</li>
              </ul>
            </Typography>
          </Box>

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
                width: '300px',
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
                  width: 'calc(350px - 45px)',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'Poppins'
                }}
              >
                Request Appointment
              </Box>

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
                style={{ transform: 'rotate(-45deg)', transitionDuration: '1.5s', color: '#fff', marginRight: '40px' }}
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

export default ConsultVet
