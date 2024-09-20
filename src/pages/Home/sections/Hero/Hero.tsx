import { Container, Grid, styled } from "@mui/system"
import Avatar from "../../../../assets/images/avatar.jpeg"
import { Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

    //Componente Estilizado
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImage = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border: '5px solid white',
    }))

    return (
      <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4}}>
                            <StyledImage src={Avatar} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 8}}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Pedro Henrique de Souza Seabra Mattos Cordeiro</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Computer Engineer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3}>
                                <Grid size={{ xs: 12, md: 4}}>
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV 
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4}}>
                                    <StyledButton> 
                                        <EmailIcon />
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
  