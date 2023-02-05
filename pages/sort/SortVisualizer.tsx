import { FC } from 'react';

interface Props {
  dataset: number[];
}

const SortVisualizer: FC<Props> = ({ dataset }) => {
  return (
    <div className="w-full h-full border border-emerald-400">
      <div>CONTENT</div>
    </div>
  );
};

export default SortVisualizer;
