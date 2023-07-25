import react from "react";
import { Toolbar, Typography,Grid,Box } from "@mui/material";
import myImage from "./img/img6.jpg";
const Services=()=>{
    
 
    return(
        <>
        <Grid className=' service p-4'>
        
           
      <Grid container>
        <Grid>
        <br></br>
          <p className=" mb-2 text6 ">PROFESSIONAL SKILLS</p>
          <h1 className="pt-4 pb-5 text7">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h1>
         </Grid>
          </Grid>
        
<Grid sx={{display:"flex",justifyContent:"center",flexWrap:"wrap",alignContent:"center"}}>
 <i class="devicon-html5-plain-wordmark icon" ></i>
  <i class="devicon-css3-plain-wordmark icon"></i>
  <i class="devicon-materialui-plain icon"></i>
 <i class="devicon-javascript-plain icon"></i>
 <i class="devicon-bootstrap-plain-wordmark icon"></i>
 <i class="devicon-react-original-wordmark icon"></i>
 <i class="devicon-cplusplus-line-wordmark icon"></i>
  <i class="devicon-mysql-plain-wordmark icon"></i>
  <i class="devicon-c-line-wordmark icon"></i>
  <i class="devicon-php-plain icon"></i>
 
</Grid>
</Grid>

       
      
        
        
        
        
        
       
      

           
            
    
        </>
    )
}
export default Services;