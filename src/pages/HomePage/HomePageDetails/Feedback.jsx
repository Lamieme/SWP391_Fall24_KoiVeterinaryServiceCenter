import { Box, Typography } from '@mui/material'
import React from 'react'
import { BLUE_COLOR, ORANGE_COLOR } from '~/theme'
import { TextField, Button, InputAdornment } from '@mui/material'
import { styled } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


const CustomInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    borderColor: BLUE_COLOR,
    height: '50px',
    '&.Mui-focused fieldset': {
      borderColor: BLUE_COLOR
    }
  },
  '& input': {
    padding: '10px 15px',
    fontSize: '16px'
  }
})

const CustomButton = styled(Button)({
  backgroundColor: BLUE_COLOR,
  borderRadius: '30px',
  color: 'white',
  height: '50px',
  padding: '0 30px',
  textTransform: 'none',
  fontSize: '16px'
})

function Feedback() {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <img src='src/assets/images/KoiAboutPage.png' style={{ width: '300px' }} alt="Koi About Page" />
        <Box sx={{ width: '600px', borderRadius: '26px', padding: '0px 50px 0px 50px' }}>
          <Typography
            sx={{
              fontFamily: 'SVN-Konga Pro',
              fontSize: '48px',
              color: BLUE_COLOR,
              display: 'block',
              textAlign: 'left'
            }}
          >
            We would <span style={{ color: ORANGE_COLOR, marginLeft: '8px' }}>love</span> to hear from you
          </Typography>


          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontWeight: 400, fontSize: 18, lineHeight: 1.7 }}>
              If you have any questions, concerns, or problems, please don't hesitate to reach out to us by writing on our page.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <CustomInput
                variant="outlined"
                placeholder="Enter Your Email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ pr: 0 }}>
                      <CustomButton

                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{left: 13}}
                      >
                        Subscribe
                      </CustomButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div >
  )
}

export default Feedback
