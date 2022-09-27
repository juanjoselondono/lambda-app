import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
const clientSideEmotionCache = createEmotionCache();
const config = {
  apiKey: 'BJi4BNPg0fTOxWJcNLFFHpAyNoRbPfe3Q2wqGAQPFq5KfQx5zTTZyfFM-G1Mm9CgQj1QLupklyyPVaZW9oOJo90',
  authDomain: 'lambda-2d2aa.firebaseapp.com',
  databaseURL: 'https://lambda-2d2aa-default-rtdb.firebaseio.com',
  projectId: 'lambda-2d2aa',
};
  try{
    console.log('Connected with Firebase')
    const app = initializeApp(config);
    getFirestore(app)
  }
  catch(err){
    console.warn('Connection failed')
    console.error(err)
  }
const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Lambda Team Project
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
