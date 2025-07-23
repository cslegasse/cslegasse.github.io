import localFont from 'next/font/local'
import { Plus_Jakarta_Sans, Inter, Manrope} from 'next/font/google'


export const drukWide = localFont({
    src: "../../public/fonts/Druk-Wide-Bold.ttf",
    display: "swap",
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});



