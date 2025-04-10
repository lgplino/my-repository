import { styled } from '@mui/material/styles'
import profilephoto from '../../assets/Images/profilephoto.jpg'
import Grid from '@mui/material/Grid'
import { Box, Container, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import StyledButton from '../../components/StyledButton/StyledButton'
import { AnimatedBackground } from '../../components/AnimatedBackground/AnimatedBackground'

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))
    const StyledImage = styled("img")(({theme}) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
    }))
    return (
        <>
            <StyledHero>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position='relative'>
                                <Box position='absolute' width={'150%'} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position='relative' textAlign='center'>
                                    <StyledImage src={profilephoto} alt="Avatar" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color='primary.contrastText' variant='h1' textAlign='center' pb={2}>Lucas Lino</Typography>
                            <Typography color='primary.contrastText' variant='h2' textAlign='center' pb={2}>I'm a Software Developer</Typography>
                            <Grid container display='flex' justifyContent='center' spacing={3} pt={3}>
                                <Grid size={{ xs: 12, md: 6 }} display='flex' justifyContent='center'>
                                    <StyledButton>
                                        <DownloadIcon />
                                            <Typography>
                                                Download CV
                                            </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }} display='flex' justifyContent='center'>
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
