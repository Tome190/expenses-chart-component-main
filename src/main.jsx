import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/700.css'

const theme = extendBaseTheme({
  styles: {
    global: {
      "#root": {
        minHeight: "100vh",
        FontFace: "dm-sans, sans-serif" 
      },
    },
  },
  // fonts: {
  //  "#root" :{
  //   FontFace: `'dm-sans', sans-serif`,
  //  }
  // }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)

