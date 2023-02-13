import { createTheme } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F4F4F4",
    },
    primary: {
      main: "#475BE8",
    },
    secondary: {
      main: "#808191",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#11142D",
      secondary: "#808191",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: blue[600],
        },
      },
    },
  },
});
