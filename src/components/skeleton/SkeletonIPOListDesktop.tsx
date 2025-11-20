const SkeletonIPOListDesktop = () => {
  return (
    <div className="bg-white rounded-xl border overflow-hidden animate-pulse">
      <table className="w-full">
        {/* Header */}
        <thead className="bg-gray-50">
          <tr>
            {["Company / Issue date", "Issue size", "Price range", "Min invest/qty"].map((h) => (
              <th key={h} className="text-left p-4 text-gray-600 text-sm">
                <div className="h-4 w-32 skeleton"></div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Rows */}
        <tbody>
          {[1, 2, 3, 4].map((i) => (
            <tr key={i} className="border-t">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full skeleton"></div>
                  <div>
                    <div className="h-4 w-40 mb-2 skeleton"></div>
                    <div className="h-3 w-28 skeleton"></div>
                  </div>
                </div>
              </td>

              <td className="p-4">
                <div className="h-4 w-20 skeleton"></div>
              </td>

              <td className="p-4">
                <div className="h-4 w-24 skeleton"></div>
              </td>

              <td className="p-4 text-center">
                <div className="h-4 w-28 mx-auto skeleton"></div>
                <div className="h-3 w-20 mx-auto mt-2 skeleton"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonIPOListDesktop;
