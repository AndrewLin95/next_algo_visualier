import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { SortAlgoStates } from '../../utils/SortAlgoUtil';

import AlgoSidebar from '../../components/AlgoSidebar';
import SortVisualizer from './SortVisualizer';

// https://www.geeksforgeeks.org/sorting-algorithms/

const index: NextPage = () => {
  useEffect(() => {
    randomizedDataSet();
  }, []);

  const [sortAlgoStates, setSortAlgoStates] = useState<SortAlgoStates>(
    SortAlgoStates.Quick
  );
  const [speedSliderValue, setSpeedSliderValue] = useState('2');
  const [itemSliderValue, setItemSliderValue] = useState('55');
  const [dataset, setDataset] = useState<number[]>([]);

  const handleSpeedSliderChange = (value: string) => {
    setSpeedSliderValue(value);
  };

  const handleItemSliderChange = (value: string) => {
    setItemSliderValue(value);
  };

  const randomizedDataSet = () => {
    const targetNumItems = parseInt(itemSliderValue);
    let newDataset = [];
    let i = 0;
    while (i < targetNumItems) {
      const value = Math.floor(Math.random() * 1001);
      newDataset.push(value);
      i++;
    }
    setDataset(newDataset);
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
          randomizedDataSet={randomizedDataSet}
        />
        <div className="p-12 w-full h-full">
          <SortVisualizer dataset={dataset} />
        </div>
      </div>
    </div>
  );
};

export default index;
