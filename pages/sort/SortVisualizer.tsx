import { FC, useState } from 'react';
import { SortAlgoStates } from '../../utils/SortAlgoUtil';

interface Props {
  sortAlgoStates: SortAlgoStates;
  speedSliderValue: string;
  itemSliderValue: string;
}

const SortVisualizer: FC<Props> = ({
  sortAlgoStates,
  speedSliderValue,
  itemSliderValue
}) => {
  // TODO: conditions to update dataset based on inputs
  const [dataset, setDataset] = useState<number[]>();

  const randomizedDataSet = (numItems: string) => {
    const targetNumItems = parseInt(numItems);
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
    <div className="w-full h-full border border-emerald-400">
      <div>CONTENT</div>
    </div>
  );
};

export default SortVisualizer;
