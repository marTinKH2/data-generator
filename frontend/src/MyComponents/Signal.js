import React from 'react'
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Autocomplete1 from "@mui/material/Autocomplete";
import TextField1 from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { createTheme } from "@mui/material/colors";
import {Grid} from '@mui/material';
import History from "./History";

export default function Signal() {
    return (
        <div>
            <Stack
    pt = {3}
    direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    justifyContent="center"
    alignItems="center"
    spacing={2}
  >
    <Card spacing={80} sx={{ minWidth: 200 }}>
      <CardContent>
        <Autocomplete1
          disablePortal
          id="combo-box-demo"
          options={Top5Typ}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField1 {...params} label="Freuquenz" />
          )}
        />
      </CardContent>
    </Card>
    <Card spacing={14} sx={{ minWidth: 50 }}>
      <CardContent>
        <Autocomplete1
          disablePortal
          id="combo-box-demo"
          options={Top5Typ}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField1 {...params} label="Min/Max" />
          )}
        />
      </CardContent>
    </Card>
    <Card spacing={8} sx={{ minWidth: 50 }}>
      <CardContent>
        <Autocomplete1
          disablePortal
          id="combo-box-demo"
          options={Top5Typ}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField1 {...params} label="Cosinus" />
          )}
        />
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Autocomplete1
          disablePortal
          id="combo-box-demo"
          options={Top5Typ}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField1 {...params} label="Sinus" />}
        />
      </CardContent>
    </Card>
  </Stack>
  </div>
    )
}
const Top5Typ = [
    { label: "Zufälliges Signal mit Schwerpunkt" },
    { label: "Zufälliges Signal" },
    { label: "Periiodische Signal" },
    { label: "Signal mit Ausreißern" },
    { label: "Signal mit Maschinentakt" },
  ];
