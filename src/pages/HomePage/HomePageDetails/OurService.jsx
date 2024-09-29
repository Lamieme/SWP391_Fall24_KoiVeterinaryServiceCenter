import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { BG_COLOR, BLUE_COLOR, ORANGE_COLOR, ORANGE_PASTEL_COLOR, PURPLE_COLOR, YELLOW_COLOR } from '~/theme'


function OurService() {
    return (
        <div>
            {/* Title */}
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
                    Our <span style={{ color: ORANGE_COLOR, marginLeft: '8px' }}> Service</span>
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
                            width: '20%'
                        }}
                    />
                </Box>
            </Box>

            {/* Cards */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, marginTop: '50px', flexWrap: 'wrap' }}>
                <Box sx={{ cursor: 'pointer', position: 'relative', width: 250, height: 250, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent', boxShadow: `14px 10px ${YELLOW_COLOR}` }}>
                    <Box sx={{ position: 'relative', width: 250, minWidth: 100, height: 250, top: 10, left: 14, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent' }}>
                        <Box display={'flex'} flexDirection={'column'} px={4} py={7} gap={2}>
                            <img
                                width='100'
                                height="100"
                                src="src\assets\images\medicine.png"
                                alt="Koi care"
                            />
                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600, color: BLUE_COLOR }}>
                                Koi Care
                            </Typography>
                        </Box>
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
                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600, color: BLUE_COLOR }}>
                                Veterinary
                            </Typography>
                        </Box>
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
                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600, color: BLUE_COLOR }}>
                                Vaccination
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ cursor: 'pointer', position: 'relative', width: 250, height: 250, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: '#C7EEF9', boxShadow: '14px 10px #95E3F9' }}>
                    <Box sx={{ position: 'relative', width: 250, minWidth: 100, height: 250, top: 10, left: 14, borderRadius: '27px', border: `1px solid ${BLUE_COLOR}`, bgcolor: 'transparent' }}>
                        <Box display={'flex'} flexDirection={'column'} px={4} py={7} gap={2}>
                            <img
                                width='100'
                                height="100"
                                src="src\assets\images\gloves.png"
                                alt="Koi care"
                            />
                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600, color: BLUE_COLOR }}>
                                Cleaning
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box >

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '100px' }}>
                <Box sx={{ bgcolor: '#D3EFED', width: '600px', borderRadius: '26px', padding: '50px' }}>
                    <Typography sx={{ fontWeight: 800, fontSize: 30, marginBottom: '10px', color: BLUE_COLOR, textAlign: 'left' }}>Expert Koi Care for Healthy Fish</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 16, lineHeight: 1.7 }}>Koi Care Clinic is a unique facility that specializes in providing comprehensive care for koi fish.<br /> Our team of experienced professionals offers a wide range of services, including routine check-ups, disease diagnosis and treatment, pond maintenance, and water quality testing. <br />We are dedicated to helping koi enthusiasts maintain the health and well-being of their beloved fish. </Typography>
                </Box>
                <img src="https://img.freepik.com/premium-photo/beautiful-painting-three-colorful-koi-fish-are-swimming-pet-generative-ai-illustration_132416-8965.jpg" style={{ objectFit: 'contain', width: '600px', borderRadius: '26px' }} />
            </Box>
        </div >
    )
}

export default OurService
