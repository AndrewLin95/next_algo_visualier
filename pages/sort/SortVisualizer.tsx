import { FC, useState } from 'react';
import { SortAlgoStates } from '../../utils/SortAlgoUtil';

interface Props {
  dataset: number[];
}

const SortVisualizer: FC<Props> = ({ dataset }) => {
  // TODO: conditions to update dataset based on inputs

  return (
    <div className="w-full h-full border border-emerald-400">
      <div>CONTENT</div>
    </div>
  );
};

export default SortVisualizer;
