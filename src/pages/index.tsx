import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import OceanSection from '../components/sections/OceanSection';
import ClientsSection from '../components/sections/ClientsSection';
import NotificationsSection from '../components/sections/NotificationsSection';

import mapBg from '../../public/images/map.png';

const appTypes = ['fishing', 'sailing'];

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { type } = req.cookies;

  return {
    props: {
      type: type ? type.toLowerCase() : null,
    },
  };
};

export default function Home({ type }: { type: string }) {
  const { query } = useRouter();
  const [storeType, setStoreType] = useState('');
  console.log('🚀 ~ storeType', storeType);

  useEffect(() => {
    const queryType = query?.type as string;

    if (queryType) {
      const lowerCaseType = queryType.toLowerCase();
      const validType = appTypes.includes(lowerCaseType);

      if (validType) {
        setCookie('type', lowerCaseType);
        setStoreType(lowerCaseType);
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
      <HeroSection />
      <ClientsSection />

      <div className="relative flex aspect-video w-full flex-col items-center justify-center">
        <Image
          src={mapBg}
          alt="Sea heat map"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <NotificationsSection />
      <OceanSection />
    </div>
  );
}
