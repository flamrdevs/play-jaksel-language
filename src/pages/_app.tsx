import { Fragment } from "react";

import App from "next/app";
import type { AppContext, AppProps, AppInitialProps } from "next/app";
import Head from "next/head";

import "~/styles/theme.css";
import "~/styles/main.css";

import ThemeProvider, { getDarkCookie } from "~/components/ThemeProvider";
import AppProvider from "~/components/AppProvider";

type _AppProps = {
  dark: boolean;
};

const _App = ({ Component, pageProps, dark }: AppProps & _AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider dark={dark}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </Fragment>
  );
};

_App.getInitialProps = async (context: AppContext): Promise<AppInitialProps & _AppProps> => {
  const props = await App.getInitialProps(context);

  const dark = getDarkCookie(context.ctx.req.headers.cookie);

  return { ...props, dark };
};

export default _App;
