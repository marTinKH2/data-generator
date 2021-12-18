import * as React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import {Card,Grid,Button,Autocomplete,Positions,Paper,} from "@mui/material";
import { ButtonUnstyled } from "@mui/core/ButtonUnstyled";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Middle } from "./MyComponents/Middle";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Signal from "./MyComponents/Signal";
import Routing from "./MyComponents/Header";
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box1 from '@mui/material/Box';
import Uppermid from "./MyComponents/Uppermid";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
 

  return (
     <>
<Paper>
    <Header title="Data generator" colorMode={colorMode} theme={theme} />
  

     
      <Grid
        container
        style={{ height: "100vh" }}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
      
        <Middle />
        <Footer style={{ marginTop: 1000 }} />
      </Grid>
</Paper>
  </>
  );
}
export default function App1() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
         },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

