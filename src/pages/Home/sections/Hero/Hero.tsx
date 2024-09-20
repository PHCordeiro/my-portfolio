import { Container, Grid, styled } from "@mui/system"
import Avatar from "../../../../assets/images/avatar.jpeg"
import { Button, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    //Componente Estilizado
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
            <StyledHero>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 4, md: 4}}>
                            <StyledImage src={Avatar} />
                        </Grid>
                        <Grid size={{ xs: 8, md: 8}}>
                            <Typography color="primary" variant="h1" textAlign="center">Pedro Henrique de Souza Seabra Mattos Cordeiro</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I'm a Computer Engineer</Typography>
                            <Button> 
                                <DownloadIcon />
                                Download CV 
                            </Button>
                            <Button> 
                                <EmailIcon />
                                Contact me 
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
      </>
    )
  }
  
  export default Hero
  