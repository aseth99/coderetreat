import { createTheme, responsiveFontSizes } from '@material-ui/core';
export const GetAppTheme = () =>
  responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: 'Lato, sans-serif'
      },
      palette: {
        primary: { main: '#3888ce', dark: '#004e79' },
        secondary: { main: '#7cb448', contrastText: '#FFF' },
        error: { main: '#d32f2f' },
        text: {
          primary: '#393939'
        }
      }
    } as any)
  );
