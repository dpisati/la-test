import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import sailorBg from '../../public/images/hero-background-sailing.png';
import Hero from '../components/Hero';
import Users from '../components/Users';

export default function Home() {
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

      <div className="flex flex-col justify-center h-[820px] w-full relative">
        <div className="w-full h-[820px] absolute">
          <Image
            className=" object-cover"
            src={sailorBg}
            alt="Ship on the ocean"
            fill
          />
        </div>

        <Header />
        <Hero />
      </div>

      <Users />
    </div>
  );
}
