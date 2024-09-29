import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import '@fontsource/poppins'

export const BLACK_COLOR = '#000'
export const ORANGE_COLOR = '#EA4C31'
export const BLUE_COLOR = '#051159'
export const GRAY_COLOR = '#66779E'
export const BG_COLOR = '#E6F4F3'
export const GREEN_COLOR = '#D3EFED'
export const YELLOW_COLOR = '#FFDC60'
export const PURPLE_COLOR = '#FAEFFF'
export const ORANGE_PASTEL_COLOR = '#FFE6E4'
export const INPUT_FIELD_COLOR = '#D6EAE8'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E6F4F3'
    },
    secondary: {
      main: '#051159'
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    allVariants: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightSemiBold: 600,
      fontWeightBold: 700
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})

export default theme