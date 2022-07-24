import '../styles/globals.css';
import 'renderer/utils/dayjs';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { QueryClient, QueryClientProvider } from 'react-query';

import Header from 'renderer/layouts/Header';
import Drawer from 'renderer/layouts/Drawer';
import ButtonAddMemo from 'renderer/components/QuickMemo/ButtonAddMemo';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Drawer>
          <div className="w-full p-8 mt-[6rem]">
            <Header />
            <Component {...pageProps} />
            <ButtonAddMemo />
          </div>
        </Drawer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
