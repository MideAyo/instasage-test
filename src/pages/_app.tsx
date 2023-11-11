import 'animate.css';
import '@/styles/custom.css'
import '@/styles/variables.css'
import '@/styles/tailwind.css'
import '@/styles/nprogress.css'
import type { AppProps } from 'next/app'

import Router from "next/router";
import NProgress from 'nprogress'
import {AppProvider} from "@/store/contexts/appContext";

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppProvider>
          <Component {...pageProps} />
      </AppProvider>
  )
}

export default MyApp
