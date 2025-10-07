import { Button, Container, Grid, Typography } from "@mui/material"
import styled from "styled-components"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
function Hero () {


    const StyledHero = styled("div")(()=>({

        backgroundColor: "lightBlue",
        height: "100vh",

}))
const StyledImg = styled("img")(()=>({

    width: "100%",
    borderRadius: "50%",
}))

    return (
      <>
      <StyledHero>
       <Container maxWidth= "lg">
       <Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 4 }} >
    <StyledImg src="../../../../../assets/images/avatar.jpg"></StyledImg>
  </Grid>
  <Grid size={{ xs: 12, md: 8 }}>
   <Typography color="primary" variant="h1"> Igor França</Typography>
   <Typography color="primary" variant="h2"> I'm a fullStack Programmer</Typography>
   <Grid container>
        <Grid item size={{ xs: 12, md: 3 }}>
        <Button>
   <DownloadForOfflineIcon></DownloadForOfflineIcon>
    CV download
 </Button>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
        <Button>
     <EmailIcon></EmailIcon>
   Contact me
   
   </Button>
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
  