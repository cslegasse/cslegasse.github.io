"use client";
import '../styles/fonts.css';
import '../styles/globals.css';
import Layout from '../app/layout';
import { AppProps } from 'next/app';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      person_profiles: 'identified_only',
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') ph.debug();
      }
    })
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostHogProvider>
  );
}

export default MyApp;
