import { Box, Typography } from '@mui/material'
import React from 'react'
import { BLACK_COLOR, BLUE_COLOR, INPUT_FIELD_COLOR } from '~/theme'
import TextField from '@mui/material/TextField'

function Introduction() {
  return (
    <div>
      <Box sx={{ margin: 0, padding: 0 }}>
        <Typography sx={{ fontFamily: 'SVN-Konga Pro', fontSize: 64, textAlign: 'left', color: BLUE_COLOR }}>
          Love to hear from you,
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ fontFamily: 'SVN-Konga Pro', fontSize: 64, textAlign: 'left', color: BLUE_COLOR }}>
            Get in touch
          </Typography>
          <img src='src\assets\images\Koi 3.png' style={{ width: '150px' }} />
        </Box>
        <Box>

          <Box sx={{ display: 'flex', marginTop: '40px', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: 20 }}>First name</Typography>
              <TextField
                id="outlined-basic"
                placeholder='Enter your first name'
                variant="outlined"
                sx={{
                  width: '600px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '15px',
                    borderColor: BLUE_COLOR,
                    height: '60px',
                    marginTop: '15px',
                    '&.Mui-focused fieldset': {
                      borderColor: BLUE_COLOR
                    }
                  },
                  '& input': {
                    backgroundColor: INPUT_FIELD_COLOR,
                    padding: '20px 15px',
                    fontSize: '16px',
                    borderRadius: '15px'
                  }
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Last name</Typography>
              <TextField
                id="outlined-basic"
                placeholder='Enter your last name'
                variant="outlined"
                sx={{
                  width: '600px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '15px',
                    borderColor: BLUE_COLOR,
                    height: '60px',
                    marginTop: '15px',
                    '&.Mui-focused fieldset': {
                      borderColor: BLUE_COLOR
                    }
                  },
                  '& input': {
                    backgroundColor: INPUT_FIELD_COLOR,
                    padding: '20px 15px',
                    fontSize: '16px',
                    borderRadius: '15px'
                  }
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', marginTop: '40px', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Phone number</Typography>
              <TextField
                id="outlined-basic"
                placeholder='Enter your phone number'
                variant="outlined"
                sx={{
                  width: '600px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '15px',
                    borderColor: BLUE_COLOR,
                    height: '60px',
                    marginTop: '15px',
                    '&.Mui-focused fieldset': {
                      borderColor: BLUE_COLOR
                    }
                  },
                  '& input': {
                    backgroundColor: INPUT_FIELD_COLOR,
                    padding: '20px 15px',
                    fontSize: '16px',
                    borderRadius: '15px'
                  }
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Email</Typography>
              <TextField
                id="outlined-basic"
                placeholder='Enter your email'
                variant="outlined"
                sx={{
                  width: '600px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '15px',
                    borderColor: BLUE_COLOR,
                    height: '60px',
                    marginTop: '15px',
                    '&.Mui-focused fieldset': {
                      borderColor: BLUE_COLOR
                    }
                  },
                  '& input': {
                    backgroundColor: INPUT_FIELD_COLOR,
                    padding: '20px 15px',
                    fontSize: '16px',
                    borderRadius: '15px'
                  }
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'block', marginTop: '40px', marginBottom: '60px' }}>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Message</Typography>
              <TextField
                id="outlined-basic"
                placeholder='Enter your message'
                variant="outlined"
                multiline
                maxRows={4}
                rows={4}
                sx={{
                  maxWidth: '100%',
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '15px',
                    borderColor: BLUE_COLOR,
                    marginTop: '15px',
                    '&.Mui-focused fieldset': {
                      borderColor: BLUE_COLOR
                    }
                  },
                  '& textarea': {
                    backgroundColor: INPUT_FIELD_COLOR,
                    padding: '20px 15px',
                    fontSize: '16px',
                    borderRadius: '15px'
                  }
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              marginTop: '40px',
              marginBottom: '60px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '250px',
                height: 'fit-content',
                backgroundColor: BLUE_COLOR,
                borderRadius: '40px',
                // boxShadow: '0px 5px 10px #bebebe',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {/* Text on the left */}
              <Box
                sx={{
                  width: 'calc(250px - 45px)',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'Poppins'
                }}
              >
                Just Send
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

export default Introduction
