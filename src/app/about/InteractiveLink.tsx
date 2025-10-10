"use client";

import React from 'react';
import posthog from 'posthog-js';

interface InteractiveLinkProps {
  href: string;
  children: React.ReactNode;
  event: string;
  underline?: boolean;
  newTab?: boolean;
}

export default function InteractiveLink({ href, children, event, underline = false, newTab = false }: InteractiveLinkProps) {
  const linkStyle = {
    textDecoration: underline ? 'underline' : 'none'
  };

  const linkAttributes = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a href={href} {...linkAttributes} style={linkStyle} onClick={() => posthog.capture(event)}>
      {children}
    </a>
  );
}