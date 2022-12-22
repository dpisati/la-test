import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import OceanSection from '../components/sections/OceanSection';
import ClientsSection from '../components/sections/ClientsSection';
import NotificationsSection from '../components/sections/NotificationsSection';

import ObservationsSection from '../components/sections/ObservationsSection';
import HeatMapSection from '../components/sections/HeatMapSection';
import Footer from '../components/Footer';

const appTypes = ['fishing', 'sailing'] as const;
export type appType = typeof appTypes[number];

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { type } = req.cookies;

  return {
    props: {
      type: type ? type.toLowerCase() : null,
    },
  };
};

export default function Home({ type }: { type: appType }) {
  const { query } = useRouter();
  const [storeType, setStoreType] = useState<appType>('sailing');

  useEffect(() => {
    const queryType = query?.type as string;

    if (queryType) {
      const lowerCaseType = queryType.toLowerCase();
      const validType = appTypes.find((item) => item === lowerCaseType);

      if (validType) {
        setCookie('type', lowerCaseType);
        setStoreType(lowerCaseType as appType);
      }
    } else if (type) {
      setStoreType(type);
    }
  }, [type, query]);

  return (
    <div>
      <Head>
        <title>PredictWind</title>
        <meta
          name="description"
          content="Perfect Weather For Your Next Adventure"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <HeroSection type={storeType} />
      <ClientsSection />
      <HeatMapSection />
      <NotificationsSection />
      <OceanSection />
      <ObservationsSection />

      <Footer />
    </div>
  );
}
