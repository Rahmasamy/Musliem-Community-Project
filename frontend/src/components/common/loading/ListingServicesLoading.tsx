export function ListingServicesLoading({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-full sm:w-[320px] lg:w-[340px]"
        >
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-md animate-pulse flex flex-col bg-white">
            
            {/* Image skeleton */}
            <div className="w-full h-[200px] bg-gray-200" />

            {/* Content skeleton */}
            <div className="p-4 flex flex-col flex-grow gap-3">
              {/* Title */}
              <div className="h-5 w-3/4 bg-gray-200 rounded" />

              {/* Description lines */}
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />

              {/* Provider row */}
              <div className="mt-auto flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Footer button skeleton */}
            <div className="p-4 border-t">
              <div className="h-10 w-full bg-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
