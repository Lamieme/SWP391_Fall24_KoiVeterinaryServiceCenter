import { Container, Grid2 } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { BG_COLOR } from '~/theme'
import Footer from '../Footer'
import Header from '../Header'

const DefaultLayout = () => {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            sx={{ m: 0, p: 0, bgcolor: BG_COLOR }}
        >

            <Container maxWidth={'xl'}>
                {/* HEADER */}
                <Header />
                <Outlet />
                {/* FOOTER */}
                <Footer />
            </Container>
        </Grid2>
    )
}

export default DefaultLayout
