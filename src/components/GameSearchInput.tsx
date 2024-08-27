import { useSearchParams } from "react-router-dom"
import { Input } from "./ui/input"
import { useEffect, useRef, useState } from "react"
import useDebounce from "@/hooks/useDebounce"

const GameSearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState<string>(() => {
    const search = searchParams.get("search")
    return search != null ? search : ""
  })
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [searchParams])

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value)
    setSearchParams(searchParams)
  }, 700)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearch(value)
    debouncedSearch(value)
  }

  return <Input placeholder="Search games" ref={inputRef} value={search} onChange={handleChange} />
}

export default GameSearchInput
