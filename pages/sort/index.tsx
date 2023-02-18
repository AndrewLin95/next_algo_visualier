import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { SortAlgoStates } from '../../utils/SortAlgoUtil';
import { randomizeDataSet } from '../../utils/randomizeDataSet';

import AlgoSidebar from '../../components/AlgoSidebar';
import SortVisualizer from './SortVisualizer';
import { QuickSort } from '../../utils/QuickSortMethods';
import { BubbleSort } from '../../utils/BubbleSortMethods';

// https://www.geeksforgeeks.org/sorting-algorithms/

const index: NextPage = () => {
  const [sortAlgoStates, setSortAlgoStates] = useState<SortAlgoStates>(
    SortAlgoStates.Quick
  );
  const [speedSliderValue, setSpeedSliderValue] = useState('25');
  const [speedValue, setSpeedValue] = useState<number>(25);
  const [itemSliderValue, setItemSliderValue] = useState('150');
  const [dataset, setDataset] = useState<number[]>([]);

  // Natively, the slider bar goes from low to high. This inverses it and uses it for the algorithm
  useEffect(() => {
    setSpeedValue(52 - parseInt(speedSliderValue));
  }, [speedSliderValue]);

  const handleSpeedSliderChange = (value: string) => {
    setSpeedSliderValue(value);
  };

  const handleItemSliderChange = (value: string) => {
    setItemSliderValue(value);
  };

  useEffect(() => {
    handleGenerateNewDataset();
  }, []);

  const handleGenerateNewDataset = () => {
    const newDataset = randomizeDataSet(itemSliderValue);
    setDataset(newDataset);
  };

  const runAlgo = async () => {
    switch (sortAlgoStates) {
      case SortAlgoStates.Quick:
        const quickSortedDataset = await QuickSort(
          dataset,
          setDataset,
          speedValue
        );
        setDataset([...quickSortedDataset]);
        break;
      case SortAlgoStates.Bubble:
        const bubbleSortedDataset = await BubbleSort(
          dataset,
          setDataset,
          speedValue
        );
        setDataset([...bubbleSortedDataset]);
      default:
        break;
    }
  };

  // TODO: Chooseable colors

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
          runAlgo={runAlgo}
          handleGenerateNewDataset={handleGenerateNewDataset}
        />
        <div className="p-12 w-full h-full">
          <SortVisualizer dataset={dataset} />
        </div>
      </div>
    </div>
  );
};

export default index;
