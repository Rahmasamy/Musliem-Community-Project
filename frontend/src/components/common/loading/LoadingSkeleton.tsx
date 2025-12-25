export function LoadingSkeleton({ count = 2 }: { count?: number }) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-5 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-full sm:w-[47%] h-[400px] sm:h-[500px] lg:h-[550px]
                     rounded-lg bg-gray-200 animate-pulse"
        >
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
