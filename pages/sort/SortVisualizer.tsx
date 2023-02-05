import { FC } from 'react';

interface Props {
  dataset: number[];
}

const SortVisualizer: FC<Props> = ({ dataset }) => {
  const customWidth = (100 / dataset.length).toString() + '%';
  return (
    <div className="w-full h-full border border-emerald-400">
      <div className="flex flex-row justify-between w-full h-5/6">
        {Object.entries(dataset).map(([key, value]) => {
          const customHeight = value / 10 + '%';
          const customColorWeight = `rgba(106, 90, 205, ${value / 1000})`;
          return (
            <div
              key={key}
              className={`border`}
              style={{
                height: customHeight,
                width: customWidth,
                backgroundColor: customColorWeight
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SortVisualizer;
