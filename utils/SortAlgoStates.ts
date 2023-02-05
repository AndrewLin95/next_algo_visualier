export enum SortAlgoStates {
  Quick = "Quick",
  Merge = "Merge",
  Heap = "Heap",
  Bubble = "Bubble",
}

export const SortAlgoTypes = 
[
  {
    name: "Quick",
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
    }
  },
  {
    name: "Merge",
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
    }
  },
  {
    name: "Heap",
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
    }
  },
  {
    name: "Bubble",
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
    }
  }
]
