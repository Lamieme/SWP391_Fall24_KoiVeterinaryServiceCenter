import { Box, Typography } from '@mui/material'
import React from 'react'
import { BG_COLOR, BLUE_COLOR, ORANGE_COLOR } from '~/theme'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'

function Question() {
  return (
    <div>
      <Box>
        <Typography
          sx={{
            fontFamily: 'SVN-Konga Pro',
            fontSize: '48px',
            color: BLUE_COLOR,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          Frequently Asked <span style={{ color: ORANGE_COLOR, marginLeft: '8px' }}> Questions</span>
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

        {/* Q&A Box */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Accordion sx={{
            borderRadius: '36px',
            bgcolor: BG_COLOR,
            '& .MuiAccordion-root::before': {
              content: 'none'
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ bgcolor: '#D3EFED', borderRadius: '15px', height: '60px', display: 'flex', alignItems: 'center' }}
            >
              <Typography sx={{ fontWeight: 600, color: BLUE_COLOR, height: '30px', display: 'flex', alignItems: 'center', gap: 0.5 }}>How does<span style={{ color: ORANGE_COLOR }}>Koi Care Clinic </span> work?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#D6EAE8', borderRadius: '15px', mt: 2 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sem elit. Praesent gravida lacinia est ut pharetra. Phasellus porta feugiat nibh vestibulum pharetra. Aliquam sollicitudin elit sit amet nunc vulputate, et sagittis justo consequat. Mauris diam velit, iaculis ultrices posuere in, efficitur in enim. In eu tristique tellus, a iaculis nunc. Fusce mattis sapien in neque euismod, nec pretium eros rhoncus. Morbi at efficitur velit, nec eleifend ex. Nulla convallis ipsum ac purus volutpat viverra. Vivamus porta dictum tellus non iaculis. Aliquam in egestas ligula.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{
            borderRadius: '36px',
            bgcolor: BG_COLOR,
            '&.MuiAccordion-root::before': {
              content: 'none'
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ bgcolor: '#D3EFED', borderRadius: '15px', height: '60px', display: 'flex', alignItems: 'center' }}
            >
              <Typography sx={{ fontWeight: 600, color: BLUE_COLOR, height: '30px', display: 'flex', alignItems: 'center', gap: 0.5 }}>How does<span style={{ color: ORANGE_COLOR }}>Koi Care Clinic </span> work?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#D6EAE8', borderRadius: '15px', mt: 2 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sem elit. Praesent gravida lacinia est ut pharetra. Phasellus porta feugiat nibh vestibulum pharetra. Aliquam sollicitudin elit sit amet nunc vulputate, et sagittis justo consequat. Mauris diam velit, iaculis ultrices posuere in, efficitur in enim. In eu tristique tellus, a iaculis nunc. Fusce mattis sapien in neque euismod, nec pretium eros rhoncus. Morbi at efficitur velit, nec eleifend ex. Nulla convallis ipsum ac purus volutpat viverra. Vivamus porta dictum tellus non iaculis. Aliquam in egestas ligula.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{
            borderRadius: '36px',
            bgcolor: BG_COLOR,
            '&.MuiAccordion-root::before': {
              content: 'none'
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ bgcolor: '#D3EFED', borderRadius: '15px', height: '60px', display: 'flex', alignItems: 'center' }}
            >
              <Typography sx={{ fontWeight: 600, color: BLUE_COLOR, height: '30px', display: 'flex', alignItems: 'center', gap: 0.5 }}>How does<span style={{ color: ORANGE_COLOR }}>Koi Care Clinic </span> work?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#D6EAE8', borderRadius: '15px', mt: 2 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sem elit. Praesent gravida lacinia est ut pharetra. Phasellus porta feugiat nibh vestibulum pharetra. Aliquam sollicitudin elit sit amet nunc vulputate, et sagittis justo consequat. Mauris diam velit, iaculis ultrices posuere in, efficitur in enim. In eu tristique tellus, a iaculis nunc. Fusce mattis sapien in neque euismod, nec pretium eros rhoncus. Morbi at efficitur velit, nec eleifend ex. Nulla convallis ipsum ac purus volutpat viverra. Vivamus porta dictum tellus non iaculis. Aliquam in egestas ligula.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{
            borderRadius: '36px',
            bgcolor: BG_COLOR,
            '&.MuiAccordion-root::before': {
              content: 'none'
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ bgcolor: '#D3EFED', borderRadius: '15px', height: '60px', display: 'flex', alignItems: 'center' }}
            >
              <Typography sx={{ fontWeight: 600, color: BLUE_COLOR, height: '30px', display: 'flex', alignItems: 'center', gap: 0.5 }}>How does<span style={{ color: ORANGE_COLOR }}>Koi Care Clinic </span> work?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#D6EAE8', borderRadius: '15px', mt: 2 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sem elit. Praesent gravida lacinia est ut pharetra. Phasellus porta feugiat nibh vestibulum pharetra. Aliquam sollicitudin elit sit amet nunc vulputate, et sagittis justo consequat. Mauris diam velit, iaculis ultrices posuere in, efficitur in enim. In eu tristique tellus, a iaculis nunc. Fusce mattis sapien in neque euismod, nec pretium eros rhoncus. Morbi at efficitur velit, nec eleifend ex. Nulla convallis ipsum ac purus volutpat viverra. Vivamus porta dictum tellus non iaculis. Aliquam in egestas ligula.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div >
  )
}

export default Question
