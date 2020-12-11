import Head from 'next/head';
import React, { useEffect } from 'react';
import 'regenerator-runtime/runtime';
import styles from '../../styles/Home.module.css';
import dynamic from 'next/dynamic';
import SuperTokens  from 'supertokens-auth-react';

const SuperTokensComponentNoSSR = dynamic(() => import('supertokens-auth-react').then(mod => {
  return () => mod.getRoutingComponent() || null;
}), {
  ssr: false
});

export default function Auth() {
    useEffect(() => {
        if (SuperTokens.canHandleRoute() === false) {
          window.location.href = "/";
        }
    }, []);

    return (
        <div className={styles.container}>
          <Head>
            <title>SuperTokens 💫, Open Source Alternative to Auth0</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
              <SuperTokensComponentNoSSR />
          </main>

        </div>
    );
}
