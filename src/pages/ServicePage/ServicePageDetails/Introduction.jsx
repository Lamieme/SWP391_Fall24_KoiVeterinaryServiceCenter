import { Typography } from '@mui/material'
import React from 'react'
import { BLUE_COLOR, ORANGE_COLOR } from '~/theme'

function Introduction() {
  return (
    <div>
      <Typography sx={{ fontFamily: 'SVN-Konga Pro', fontSize: 120, textAlign: 'center', color: BLUE_COLOR }}>Our Medical Services</Typography>
      <Typography sx={{ textAlign: 'center', fontSize: 40, marginTop: '10px', fontWeight: 700 }}>
        You deserve <span style={{ color: ORANGE_COLOR }} >support,</span> not silos
      </Typography>
      <Typography sx={{ textAlign: 'center', fontSize: 14, marginTop: '10px' }}>
        Complete. Connected. Compassionate. At Tia, we care for the whole you with a team of<br /> providers working together to help you achieve optimal health, on your terms.
      </Typography>
    </div>
  )
}

export default Introduction
