import koiAboutImg from '~/assets/images/KoiAboutPage.png'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { BLUE_COLOR } from '~/theme'

function Title() {
  return (
    <div>
      <Box sx={{ margin: 0, padding: 0 }}>
        <Typography sx={{ fontFamily: 'SVN-Konga Pro', fontSize: 300, textAlign: 'center', color: BLUE_COLOR }}>ABOUT US</Typography>
      </Box>
    </div>
  )
}

export default Title
