import React from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid
      container
      direction='row'
      xs={12}
      justifyContent="center"
      alignItems="center"
      className="App"
    >
      <Grid item xs={11} className="Psy" style={{ height: "90vh" }}>
        <Spline scene="https://prod.spline.design/ekqlJiX42Sqf79M3/scene.splinecode" />
      </Grid>
      <Grid item xs={10}>
        <h2 style={{textAlign: 'center'}}> &#169; Miks Casal</h2>
      </Grid>
    </Grid>
  );
}

export default App;
