import { Box, Typography } from '@mui/material'
import React from 'react'
import { BLUE_COLOR, GRAY_COLOR, GREEN_COLOR } from '~/theme'

function Stats() {
  return (
    <Box sx={{ display: 'flex', position: 'relative', height: '600px' }}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        sx={{ bgcolor: GREEN_COLOR, borderRadius: '100%', width: '400px', height: '400px', position: 'relative' }}>
        <Box>
          <img src="src\assets\images\badge.png" style={{ width: '70px' }} />
          <Typography sx={{ fontWeight: 700, fontSize: 50, color: BLUE_COLOR, textAlign: 'center' }}>75+</Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 24, color: GRAY_COLOR, textAlign: 'center' }}>Awards</Typography>
        </Box>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        top={'250px'}
        sx={{ bgcolor: GREEN_COLOR, borderRadius: '100%', width: '300px', height: '300px', position: 'relative' }}>
        <Box>
          <img src="src\assets\images\customer.png" style={{ width: '70px' }} />
          <Typography sx={{ fontWeight: 700, fontSize: 40, color: BLUE_COLOR, textAlign: 'center' }}>52k</Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 20, color: GRAY_COLOR, textAlign: 'center' }}>Clients</Typography>
        </Box>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        top={'130px'}
        sx={{ bgcolor: GREEN_COLOR, borderRadius: '100%', width: '300px', height: '300px', position: 'relative' }}>
        <Box>
          <img src="src\assets\images\koi.png" style={{ width: '70px' }} />
          <Typography sx={{ fontWeight: 700, fontSize: 40, color: BLUE_COLOR, textAlign: 'center' }}>22+</Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 20, color: GRAY_COLOR, textAlign: 'center' }}>Veterinarian</Typography>
        </Box>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        top={'150px'}
        sx={{ bgcolor: GREEN_COLOR, borderRadius: '100%', width: '400px', height: '400px', position: 'relative' }}>
        <Box>
          <img src="src\assets\images\shield.png" style={{ width: '60px' }} />
          <Typography sx={{ fontWeight: 700, fontSize: 50, color: BLUE_COLOR, textAlign: 'center' }}>99%</Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 24, color: GRAY_COLOR, textAlign: 'center' }}>Protection</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Stats
