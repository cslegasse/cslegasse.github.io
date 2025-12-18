import localFont from 'next/font/local'

export const drukWide = localFont({
  src: [
    {
      path: "../../public/fonts/Druk-Wide-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-header",
  display: "swap",
});

export const Inter_18pt = localFont({
  src: [
    {
      path: "../../public/fonts/Inter_18pt-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
})

export const Graebenbach = localFont({
  src: [
    {
      path: "../../public/fonts/Graebenbach-Mono-Regular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-header",
  display: "swap",
});