import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Asap-Condensed-Bold';
        src:url('/fonts/Asap-Condensed/Asap-Condensed-Bold.ttf.woff') format('woff'),
            url('/fonts/Asap-Condensed/Asap-Condensed-Bold.ttf.svg#Asap-Condensed-Bold') format('svg'),
            url('/fonts/Asap-Condensed/Asap-Condensed-Bold.ttf.eot'),
            url('/fonts/Asap-Condensed/Asap-Condensed-Bold.ttf.eot?#iefix') format('embedded-opentype'); 
        font-weight: normal;
        font-style: normal;
    }

    body, html {
        color: ${props => (props.whiteColor ? 'white' : 'black')};
        font-size: 25px;
        font-family: 'Asap-Condensed-Bold';
    }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle blackColor />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}