import React from "react";
import Card from "@mui/material/Card";
import { deepPurple, lightBlue } from "@mui/material/colors";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import Button from "@mui/material/Button";
import { ThemeProvider, makeStyles } from '@mui/styles';

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  };

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 36,
    },
}));

export function SignalButton(props){
    return <Card spacing={2} sx={{ minHeight: 10, minWidth: 420,bgcolor: lightBlue[50],color: 'primary.contrastText' }} >
            {props.icon}
            <ThemeProvider theme={theme}>
            <Button className={useStyles().root} variant="contained" onClick={props.onClick} sx={{ mx: 6, my: 5 }}>
              {props.name}
            </Button>
            </ThemeProvider>
    </Card>
}