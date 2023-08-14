import { createTheme } from '@mui/material/styles';

const navbarTheme = createTheme({
    palette:{
        primary:{
            main: '#Ecf6f5'
        }
    }
})
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export { navbarTheme, darkTheme}