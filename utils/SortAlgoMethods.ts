export const QuickSort = (dataset: number[]): number[] => {
  debugger;
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
    return [...QuickSort(leftArray), pivotValue, ...QuickSort(rightArray)]
  } else if (leftArray.length > 0) {
    return [...QuickSort(leftArray), pivotValue]
  } else {
    return [pivotValue, ...QuickSort(rightArray)]
  }
}