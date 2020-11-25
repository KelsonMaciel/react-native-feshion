import { createTheme, createText } from '@shopify/restyle'

const palette = {
  primary: '#2CB9B0',
  title: '#0C0D34',
  text: 'rgba(12, 13,  52, 0.7)',
  white: 'white',
  grey: 'rgba(12, 13, 52, 0.2)',
};


const theme = createTheme({
  colors: {
    primary: palette.primary,
    title: palette.title,
    text: palette.text,
    white: palette.white,
    grey: palette.grey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
      color: "title"
    },

    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-SemiBold",
      color: "title"
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
export const Text = createText<Theme>();
export default theme;