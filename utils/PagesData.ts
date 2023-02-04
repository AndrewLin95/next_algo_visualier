import { IPageData } from "./models"

export const pagesData: () => IPageData[] = () => {
  return (
    [
      {
        img: 'null',
        name: "Sorting Algorithm",
        link: "/sort",
      },
      {
        img: 'null',
        name: "Searching Algorithm",
        link: "/search",
      }
    ]
  )
}