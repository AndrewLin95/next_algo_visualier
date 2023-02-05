import { FC } from 'react';

interface Props {
  speedSliderValue: string;
  handleSpeedSliderChange: (value: string) => void;
  itemSliderValue: string;
  handleItemSliderChange: (value: string) => void;
  randomizedDataSet: () => void;
  runAlgo: () => void;
}

const AlgoSidebarControls: FC<Props> = ({
  speedSliderValue,
  handleSpeedSliderChange,
  itemSliderValue,
  handleItemSliderChange,
  randomizedDataSet,
  runAlgo
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row px-3 gap-2">
        <span className="w-2/6">Speed</span>
        <input
          className="w-4/6"
          onChange={(value) => handleSpeedSliderChange(value.target.value)}
          type="range"
          min="1"
          max="3"
          value={speedSliderValue}
        />
      </div>
      <div className="flex flex-row px-3 gap-2">
        <span className="w-2/6">Items</span>
        <input
          className="w-4/6"
          onChange={(value) => handleItemSliderChange(value.target.value)}
          type="range"
          min="10"
          max="100"
          value={itemSliderValue}
        />
      </div>
      <div className="px-3 gap-2">
        <button
          type="button"
          className="w-full border border-indigo-800 bg-gray-800"
          onClick={() => randomizedDataSet()}
        >
          Generate New Dataset
        </button>
      </div>
      <div className="px-3 gap-2">
        <button
          type="button"
          className="w-full border border-indigo-800 bg-gray-800"
          onClick={() => runAlgo()}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default AlgoSidebarControls;
