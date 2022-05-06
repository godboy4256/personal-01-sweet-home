import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createUploadLink } from "apollo-upload-client";
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    // headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include"
  });

  const client = new ApolloClient({
    link: ApolloLink.from([ uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
