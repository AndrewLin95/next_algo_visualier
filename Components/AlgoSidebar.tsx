import { FC } from 'react';
import { SortAlgoStates, SortAlgoTypes } from '../utils/SortAlgoUtil';
import AlgoSidebarControls from './AlgoSidebarControls';

interface Props {
  sortAlgoStates: SortAlgoStates;
  setSortAlgoStates: React.Dispatch<React.SetStateAction<SortAlgoStates>>;
  speedSliderValue: string;
  handleSpeedSliderChange: (value: string) => void;
  itemSliderValue: string;
  handleItemSliderChange: (value: string) => void;
  randomizedDataSet: () => void;
}

const AlgoSidebar: FC<Props> = ({
  sortAlgoStates,
  setSortAlgoStates,
  speedSliderValue,
  handleSpeedSliderChange,
  itemSliderValue,
  handleItemSliderChange,
  randomizedDataSet
}) => {
  const handleAlgoTypeClick = (type: SortAlgoStates) => {
    setSortAlgoStates(type);
  };

  return (
    <div className="h-full w-72 border border-yellow-300">
      {Object.entries(SortAlgoTypes).map(([key, value]) => {
        return (
          <div key={key} onClick={() => handleAlgoTypeClick(value.name)}>
            <div>{value.name}</div>
            {sortAlgoStates === value.name && (
              <AlgoSidebarControls
                speedSliderValue={speedSliderValue}
                handleSpeedSliderChange={handleSpeedSliderChange}
                itemSliderValue={itemSliderValue}
                handleItemSliderChange={handleItemSliderChange}
                randomizedDataSet={randomizedDataSet}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AlgoSidebar;
