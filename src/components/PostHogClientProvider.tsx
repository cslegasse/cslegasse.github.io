'use client';

import React, { useEffect } from 'react';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';

export default function PostHogClientProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!posthog.has_opted_out_capturing()) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        autocapture: true,
        capture_pageview: true,
        loaded: (ph) => {
          console.log("✅ PostHog initialized", ph);
          ph.capture('app_loaded');
        },
      });
    }
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
