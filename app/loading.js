export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="wallpapers_wrapper animate-pulse">
      <div className="h-96 bg-gray-200 rounded-xl flex items-end">
        <div className="flex flex-col gap-y-2 bg-gray-400 w-full p-4 rounded-b-xl h-16">
          <div className="h-4 bg-gray-800 rounded-full"></div>
          <div className="h-4 w-1/2 bg-gray-800 rounded-full"></div>
        </div>
      </div>
      <div className="h-96 bg-gray-200 rounded-xl flex items-end">
        <div className="flex flex-col gap-y-2 bg-gray-400 w-full p-4 rounded-b-xl h-16">
          <div className="h-4 bg-gray-800 rounded-full"></div>
          <div className="h-4 w-1/2 bg-gray-800 rounded-full"></div>
        </div>
      </div>
      <div className="h-96 bg-gray-200 rounded-xl flex items-end">
        <div className="flex flex-col gap-y-2 bg-gray-400 w-full p-4 rounded-b-xl h-16">
          <div className="h-4 bg-gray-800 rounded-full"></div>
          <div className="h-4 w-1/2 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
