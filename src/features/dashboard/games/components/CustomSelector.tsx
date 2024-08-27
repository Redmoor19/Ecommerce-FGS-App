import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from "@/components/ui/multiselect"

type CustomSelectorProps = {
  values: string[]
  setValue: (value: string[]) => void
  items: string[]
  placeholder: string
}

const CustomSelector = ({ values, setValue, items, placeholder }: CustomSelectorProps) => {
  return (
    <MultiSelector values={values} onValuesChange={setValue} loop className="max-w-xs">
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
