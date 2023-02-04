import type { NextPage } from 'next';
import Head from 'next/head';
import AlgoCards from './AlgoCards';

const Home: NextPage = () => {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center border-4 border-green-800">
      <Head>
        <title>Algo Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AlgoCards />
    </div>
  );
};

export default Home;
