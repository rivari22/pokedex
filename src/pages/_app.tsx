import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import clientGraphql from "../config/graphqlSetup";
import GlobalStyles from '@mui/material/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={clientGraphql}>
      <GlobalStyles styles={{ body: { maxWidth: 600, marginLeft: "auto", marginRight: "auto" } }} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
