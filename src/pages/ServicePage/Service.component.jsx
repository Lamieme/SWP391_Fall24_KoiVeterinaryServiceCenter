/* eslint-disable indent */
import { Box } from '@mui/material'
import Introduction from './ServicePageDetails/Introduction'
import ServiceNo1 from './ServicePageDetails/ServiceNo1'
import ServiceNo2 from './ServicePageDetails/ServiceNo2'
import ServiceNo3 from './ServicePageDetails/ServiceNo3'

const SerivceComponent = () => {
    return (
        <div>
            <Box display={'flex'} flexDirection={'column'} gap={'100px'} px={'30px'}>
                {/* Introduction */}
                <Introduction />
                {/* Service No.1 */}
                <ServiceNo1 />
                {/* Service No.2 */}
                <ServiceNo2 />
                {/* Service No.3 */}
                <ServiceNo3 />
            </Box>
        </div>
    )
}

export default SerivceComponent
