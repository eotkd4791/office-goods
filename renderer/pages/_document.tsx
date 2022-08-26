import { useTheme } from 'next-themes';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const { theme } = useTheme();

  return (
    <Html data-theme={theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
