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

  const [speedSliderValue, setSpeedSliderValue] = useState('2');
  const [itemSliderValue, setItemSliderValue] = useState('55');

  const handleSpeedSliderChange = (value: string) => {
    setSpeedSliderValue(value);
  };

  const handleItemSliderChange = (value: string) => {
    setItemSliderValue(value);
  };

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
          speedSliderValue={speedSliderValue}
          handleSpeedSliderChange={handleSpeedSliderChange}
          itemSliderValue={itemSliderValue}
          handleItemSliderChange={handleItemSliderChange}
        />
        <div className="p-12 w-full h-full">
          {sortAlgoStates === SortAlgoStates.Quick && <SortVisualizer />}
        </div>
      </div>
    </div>
  );
};

export default index;
