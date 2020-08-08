import Head from 'next/head';
import React from 'react';
import { TopMenu } from './menu';

export const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
      <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MmNlZmFiMmUtZWNiYS00OTUzLWI3YTAtYzQ0NWZkMzkwNmRlNjM2NTYzMjA1NzE2NDk1MDQ0" id="snipcart" />
      <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
    </Head>
    <TopMenu />
    {children}
  </>
);
