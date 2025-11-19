import { formatDateShort } from "../../utils/dateUtils";
import MobileCard from "../Common/MobileCard";
import type { IPO } from "../../types/ipoTypes";

interface Props {
  ipo: IPO;
  onClick: () => void;
}

const IPOMobileCard = ({ ipo, onClick }: Props) => {
  const statusColors = {
    Open: "text-green-600",
    Closed: "text-orange-600",
    Listed: "text-blue-600",
  };

  return (
    <MobileCard
      icon={ipo.logo}
      title={ipo.companyName}
      subtitle={ipo.issueSize}
      onClick={onClick}
      status={ipo.status}
      statusColor={statusColors[ipo.status] || "text-gray-600"}
      info={[
        { label: "Price Range", value: ipo.priceRange },
        { label: "Min Investment", value: ipo.minInvestment },
        { label: "Issue Date", value: formatDateShort(ipo.issueDate) },
        { label: "Lot Size", value: ipo.lotSize },
      ]}
    />
  );
};

export default IPOMobileCard;
