const SkeletonIPOListMobile = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white p-4 rounded-xl border space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full skeleton"></div>
            <div className="flex-1">
              <div className="h-4 w-36 mb-2 skeleton"></div>
              <div className="h-3 w-20 skeleton"></div>
            </div>
          </div>

          <div className="h-4 w-28 skeleton"></div>
          <div className="h-4 w-24 skeleton"></div>
          <div className="h-4 w-20 skeleton"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonIPOListMobile;