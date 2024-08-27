import { useSearchParams } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select"
import { SortType } from "@/types/game"

type GameSortByProps = {
  options: SortOptionType[]
}

export type SortOptionType = {
  label: string
  key: SortType
  asc: string
  desc: string
}

const GameSortBy = ({ options }: GameSortByProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const mappedOptions = options.flatMap((option) => [
    {
      title: `Sort by ${option.label} (${option.asc})`,
      sort: option.key,
      order: "asc"
    },
    {
      title: `Sort by ${option.label} (${option.desc})`,
      sort: option.key,
      order: "desc"
    }
  ])

  function changeHandler(e: string) {
    const [sort, order] = e.split(":")

    searchParams.set("sort", sort)
    searchParams.set("order", order)
    setSearchParams(searchParams)
  }

  function selectedValue() {
    const sort = searchParams.get("sort")
    const order = searchParams.get("order")

    return sort && order ? `${sort}:${order}` : ""
  }

  return (
    <Select onValueChange={changeHandler} value={selectedValue()}>
      <SelectTrigger className="min-w-[300px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {mappedOptions.map((option) => (
            <SelectItem key={option.title} value={`${option.sort}:${option.order}`}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default GameSortBy
