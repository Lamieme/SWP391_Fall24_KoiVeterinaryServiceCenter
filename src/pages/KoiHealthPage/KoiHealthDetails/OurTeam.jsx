import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { BG_COLOR, BLUE_COLOR, ORANGE_COLOR, ORANGE_PASTEL_COLOR, PURPLE_COLOR, YELLOW_COLOR } from '~/theme'

function OurTeam() {
  return (
    <div>
      <Box sx={{ width: '800px' }}>
        <Typography
          sx={{
            fontFamily: 'SVN-Konga Pro',
            fontSize: '48px',
            color: BLUE_COLOR,
            display: 'flex',
            textAlign: 'left'
          }}
        >
          Who's on our <span style={{ color: ORANGE_COLOR, marginLeft: '8px' }}> care team?</span>
        </Typography>
        <Typography>
          From billing to prescriptions, from referrals to procedures, we know healthcare can be scary and confusing. Our goal is to support you before, during, and after every visit so you feel informed, and confident in your care.
        </Typography>
      </Box>

      {/* Cards */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, marginTop: '50px', flexWrap: 'wrap', marginBottom: '200px' }}>
        <Box sx={{ cursor: 'pointer', position: 'relative', width: 250, height: 250, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent', boxShadow: `14px 10px ${YELLOW_COLOR}` }}>
          <Box sx={{ position: 'relative', width: 250, minWidth: 100, height: 250, top: 10, left: 14, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent' }}>
            <Box display={'flex'} flexDirection={'column'} px={4} py={7} gap={2}>
              <img
                width='100'
                height="100"
                src="src\assets\images\medicine.png"
                alt="Koi care"
              />
            </Box>

          </Box>
          <Box sx={{ marginTop: '40px', width: '300px', color: BLUE_COLOR }}>
            <Typography sx={{ fontWeight: 600, fontSize: 24 }}>
              Care Providers
            </Typography>
            <Typography sx={{ fontSize: 12, paddingTop: '8px' }}>
              Best-in-class integrative care from providers you can trust. Our Care Providers deliver quality medicine tailored to you and your needs.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ cursor: 'pointer', position: 'relative', width: 250, height: 250, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent', boxShadow: `14px 10px ${PURPLE_COLOR}` }}>
          <Box sx={{ position: 'relative', width: 250, minWidth: 100, height: 250, top: 10, left: 14, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent' }}>
            <Box display={'flex'} flexDirection={'column'} px={4} py={7} gap={2}>
              <img
                width='100'
                height="100"
                src="src\assets\images\doctor.png"
                alt="Koi care"
              />
            </Box>
          </Box>
          <Box sx={{ marginTop: '40px', width: '300px', color: BLUE_COLOR }}>
            <Typography sx={{ fontWeight: 600, fontSize: 24 }}>
              Care Providers
            </Typography>
            <Typography sx={{ fontSize: 12, paddingTop: '8px' }}>
              Best-in-class integrative care from providers you can trust. Our Care Providers deliver quality medicine tailored to you and your needs.
            </Typography>
          </Box>

        </Box>
        <Box sx={{ cursor: 'pointer', position: 'relative', width: 250, height: 250, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent', boxShadow: `14px 10px ${ORANGE_PASTEL_COLOR}` }}>
          <Box sx={{ position: 'relative', width: 250, minWidth: 100, height: 250, top: 10, left: 14, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent' }}>
            <Box display={'flex'} flexDirection={'column'} px={4} py={7} gap={2}>
              <img
                width='100'
                height="100"
                src="src\assets\images\vaccination.png"
                alt="Koi care"
              />
            </Box>
          </Box>
          <Box sx={{ marginTop: '40px', width: '300px', color: BLUE_COLOR }}>
            <Typography sx={{ fontWeight: 600, fontSize: 24 }}>
              Care Providers
            </Typography>
            <Typography sx={{ fontSize: 12, paddingTop: '8px' }}>
              Best-in-class integrative care from providers you can trust. Our Care Providers deliver quality medicine tailored to you and your needs.
            </Typography>
          </Box>
        </Box>
      </Box >
    </div>
  )
}

export default OurTeam
