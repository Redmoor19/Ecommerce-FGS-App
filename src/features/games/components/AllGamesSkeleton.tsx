import { Skeleton } from "@/components/ui/skeleton"

const AllGamesSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 xl:grid-cols-6 gap-5 justify-self-start">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          className="aspect-[0.666/1] flex flex-col justify-between rounded-lg overflow-hidden"
          key={i}
        >
          <Skeleton className="object-cover w-full h-3/4" />
          <div className="p-2">
            <Skeleton className="h-4 mb-3 w-full" />
            <Skeleton className="h-6" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllGamesSkeleton
