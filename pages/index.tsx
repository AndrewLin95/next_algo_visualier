import type { NextPage } from 'next';
import Head from 'next/head';
import { PagesData } from '../utils/PagesData';

const pageData = PagesData();

const Home: NextPage = () => {
  console.log(pageData);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Algo Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {Object.entries(pageData).map(([key, value]) => (
          <div key={key}>{value.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
