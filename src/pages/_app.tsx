import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import clientGraphql from "../config/graphqlSetup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={clientGraphql}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
