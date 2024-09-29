import CopyrightIcon from '@mui/icons-material/Copyright'
import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { BG_COLOR, BLUE_COLOR } from '~/theme'

function Footer() {
  return (
    <div>
      <Divider />
      <Box sx={{
        backgroundColor: BG_COLOR,
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          color: BLUE_COLOR,
          py: '40px'
        }}>

          <Box sx={{
            maxWidth: '300px'
          }}>
            <Typography sx={{
              textTransform: 'uppercase',
              fontWeight: '700',
              fontSize: '18px'
            }}>
              Koi Care Clinic
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, laudantium harum! Nam aperiam assumenda molestiae nobis aliquid sequi maxime
            </Typography>

          </Box>

          <Box sx={{
          }}>
            <Typography sx={{
              fontWeight: '700',
              fontSize: '18px'
            }}>
              Services
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Koi Care
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Veterinary
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Vaccination
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Cleaning
            </Typography>
          </Box>

          <Box sx={{
          }}>
            <Typography sx={{
              fontWeight: '700',
              fontSize: '18px'
            }}>
              Community
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              My Account
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Login/ Register
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Request Appointment
            </Typography>
          </Box>

          <Box sx={{
          }}>
            <Typography sx={{
              fontWeight: '700',
              fontSize: '18px'
            }}>
              Platform
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Privacy Policy
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Terms Of Use
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              FAQ
            </Typography>

            <Typography sx={{ lineHeight: '2' }}>
              Contact
            </Typography>
          </Box>
        </Box >

        <Divider />
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: BLUE_COLOR
        }}>
          <Divider style={{
            borderWidth: '1px',
            opacity: '100%',
            color: BLUE_COLOR
          }} />

          <CopyrightIcon fontSize="sm" />
          <Typography sx={{
            fontWeight: '300',
            fontSize: '15px',
            padding: '20px 3px',
            color: BLUE_COLOR
          }}>
            Copyright Rimel 2022. All right reserved
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
