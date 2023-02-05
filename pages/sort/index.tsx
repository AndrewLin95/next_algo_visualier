import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { SortAlgoStates } from '../../utils/SortAlgoUtil';

import AlgoSidebar from '../../components/AlgoSidebar';
import SortVisualizer from './SortVisualizer';

// https://www.geeksforgeeks.org/sorting-algorithms/

const index: NextPage = () => {
  const [sortAlgoStates, setSortAlgoStates] = useState<SortAlgoStates>(
    SortAlgoStates.Quick
  );

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
      <Head>
        <title>Algo Visualizer - Sort</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row w-full h-full border border-teal-500">
        <AlgoSidebar
          sortAlgoStates={sortAlgoStates}
          setSortAlgoStates={setSortAlgoStates}
        />
        <SortVisualizer />
      </div>
    </div>
  );
};

export default index;
