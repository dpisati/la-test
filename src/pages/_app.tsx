import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { Raleway } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

const raleway = Raleway({
  weight: ['100', '300', '500', '700'],
  style: ['normal'],
  variable: '--font-raleway',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${roboto.variable} font-sans ${raleway.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
