import react from "react";
import React from "react";
import img3 from './img/img3.jpg';
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography,Grid,Box } from "@mui/material";
import myImage from "./img/img6.jpg";
const About=()=>{
    return(
<>
<Grid continer>
<AppBar elevation={0}>
<Toolbar sx={{ backgroundColor: 'rgb(242, 255, 164)' }}>
<Typography   sx={{fontSize:{sm:"1.5rem",xs:"1rem",lg:"1.5rem",xl:"1.5rem",md:"1.5rem"} ,fontFamily: 'Space Mono, monospace', color: 'black',letterSpacing:"0.5rem" }}>
      GHULAM UMER
    </Typography>
    </Toolbar>
</AppBar>
</Grid>

  
 
 <br></br>
 <br></br>
<Grid container  >
    <Grid>
        <Grid className="div1-2" sx={{p:1}} > 
        <br></br>
 <br></br><br></br>
 <br></br>
            <p className="pt-5 pb-3 text2">HI THERE</p>
            <h1 className="pt-2 pb-5 text3">A Frontend React Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
</h1>
        </Grid>
        <Grid container>
        <Box
          sx={{
            backgroundImage: `url(${myImage})`, // Corrected the syntax for background image URL
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '400px', // Set the desired height for the div
          }}
        ></Box>
      </Grid>
        <Grid className=" div1-3" sx={{p:1}}  > 
           
           
            <p className="pt-5 pb-3 text4">ABOUT</p>
            <h1 className="pt-2 pb-1 text5"> Hello, I'm Ghulam Umer, a passionate and aspiring Front-End React Developer eager to make a mark in the world of web development. I am currently searching for an internship opportunity to apply my skills, gain valuable real-world experience, and contribute to exciting projects. With a strong foundation in React.js and a passion for creating beautiful and intuitive user interfaces, I am ready to take on new challenges and contribute to the success of your team.</h1>
          <br></br>
          <a href="https://drive.google.com/file/d/1jN7rUvWFMCKSFesXVjcV8B52frRYG929/view?usp=sharing"><button className="btnn">HIRE ME</button></a>
          <br></br>
          
          <br></br>
        </Grid>
    </Grid>
</Grid>
</>
    )
}
export default About;