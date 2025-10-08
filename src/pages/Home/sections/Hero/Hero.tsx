import { Box, Container, Grid, Typography } from "@mui/material"
import styled from "styled-components"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackgorund/AnimatedBackground";

function Hero () {

  const StyledHero = styled("div")(() => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
}))

const StyledImg = styled("img")(()=>({

    width: "80%",
    borderRadius: "50%",
}))

    return (
      <>
      <StyledHero>
       <Container maxWidth= "lg">
       <Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 4 }} >
    <Box position={"relative"}>
      <Box position={"absolute"} width={"100%"} top={-100} right={0}> 
        <AnimatedBackground />
       

      </Box>

      <Box position={"relative"} textAlign={"center"}>
        <StyledImg src="../../../../../assets/images/avatar.jpg"></StyledImg>
        </Box>
    </Box>
  
  </Grid>
  <Grid size={{ xs: 12, md: 8 }}>
   <Typography color="primary.contrastText" variant="h1" textAlign= "center"> Igor França</Typography>  

   <Typography color="primary.contrastText" variant="h2" textAlign= "center"> I'm a fullStack Programmer</Typography>

   <Grid container justifyContent={"center"} display={"flex"} spacing={"10px"}>

        <Grid item size={{ xs: 12, md: 3 }}>
        <StyledButton>
   <DownloadForOfflineIcon></DownloadForOfflineIcon>
    <Typography>
    CV download
    </Typography>
 </StyledButton>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
        <StyledButton >
     <EmailIcon></EmailIcon>
 <Typography> 
   Contact me

 </Typography>
   
   </StyledButton>
        </Grid>
   </Grid>
   
  
  </Grid>
</Grid>
      hero
        
       </Container>
    
      </StyledHero>
 
      </>
    )
  }
  
  export default Hero
  