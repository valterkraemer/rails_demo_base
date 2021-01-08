import React from 'react';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

import Companies from "./pages/Companies/Companies";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    },
    MuiButton: {
      root: {
          borderRadius: "3px",
          color:"#fff",
          fontSize:"14px",
          padding: "7px 15px",
          boxShadow:"none",
          fontWeight:"normal",
          textTransform:"capitalize",
          fontFamily: "Poppins,Helvetica,sans-serif !important",
          '&:hover': {
              opacity: "70%",
              backgroundColor: "#333996"
          }
      },
  },
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    // paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Companies />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;