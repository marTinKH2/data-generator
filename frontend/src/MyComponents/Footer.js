import * as React from "react";
import PropTypes from "prop-types";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import PropTypes1 from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box1 from "@mui/material/Box";
import Container from "@mui/material/Container";
import { lightBlue } from "@mui/material/colors";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import { IconButton } from "@mui/material";

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
      elevation: trigger ? 2 : 0,
    });
  }
  ElevationScroll.propTypes = {
    children: PropTypes1.element.isRequired,
    window: PropTypes1.func,
  };

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${
    theme.palette.mode === "light" ? "rgb(25,118,210)" : "rgb(144,202,249)"
  };
  --hover-color: ${
    theme.palette.mode === "light"
      ? "rgba(25,118,210,0.04)"
      : "rgba(144,202,249,0.08)"
  };
  --active-color: ${
    theme.palette.mode === "light"
      ? "rgba(25,118,210,0.12)"
      : "rgba(144,202,249,0.24)"
  };

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export function Footer(props) {
  const [showGenerate, setGenrate] = React.useState(true);
  const hideGenerate = () => setGenrate(false);
  return (
    <Container>
      <SvgButton onClick={hideGenerate} sx={{ mx: 32, my: 2 }}>
        Generate
      </SvgButton>
      <React.Fragment>
        <Container>
          <Box1 sx={{ mx: 120, my: -76, minWidth: 100 }}>
            {[...new Array(1)].map(() => (
              <Stack
                pt={1}
                divider={<Divider orientation="vertical" flexItem />}
                justifyContent="center"
                alignItems="center"
                spacing={8}
              >
                <Card sx={{ my: -2, mx: 150, height: 644, minWidth: 700,bgcolor: lightBlue[50] }}>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ color: lightBlue[700], mx: 40, my: 2 }}
                  >
                    datastreams
                  </Typography>
                  <Divider variant="middle" />
                  <Grid container>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ color: lightBlue[700], mx: 2, my: 1 }}
                  >
                    active streams:
                  </Typography>
                  play: 
                  <IconButton>
                    
                    <PlayCircleOutlineOutlinedIcon
                      sx={{  mx: 1, m: 1,fontSize: 30, color: lightBlue[700] }}
                    />
                  </IconButton>
                  stop: 
                  <IconButton> 
                    <StopCircleOutlinedIcon
                      sx={{ mx: 1, my: 1, fontSize: 30, color: lightBlue[700] }}
                    />
                  </IconButton>
                  </Grid>

                  {!showGenerate ? (
                    <Card sx={{ minWidth: 15 }}>
                      <CardContent>
                        <Typography
                          sx={{ mx: 10, fontSize: 20, minWidth: 250 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Data stream name
                        </Typography>
                        <Typography variant="body2">Signal : Name</Typography>
                        <Typography variant="body2">
                          Output format: Format
                        </Typography>
                        <Typography
                          sx={{ mx: 10, fontSize: 20 }}
                          variant="body2"
                        >
                          Running........
                        </Typography>
                      </CardContent>
                    </Card>
                  ) : null}

                  {!showGenerate ? (
                    <Card sx={{ minWidth: 15 }}>
                      <CardContent>
                        <Typography
                          sx={{ mx: 10, fontSize: 20, minWidth: 250 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Data stream name
                        </Typography>
                        <Typography variant="body2">Signal : Name</Typography>
                        <Typography variant="body2">
                          Output format: Format
                        </Typography>
                        <Typography
                          sx={{ mx: 10, fontSize: 20 }}
                          variant="body2"
                        >
                          Running........
                        </Typography>
                      </CardContent>
                    </Card>
                  ) : null}
                </Card>
              </Stack>
            ))}
          </Box1>
        </Container>
      </React.Fragment>
    </Container>
  );
}
