import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Grid } from "@mui/material";

const Project = () => {
  const pro = () => {
    alert("Under Development");
  };

  return (
    <>
      {/* Project Section */}
      <Grid className="container-fluid project">
        <Grid className="">
          <br />
          <br />
          <p className="mb-2 text8">OUR WORK</p>
          <h1 className="pt-4 pb-2 text9">Here you will find some of the personal projects that I created with each project containing its own case study.</h1>
        </Grid>

        {/* Project Grid */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              marginBottom: "2rem",
              backgroundColor: "black",
              padding: "1rem",
              borderRight: "4px solid rgb(242, 255, 164)",
            }}
          >
            <img src={require('./img/img1.jpg').default} height={300} className="p-3 rounded" style={{ width: "100%" }} alt="Project 1" />
            <Grid>
              <p className="mb-2 text81">Portfolio</p>
              <p className="mb-2 text91">I developed this responsive portfolio website using React.js and Material-UI (MUI) to showcase my work, skills, and achievements. The website comprises various sections, including the header, about me, portfolio, and contact.</p>
              <a href="#"><button className="view">View</button></a>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              marginBottom: "2rem",
              backgroundColor: "black",
              padding: "1rem",
              borderRight: "4px solid rgb(242, 255, 164)",
            }}
          >
            <img src={require('./img/img7.jpg').default} height={300} width={300} className="p-3 rounded" style={{ width: "100%" }} alt="Project 2" />
            <Grid>
              <p className="mb-2 text81">E-COMMERCE WEBSITE</p>
              <p className="mb-2 text91">I built a full-fledged e-commerce website using React.js and Material-UI (MUI). The website simulates an online shopping platform, allowing users to browse products, add items to their cart, and proceed to checkout for purchase.</p>
              <a href="https://commercesite.netlify.app/"><button className="view">View</button></a>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ marginBottom: "2rem", backgroundColor: "black", padding: "1rem" }}
          >
            <img src={require('./img/img2.jpg').default} height={300} width={300} className="p-3 rounded" style={{ width: "100%" }} alt="Project 3" />
            <Grid>
              <p className="mb-2 text81">Todo App</p>
              <p className="mb-2 text91">I created a Todo App using React.js and Material-UI (MUI). It helps users manage their tasks and stay organized.</p>
              <a href="https://todaapp.netlify.app/"><button className="view">View</button></a>
            </Grid>
          </Grid>
        </Grid>
        <br />
      </Grid>
    </>
  );
};

export default Project;
