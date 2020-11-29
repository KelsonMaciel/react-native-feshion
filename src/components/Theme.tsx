import { createTheme, createText, createBox } from '@shopify/restyle'

const palette = {
  primary: '#2CB9B0',
  secondary: '#0C0D34',
  text: 'rgba(12, 13,  52, 0.7)',
  white: 'white',
  grey: 'rgba(12, 13, 52, 0.2)',
  lightGrey: '#F4F0EF'
};


const theme = createTheme({
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    text: palette.text,
    white: palette.white,
    grey: palette.grey,
    'slide.grey': palette.lightGrey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-SemiBold",
      color: "secondary"
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-SemiBold",
      color: "secondary"
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Medium",
      color: 'grey',
    },
  }
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;