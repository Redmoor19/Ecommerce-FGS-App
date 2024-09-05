import { Skeleton } from "@/components/ui/skeleton"

const PopularGamesSkeleton = () => {
  return (
    <section className="container flex justify-center items-center gap-7 py-20 flex-col">
      <h2 className="text-center text-3xl bg-gradient text-transparent bg-clip-text ">
        Most popular games last month
      </h2>
      <div className="flex justify-center  gap-5 items-center ">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton className="h-[50vh] aspect-[9/14]" key={i} />
        ))}
      </div>
    </section>
  )
}

export default PopularGamesSkeleton
