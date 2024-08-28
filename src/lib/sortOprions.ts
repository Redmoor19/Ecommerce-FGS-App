import { SortOptionType } from "@/components/GameSortBy"

const sortOptions: SortOptionType[] = [
  {
    key: "releaseDate",
    label: "release date",
    asc: "old to new",
    desc: "new to old"
  },
  {
    key: "name",
    label: "name",
    asc: "A to Z",
    desc: "Z to A"
  },
  {
    key: "price",
    label: "price",
    asc: "low to high",
    desc: "hight to low"
  },
  {
    key: "quantity",
    label: "quantity",
    asc: "low to high",
    desc: "hight to low"
  },
  {
    key: "averageRating",
    label: "rating",
    asc: "low to high",
    desc: "hight to low"
  }
]

export default sortOptions
