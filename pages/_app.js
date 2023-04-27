// import '@/styles/globals.css'
import React from 'react';
import { Provider } from "react-redux";
import store from ".././utils/store";
import Header from '../component/header';
// import '../src/styles/globals.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from '../utils/theme';

export default function App({ Component, pageProps }) {
  return (
    
    <div style={{backgroundColor:'white'}}>
    {/* <ThemeProvider theme={theme} > */}

    <Provider store={store}>
    <CssBaseline />

    <Header/>
    <Component {...pageProps} />

    </Provider>
    {/* </ThemeProvider> */}

    </div>

  )

}
