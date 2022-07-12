import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className="grid w-full text-2xl text-center grid-col-1">
        <img className="ml-auto mr-auto" src="/images/logo.png" />
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className="flex flex-wrap justify-center w-full mt-1">
        <Link href="/">
          <a className="btn-blue">Go to home page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Next;
