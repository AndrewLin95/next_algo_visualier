import { useState } from 'react';

const AlgoSidebarControls = () => {
  const [speedSliderValue, setSpeedSliderValue] = useState('2');
  const [itemSliderValue, setItemSliderValue] = useState('50');

  const handleSpeedSliderChange = (value: string) => {
    setSpeedSliderValue(value);
  };

  const handleItemSliderChange = (value: string) => {
    setItemSliderValue(value);
  };

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
    </div>
  );
};

export default AlgoSidebarControls;
