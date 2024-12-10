import {createTheme} from "@mui/material";

const theme = createTheme({
    button: {
        fontFamily: "sans-serif",
        color: "#fff",
        bgColor: "linear-gradient(180deg,#434343,#0f0f0f 100%)",
      },
      components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "sans-serif",
          color: "#fff",
          background: "linear-gradient(180deg, #555555, #1a1a1a 100%)",
        
          
        },
      },
    },
  },
    
});

export default theme;
