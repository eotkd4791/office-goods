import 'renderer/utils/dayjs';
import '../styles/globals.css';

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ButtonAddMemo from 'renderer/components/QuickMemo/ButtonAddMemo';
import Drawer from 'renderer/layouts/Drawer';
import Header from 'renderer/layouts/Header';

ChartJS.register(ArcElement, Tooltip, Legend);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Drawer>
        <div className="w-full p-8 mt-[6rem]">
          <Header />
          <Component {...pageProps} />
          <ButtonAddMemo />
        </div>
      </Drawer>
    </ThemeProvider>
  );
}

export default MyApp;
