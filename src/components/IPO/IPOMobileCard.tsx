import type { IPO } from "../../types/ipoTypes";
import { formatDateShort } from "../../utils/dateUtils";

interface IPOMobileCardProps {
  ipo: IPO;
  onClick: () => void;
}

const IPOMobileCard = ({ ipo, onClick }: IPOMobileCardProps) => {
  const getStatusColor = (status: IPO["status"]) => {
    switch (status) {
      case "Open":
        return "text-green-600";
      case "Closed":
        return "text-orange-600";
      case "Listed":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer hover:border-blue-300 transition-colors"
    >
      {/* Logo + Company */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
            {ipo.logo}
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">{ipo.companyName}</h3>
            <p className="text-sm text-gray-500">{ipo.issueSize}</p>
          </div>
        </div>
      </div>

      {/* Key Info Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
        <div>
          <p className="text-gray-500">Price Range</p>
          <p className="font-medium text-gray-900">{ipo.priceRange}</p>
        </div>

        <div>
          <p className="text-gray-500">Min Investment</p>
          <p className="font-medium text-gray-900">{ipo.minInvestment}</p>
        </div>

        <div>
          <p className="text-gray-500">Issue Date</p>
          <p className="font-medium text-gray-900">
            {formatDateShort(ipo.issueDate)}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Lot Size</p>
          <p className="font-medium text-gray-900">{ipo.lotSize}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className={`text-sm font-medium ${getStatusColor(ipo.status)}`}>
          {ipo.status}
        </span>

        <span className="text-sm text-gray-500">View Details →</span>
      </div>
    </div>
  );
};

export default IPOMobileCard;
