import { useEffect, useState } from "react"

const useLocalState = <T,>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    const localItem = localStorage.getItem(key)
    return localItem != null ? JSON.parse(localItem) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState] as const
}

export default useLocalState
