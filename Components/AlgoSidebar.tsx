import { FC } from 'react';
import { SortAlgoStates, SortAlgoTypes } from '../utils/SortAlgoStates';
import AlgoSidebarControls from './AlgoSidebarControls';

interface Props {
  sortAlgoStates: SortAlgoStates;
  setSortAlgoStates: React.Dispatch<React.SetStateAction<SortAlgoStates>>;
}

const AlgoSidebar: FC<Props> = ({ sortAlgoStates, setSortAlgoStates }) => {
  return (
    <div className="h-full w-48 border border-yellow-300">
      {Object.entries(SortAlgoTypes).map(([key, value]) => {
        return (
          <div key={key}>
            <div>{value.name}</div>

            <AlgoSidebarControls />
          </div>
        );
      })}
    </div>
  );
};

export default AlgoSidebar;
