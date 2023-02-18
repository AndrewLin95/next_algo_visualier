const swap = (_dataset: number[], left: number, right:number) =>  {
  const temp = _dataset[left]
  _dataset[left] = _dataset[right]
  _dataset[right] = temp;
}

const partitionHigh = async (_dataset: number[], start: number, end:any, setDataset: React.Dispatch<React.SetStateAction<number[]>>, speedValue: number) => {
  //Pick the first element as pivot
  let pivot = _dataset[end];
  let i = start;
  
  //Partition the array into two parts using the pivot
  let j = start;
  while(j < end) {
    if (_dataset[j] <= pivot) {
      swap(_dataset, i, j);

      const tempDataset = [..._dataset]
      setDataset(tempDataset);
      await sleep(speedValue);
      i++;
    }
    j++;
  }
  
  swap(_dataset, i, end);
  
  //Return the pivot index
  return i;
}

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const QuickSort = async (dataset: number[], setDataset: React.Dispatch<React.SetStateAction<number[]>>, speedValue: number): Promise<number[]> => {
  // https://learnersbucket.com/examples/algorithms/quick-sort-iterative/

  //Stack for storing start and end index
  let _dataset = dataset;
  let stack: any = [];
  
  //Get the start and end index
  let start = 0;
  let end = _dataset.length - 1;
  
  //Push start and end index in the stack
  stack.push({x: start, y: end});
  
  //Iterate the stack
  while(stack.length){
    //Get the start and end from the stack
    const { x, y } = stack.shift();
    
    //Partition the array along the pivot
    const PI = await partitionHigh(_dataset, x, y, setDataset, speedValue);
    
    //Push sub array with less elements than pivot into the stack
    if(PI - 1 > x){
      stack.push({x: x, y: PI - 1});
    }
    
    //Push sub array with greater elements than pivot into the stack
    if(PI + 1 < y){
      stack.push({x: PI + 1, y: y});
    }
  }

  return _dataset;
}

// ----------RECURSIVE----------

export const QuickSortRecursive = (dataset: number[]): number[] => {
  https://www.youtube.com/watch?v=P6XGSKO2RzI

  if (dataset.length === 1) {
    return dataset;
  }

  const pivotValue = dataset[Math.floor(dataset.length / 2)];
  const leftArray: number[] = [];
  const rightArray: number[] = [];

  let i = 0;
  while ( i < dataset.length - 1 ) {
    if (dataset[i] < pivotValue) {
      leftArray.push(dataset[i]);
    } else {
      rightArray.push(dataset[i])
    }
    i++;
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...QuickSortRecursive(leftArray), pivotValue, ...QuickSortRecursive(rightArray)]
  } else if (leftArray.length > 0) {
    return [...QuickSortRecursive(leftArray), pivotValue]
  } else {
    return [pivotValue, ...QuickSortRecursive(rightArray)]
  }
}