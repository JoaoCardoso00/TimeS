import { AppProps } from "next/app";
import Head from "next/head";
import { Button, MantineProvider } from "@mantine/core";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const userData = useUserData();

  return (
    <>
      <Head>
        <title>TimeS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <UserContext.Provider value={userData}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </MantineProvider>
    </>
  );
}
