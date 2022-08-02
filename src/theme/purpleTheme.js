import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#282f44'
        }, 
        secondary: {
            main: '#3a506b'
        },
        error: {
            main: red.A400
        }
    }
})