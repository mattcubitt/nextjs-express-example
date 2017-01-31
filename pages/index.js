import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default () => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
            <ul>
                <li><Link href='/b' as='/a'><a>a</a></Link></li>
                <li><Link href='/a' as='/b'><a>b</a></Link></li>
            </ul>
        </div>
    </div>

)