import Container from "../Layout/Container";

const SkeletonIPODetails = () => {
  return (
    <div className="animate-pulse bg-gray-50 min-h-screen py-6 md:py-10">
      <Container>
        <div className="space-y-10">

          {/* Breadcrumb / Back */}
          <div className="h-4 w-32 skeleton"></div>

          {/* Header Section */}
          <div className="flex items-center justify-between">
            {/* Logo + Company Name */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full skeleton"></div>

              <div className="space-y-2">
                <div className="h-5 w-48 skeleton"></div>
                <div className="h-4 w-24 skeleton"></div>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-3">
              <div className="h-10 w-28 rounded-lg skeleton"></div>
              <div className="h-10 w-28 rounded-lg skeleton"></div>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <div className="md:hidden">
            <div className="h-10 w-full rounded-lg skeleton"></div>
          </div>

          {/* Stats Cards Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-4 rounded-xl border space-y-3">
                <div className="h-4 w-20 skeleton"></div>
                <div className="h-5 w-24 skeleton"></div>
              </div>
            ))}
          </div>

          {/* Horizontal Timeline (Desktop) */}
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-xl border">
              <div className="flex justify-between items-start">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 rounded-full skeleton"></div>
                    <div className="h-4 w-20 skeleton"></div>
                    <div className="h-3 w-14 skeleton"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Timeline (Mobile) */}
          <div className="md:hidden space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full skeleton"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 skeleton"></div>
                  <div className="h-3 w-20 skeleton"></div>
                </div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="space-y-4 bg-white p-6 rounded-xl border">
            <div className="h-5 w-40 skeleton"></div>

            <div className="space-y-2">
              <div className="h-4 w-full skeleton"></div>
              <div className="h-4 w-4/5 skeleton"></div>
              <div className="h-4 w-3/5 skeleton"></div>
            </div>
          </div>

          {/* Mobile Download */}
          <div className="md:hidden">
            <div className="h-10 w-full rounded-lg skeleton"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkeletonIPODetails;
