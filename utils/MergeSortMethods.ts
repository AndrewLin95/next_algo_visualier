import { sleep } from "./SortAlgoUtil";

const merge = async (left: any, right: any, helperObjectArrayLeft:any, helperObjectArrayRight:any, setDataset: any, speedValue: number) => {
  let sortedDataset = []

  while (left.length && right.length) { 
    if (left[0] < right[0]) {
      sortedDataset.push(left.shift())
    } else {
      sortedDataset.push(right.shift())
    }
      setDataset([...helperObjectArrayLeft.tempArray, ...sortedDataset, ...left, ...right, ...helperObjectArrayRight.tempArray]);
      await sleep(speedValue);
  }

  // spreading the remaining left or right array to the end
  return [...sortedDataset, ...left, ...right]
}

export const MergeSort = async (
  dataset: number[],
  offDataset: {position: string, tempArray: number[]},
  setDataset: React.Dispatch<React.SetStateAction<number[]>>, 
  speedValue: number,
): Promise<any> => {
  let _dataset = dataset;
  if (_dataset.length < 2) return _dataset

  const mid = Math.floor(dataset.length / 2);
  
  // On initial recursion, the left and right helpers are set to default since the array has not been split yet
  let helperObjectArrayRight: {position: string, tempArray: number[]} = {
    position: 'right',
    tempArray: [..._dataset.slice(mid)]
  }

  let helperObjectArrayLeft: {position: string, tempArray: number[]} = {
    position: 'left',
    tempArray: [..._dataset.slice(0, mid)]
  }

  // On subsequent recursions, need to add the passed dataset to the subsequent recrusion datasets.
  if (offDataset.position === "right") { 
    helperObjectArrayRight = {
      position: 'right',
      tempArray: [..._dataset.slice(mid), ...offDataset.tempArray]
    }
  }

  if (offDataset.position === "left") { 
    helperObjectArrayLeft = {
      position: 'left',
      tempArray: [...offDataset.tempArray, ..._dataset.slice(0, mid)]
    }
  }

  const left = await MergeSort(_dataset.slice(0, mid), helperObjectArrayRight, setDataset, speedValue)
  const right = await MergeSort(_dataset.slice(mid), helperObjectArrayLeft, setDataset, speedValue)

  return await merge(left, right, helperObjectArrayLeft, helperObjectArrayRight, setDataset, speedValue);
}
