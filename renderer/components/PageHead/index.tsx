import Head from 'next/head';
import { FC } from 'react';

interface Props {
  title: string;
}

const PageHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Office Goods</title>
    </Head>
  );
};

export default PageHead;
