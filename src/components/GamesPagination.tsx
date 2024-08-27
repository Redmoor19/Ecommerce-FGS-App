import { useSearchParams } from "react-router-dom"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "./ui/pagination"
import { useEffect } from "react"

type GamesPaginationProps = {
  totalItems: number
  totalPages: number
  gamesPerPage: number
  currentPage: number
  className?: string
}

const GamesPagination = ({
  totalPages,
  currentPage,
  gamesPerPage,
  totalItems,
  className
}: GamesPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    searchParams.set("size", `${gamesPerPage}`)
    if (!searchParams.get("page")) searchParams.set("page", "1")
    setSearchParams(searchParams)
  }, [searchParams.toString()])

  function handlePrev() {
    if (currentPage === 1) return
    searchParams.set("page", `${currentPage - 1}`)
    setSearchParams(searchParams)
  }

  function handleNext() {
    if (currentPage == totalPages) return
    searchParams.set("page", `${currentPage + 1}`)
    setSearchParams(searchParams)
  }

  function handleToPage(page: number) {
    searchParams.set("page", `${page}`)
    setSearchParams(searchParams)
  }

  function getPaginationButtons(totalPages: number, currentPage: number) {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4))
    const endPage = Math.min(totalPages, startPage + 4)
    const buttons = []
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i)
    }
    return buttons
  }

  const buttons = getPaginationButtons(totalPages, currentPage)

  if (totalItems === 0) return null

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrev}
            className={`cursor-pointer select-none ${currentPage === 1 && "cursor-not-allowed"}`}
          />
        </PaginationItem>
        {buttons.map((i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handleToPage(i)}
              isActive={i === currentPage}
              className={`cursor-pointer select-none ${i === currentPage && "cursor-not-allowed"}`}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            className={`cursor-pointer select-none ${
              currentPage === totalPages && "cursor-not-allowed"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default GamesPagination
