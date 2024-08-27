import { useSearchParams } from "react-router-dom"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from "./ui/multiselect"

type GameMultipleSelectProps = {
  placeholder: string
  items: string[]
  paramKey: string
}

const GameMultipleSelect = ({ items, placeholder, paramKey }: GameMultipleSelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  function getValues() {
    const paramString = searchParams.get(paramKey)
    return paramString != null && paramString != "" ? paramString.split(",") : []
  }

  function setValue(values: string[]) {
    const paramValues = values.join(",")
    searchParams.set(paramKey, paramValues)
    searchParams.set("page", `${1}`)
    setSearchParams(searchParams)
  }

  return (
    <MultiSelector values={getValues()} onValuesChange={setValue} loop className="max-w-xs">
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder={placeholder} />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {items.map((item) => (
            <MultiSelectorItem key={item} value={item}>
              {item
                .toLowerCase()
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}

export default GameMultipleSelect
