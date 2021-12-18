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
import NumberFormat from "react-number-format";
import Typography from "@mui/material/Typography";

import Divider from '@mui/material/Divider';
import { NumberFormatCustom } from "../NumberFormatCustom";

export const RandomSignal = (props) => {
    return (
<Grid
            container
            spacing={10}
            direction="column"
            sx={{ mx: -20, my: -50, pt: -20 }}
            alignItems="center"
            justifyContent="center"
          >
            <Box sx={{ mx: 30, my: 10, pt: -40, minWidth: 200 }}>
              <Grid container style={{ height: "30vh" }} spacing={10}>
                <Card sx={{ mx: -30, my: -16, height: 644, minWidth: 350, bgcolor: lightBlue[50]}}>
                <Typography
                    component="div"
                    variant="h5"
                    sx={{ color: lightBlue[700], mx: 5, my:2 }}
                  >
                    Signal configuration
                  </Typography>             
                <Divider variant="middle" />
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ color: lightBlue[700], mx: 5, my: 3 }}
                  >
                    Random Signal 
                  </Typography>
                  <TextField 
                    variant="outlined"
                    sx={{ my: 4, mx: 5, pt: 1, minWidth: 300}}
                    label="Lower boundary"
                    value={props.numberformat}
                    onChange={props.handleChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                  <TextField
                    variant="outlined"
                    sx={{ my:3, mx: 5, pt: 1, minWidth: 300 }}
                    label="Upper boundary"
                    value={props.numberformat}
                    onChange={props.handleChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                  <TextField
                    variant="outlined"
                    sx={{ mx: -42, my: 19, pt: 1, minWidth: 300 }}
                    label="Transmission frequency"
                    value={props.numberformat}
                    onChange={props.handleChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </Card>
                <Grid item xs={1}></Grid>
              </Grid>
            </Box>{" "}
          </Grid>
    )
}
