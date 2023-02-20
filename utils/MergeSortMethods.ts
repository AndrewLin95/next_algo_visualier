import { sleep } from "./SortAlgoUtil";

const merge = async (left: any, right: any, setDataset: any, speedValue: number) => {
  let sortedDataset = []

  while (left.length && right.length) { 
    if (left[0] < right[0]) {
      sortedDataset.push(left.shift())
    } else {
      sortedDataset.push(right.shift())
    }
  }

  // spreading the remaining left or right array to the end
  return [...sortedDataset, ...left, ...right]
}

export const MergeSort = async (
  dataset: number[],
  offDataset: number[],
  setDataset: React.Dispatch<React.SetStateAction<number[]>>, 
  speedValue: number,
): Promise<any> => {
  let _dataset = dataset;
  if (_dataset.length < 2) return _dataset

  const mid = Math.floor(dataset.length / 2);

  const left = await MergeSort(dataset.slice(0, mid), dataset.slice(mid), setDataset, speedValue)
  const right = await MergeSort(dataset.slice(mid), dataset.slice(0, mid), setDataset, speedValue)

  return await merge(left, right, setDataset, speedValue);
}
