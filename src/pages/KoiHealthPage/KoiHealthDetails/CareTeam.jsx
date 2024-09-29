import { Box } from '@mui/material'
import React from 'react'

function CareTeam() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url("https://cdn.sanity.io/images/8qqycr4y/production/281fb4b8f15ac0d8aab0e54cfa991205d7e33367-4800x2968.png?w=2400&h=1484&fit=crop&fm=webp")',
          backgroundSize: 'contain', // Shrinks the image to fit within the box without cutting it off
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '20px',
        }}
      />

    </div>
  )
}

export default CareTeam
