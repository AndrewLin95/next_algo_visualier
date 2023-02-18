export enum SortAlgoStates {
  Quick = "Quick",
  Merge = "Merge",
  Heap = "Heap",
  Bubble = "Bubble",
  OptimizedBubble = "Optimized Bubble"
}

interface SortAlgoMetaData {
  name: SortAlgoStates;
  complexity: {
    short: string,
    long: string,
  },
  memory: {
    short: string,
    long: string,
  },
  method: {
    short: string,
    long: string,
  },
  preferredType: string
}

export const SortAlgoTypes: SortAlgoMetaData[] = 
[
  {
    name: SortAlgoStates.Quick,
    complexity: {
      short: "nlogn",
      long: "description",
    },
    memory: {
      short: "logn",
      long: "description",
    },
    method: {
      short: "Partitioning",
      long: "description,"
    }, 
    preferredType: "Recursion",
  },
  {
    name: SortAlgoStates.Merge,
    complexity: {
      short: "nlogn",
      long: "description",
    },
    memory: {
      short: "n",
      long: "description",
    },
    method: {
      short: "Merging",
      long: "description",
    },
    preferredType: "Recursion",
  },
  {
    name: SortAlgoStates.Heap,
    complexity: {
      short: "nlogn",
      long: "description",
    },
    memory: {
      short: "1",
      long: "description",
    },
    method: {
      short: "Selection",
      long: "description",
    },
    preferredType: "Recursion",
  },
  {
    name: SortAlgoStates.Bubble,
    complexity: {
      short: "n2",
      long: "description",
    },
    memory: {
      short: "1",
      long: "description",
    },
    method: {
      short: "Exchanging",
      long: "description",
    },
    preferredType: "Iterative",
  },
  {
    name: SortAlgoStates.OptimizedBubble,
    complexity: {
      short: "n2",
      long: "description",
    },
    memory: {
      short: "1",
      long: "description",
    },
    method: {
      short: "Exchanging",
      long: "description",
    },
    preferredType: "Iterative",
  }
]

export const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}