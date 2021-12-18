import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link as RouterLink, MemoryRouter as Router } from "react-router-dom";
import Link from "@mui/material/Link";
import Box1 from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import { deepPurple, lightBlue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

import Divider from '@mui/material/Divider';
import { SignalButton } from "./SignalButton";
import { RandomSignal } from "./configurations/RandomSignal";
import { NumberFormatCustom } from "./NumberFormatCustom";
import { SinusSignal } from "./configurations/SinusSignal";
import { CosinusSignal } from "./configurations/CosinusSignal";
import { SpikesSignal } from "./configurations/SpikesSignal";
import { NormallyDistributed } from "./configurations/NormallyDistributed";



const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
/*const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
*/




export function Middle() {
  const [MinMax, setMinMax] = React.useState("");
  const [lowerboundary, setlowerboundary] = React.useState("");
  const [upperboundary, setupperboundary] = React.useState("");
  const [frequence, setfrequence] = React.useState("");
  const [amplitude, setamplitude] = React.useState("");
  const [basedistance, setbasedistance] = React.useState("");
  const [propability, setpropability] = React.useState("");
  const [size, setsize] = React.useState("");
  const [transmissionfrequency, settransmissionfrequency] = React.useState("");
  const [Argument, setArgument] = React.useState("");
  const [expectedvalue, setexpectedvalue] = React.useState("");
  const [standarddeviation, setstandarddeviation] = React.useState("");

  const [showrs, setShowRS] = React.useState(true);
  const [showss, setShowSS] = React.useState(true);
  const [showcs, setShowCS] = React.useState(true);
  const [showsws, setShowSWS] = React.useState(true);
  const [showns, setShowNS] = React.useState(true);

  const [value] = React.useState("");

  function setConfig(current){
    setShowCS(false)
    setShowNS(false)
    setShowRS(false)
    setShowSS(false)
    setShowSWS(false)
    current(true)
  }

  const handleChange = (event) => {
    setlowerboundary(event.target.value);
  };
  const handleChange1 = (event) => {
    setupperboundary(event.target.value);
  };



  /*return (
    <div>
      <Stack
        pt={3}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box1 sx={{ typography: "body1" }}>
          <Router>
            <Link
              component={RouterLink}
              to="/Zufälliges Signal mit Schwerpunkt"
            > {showrs && showRS ? (
              <Card spacing={80} sx={{ minWidth: 200 }}>
               
                  <Button variant="outlined" onClick={hideRSF}>
                    Zufälliges Signal mit Schwerpunkt
                  </Button>
                
               
              </Card>) : !showrs ? <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center">
                  
                <Box sx={{ minWidth: 200  }}>
                    
                   <Grid container style={{ height: "30vh" }} spacing={3}>
                     <Grid item xs="auto">
                       <Item>Zufälliges Signal mit Schwerpunkt</Item>
                     </Grid>
                     <Grid item xs={6}>
                       
                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Min/Max</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={MinMax}
          onChange={handleChange}
          label="Min/Max"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Min/Max</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={MinMax}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Selectlabel="expected value">
      </FormControl>
    
                     </Grid>
                    
                   </Grid>
                  
               </Box> </Grid> : null}
            </Link>
          </Router>
        </Box1>
    

        <Card spacing={14} sx={{ minWidth: 50 }}>
          {showrs && showRS? (
            <Button variant="outlined" onClick={hideRS}>
              Zufälliges Signal
            </Button>
          ) : null}
        </Card>
        <Card spacing={8} sx={{ minWidth: 50 }}>
          {showrs && showRS ? (
            <Button variant="outlined">Periodische Signal</Button>
          ) : null}
        </Card>
        <Card sx={{ minWidth: 100 }}>
          {showrs && showRS ? (
            <Button variant="outlined">Sigal mit Ausreißern</Button>
          ) : null}
        </Card>
        <Card sx={{ minWidth: 100 }}>
          {showrs && showRS  ? (
            <Button variant="outlined">Signal mit Maschinentakt</Button>
          ) : null}
        </Card>
      </Stack>
    </div>
  );
  */
  return (
    <div>
    <Box sx={{ mx: 60, my: -35, pt: -40, minWidth: 200, color: lightBlue[700]}} fixed>
        <Stack
          container
          sx={{ mx: -50, my: -10, pt: 20 }}
          spacing={2}
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Typography>
          Signal Type</Typography>

          <SignalButton name={"Random signal"} onClick={() => setConfig(setShowRS)} icon={<CasinoOutlinedIcon sx={{ fontSize: 50, color: lightBlue[700] }} />}/>

          <SignalButton name={"Sinus Signal"} onClick={() => setConfig(setShowSS)} icon={<CasinoOutlinedIcon sx={{ fontSize: 50, color: lightBlue[700] }} />}/>

          <SignalButton name={"Cosinus Signal"} onClick={() => setConfig(setShowCS)} icon={<AutoGraphOutlinedIcon sx={{ fontSize: 50, color: lightBlue[700] }}/>}/>

          <SignalButton name={"Signal with spikes"} onClick={() => setConfig(setShowSWS)} icon={<AutoGraphOutlinedIcon sx={{ fontSize: 50, color: lightBlue[700] }} />}/>

          <SignalButton name={"Normally distributed signal"} onClick={() => setConfig(setShowNS)} icon={<TimelineOutlinedIcon sx={{ fontSize: 50, color: lightBlue[700] }} />}/>


        </Stack>

      <Box sx={{ mx: 40, my: -65, pt: -40, minWidth: 200 }} variant="outlined">
        
        {showrs ? (<RandomSignal handleChange={handleChange} numberformat={value.numberformat}/>)
        : showss ? <SinusSignal handleChange={handleChange} numberformat={value.numberformat}/>
        : showcs ? <CosinusSignal handleChange={handleChange} numberformat={value.numberformat}/>
        : showsws ? <SpikesSignal handleChange={handleChange} numberformat={value.numberformat}/>
        : showns ? <NormallyDistributed handleChange={handleChange} numberformat={value.numberformat}/>
        : null }

      </Box>
    </Box>
    </div>
  );
}
