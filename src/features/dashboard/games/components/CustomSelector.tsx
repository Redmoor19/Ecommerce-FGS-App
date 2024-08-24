import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from "@/components/ui/multiselect"

type CustomSelectorProps = {
  value: string[]
  setValue: (value: string[]) => void
  items: string[]
  placeholder: string
}

const CustomSelector = ({ value, setValue, items, placeholder }: CustomSelectorProps) => {
  return (
    <MultiSelector values={value} onValuesChange={setValue} loop className="max-w-xs">
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder={placeholder} />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {items.map((item) => (
            <MultiSelectorItem key={item} value={item}>
              {item}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}

export default CustomSelector
