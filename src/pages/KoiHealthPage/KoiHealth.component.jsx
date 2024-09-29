/* eslint-disable indent */
import { Box } from '@mui/material'
import Introduction from './KoiHealthDetails/Introduction'
import OurTeam from './KoiHealthDetails/OurTeam'
import Feedback from '../HomePage/HomePageDetails/Feedback'
import CareTeam from './KoiHealthDetails/CareTeam'

const KoiHealthComponent = () => {
  return (
    <div>
      <Box display={'flex'} flexDirection={'column'} gap={'100px'} px={'30px'}>
        {/* INTRODUCTION */}
        <Introduction />
        {/* CARE CYCLE */}
        <CareTeam />
        {/* OUR TEAM */}
        <OurTeam />
        <Feedback />
      </Box>
    </div>
  )
}

export default KoiHealthComponent
