import { sleep } from "./SortAlgoUtil";

// const merge = async (left: any, right: any, helperObjectArrayLeft:any, helperObjectArrayRight:any, setDataset: any, speedValue: number) => {
//   let sortedDataset = []

//   while (left.length && right.length) { 
//     if (left[0] < right[0]) {
//       sortedDataset.push(left.shift())
//     } else {
//       sortedDataset.push(right.shift())
//     }
//       setDataset([...helperObjectArrayLeft.tempArray, ...sortedDataset, ...left, ...right, ...helperObjectArrayRight.tempArray]);
//       await sleep(speedValue);
//   }

//   // spreading the remaining left or right array to the end
//   return [...sortedDataset, ...left, ...right]
// }

// export const MergeSort = async (
//   dataset: number[],
//   offDataset: {position: string, tempArray: number[]},
//   setDataset: React.Dispatch<React.SetStateAction<number[]>>, 
//   speedValue: number,
// ): Promise<any> => {
//   let _dataset = dataset;
//   if (_dataset.length < 2) return _dataset

//   const mid = Math.floor(dataset.length / 2);
  
//   // On initial recursion, the left and right helpers are set to default since the array has not been split yet
//   let helperObjectArrayRight: {position: string, tempArray: number[]} = {
//     position: 'right',
//     tempArray: [..._dataset.slice(mid)]
//   }

//   let helperObjectArrayLeft: {position: string, tempArray: number[]} = {
//     position: 'left',
//     tempArray: [..._dataset.slice(0, mid)]
//   }

//   // On subsequent recursions, need to add the passed dataset to the subsequent recrusion datasets.
//   if (offDataset.position === "right") { 
//     helperObjectArrayRight = {
//       position: 'right',
//       tempArray: [..._dataset.slice(mid), ...offDataset.tempArray]
//     }
//   }

//   if (offDataset.position === "left") { 
//     helperObjectArrayLeft = {
//       position: 'left',
//       tempArray: [...offDataset.tempArray, ..._dataset.slice(0, mid)]
//     }
//   }

//   const left = await MergeSort(_dataset.slice(0, mid), helperObjectArrayRight, setDataset, speedValue)
//   const right = await MergeSort(_dataset.slice(mid), helperObjectArrayLeft, setDataset, speedValue)

//   return await merge(left, right, helperObjectArrayLeft, helperObjectArrayRight, setDataset, speedValue);
// }

// const merge = async (left: any, right: any, setDataset: any, speedValue: number) => {
//   let sortedDataset = []

//   while (left.length && right.length) { 
//     if (left[0] < right[0]) {
//       sortedDataset.push(left.shift())
//     } else {
//       sortedDataset.push(right.shift())
//     }
//   }

//   // spreading the remaining left or right array to the end
//   return [...sortedDataset, ...left, ...right]
// }

// const MergeSort = async (
//   dataset: number[],
//   setDataset: React.Dispatch<React.SetStateAction<number[]>>, 
//   speedValue: number,
// ): Promise<any> => {
//   if (dataset.length < 2) return dataset
//   const mid = Math.floor(dataset.length / 2);

//   const left = await MergeSort(dataset.slice(0, mid), setDataset, speedValue)
//   const right = await MergeSort(dataset.slice(mid), setDataset, speedValue)

//   return await merge(left, right, setDataset, speedValue);
// }

export const MergeSort = async (
  dataset: number[],
  setDataset: React.Dispatch<React.SetStateAction<number[]>>, 
  speedValue: number,
): Promise<any> => {
  const n = dataset.length;
  let size = 1;

  while (size < n) {
    for (let i = 0; i < n - size; i += size * 2) {
      const left = i;
      const mid = i + size - 1;
      const right = Math.min(i + size * 2 - 1, n - 1);
      merge(dataset, left, mid, right, setDataset, speedValue);
    }
    size *= 2;
  }

  return dataset;
}

function merge(dataset: any, left: any, mid: any, right: any, setDataset: any, speedValue: any) {
  const temp = [];
  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    if (dataset[i] < dataset[j]) {
      temp.push(dataset[i]);
      i++;
    } else {
      temp.push(dataset[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(dataset[i]);
    i++;
  }

  while (j <= right) {
    temp.push(dataset[j]);
    j++;
  }

  for (let i = 0; i < temp.length; i++) {
    dataset[left + i] = temp[i];
  }
}

const testArray = [7, 11, 2, 1, 9 , 4]