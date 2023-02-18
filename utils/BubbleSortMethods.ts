import { sleep } from "./SortAlgoUtil";

export const BubbleSort = async (
  dataset: number[], 
  setDataset: React.Dispatch<React.SetStateAction<number[]>>, 
  speedValue: number
) => {
  let _dataset = dataset;

  let i = 0;
  let j = 0;
  while (i < dataset.length - 1) {
    while (j < (dataset.length - 1 - i)) {
      if (_dataset[j] > _dataset[j + 1]) {
        // swap
        [_dataset[j], dataset[j + 1]] = [dataset[j + 1], dataset[j]]
        // visualization
        const tempDataset = [..._dataset]
        setDataset(tempDataset)
        await sleep(speedValue)
      }
      j++;
    }
    j = 0;
    i++;
  }

  return _dataset
}
