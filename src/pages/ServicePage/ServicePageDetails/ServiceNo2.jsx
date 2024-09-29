import React from 'react'
import { Box, Typography } from '@mui/material'
import { BG_COLOR, BLUE_COLOR, GRAY_COLOR, ORANGE_COLOR } from '~/theme'
import { List, ListItem } from '@mui/material'

function ServiceNo2() {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <img src="https://animals.sandiegozoo.org/sites/default/files/2016-11/Koi.jpg" style={{ objectFit: 'contain', width: '600px', borderRadius: '26px' }} />
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

          <Box>
            <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 1.7 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              marginTop: '40px'
            }}
          >
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ServiceNo2
