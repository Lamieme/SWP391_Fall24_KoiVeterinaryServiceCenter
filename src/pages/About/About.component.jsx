import { Box } from '@mui/material'
import Quality from './AboutPageDetails/Quality'
import ReliableAndTrust from './AboutPageDetails/ReliableAndTrust'
import Title from './AboutPageDetails/Title'
import SatisfactionGuaranteed from './AboutPageDetails/SatisfactionGuaranteed'

const AboutComponent = () => {
    return (
        <div>
            <Box display={'flex'} flexDirection={'column'} gap={'100px'} px={'30px'}>
                {/* Title */}
                <div>
                    <Title />
                    {/* Quality */}
                    <Quality />
                </div>
                {/* ReliableAndTrust */}
                <ReliableAndTrust />

                {/* SatisfactionGuaranteed */}
                <SatisfactionGuaranteed />
            </Box>
        </div>
    )
}

export default AboutComponent
