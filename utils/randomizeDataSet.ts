export const randomizeDataSet = (itemSliderValue: string) => {
  const targetNumItems = parseInt(itemSliderValue);
  let newDataset = [];
  let i = 0;
  while (i < targetNumItems) {
    const value = Math.floor(Math.random() * 1001);
    newDataset.push(value);
    i++;
  }
  return newDataset;
}