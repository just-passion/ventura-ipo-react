import TableRow from "../Table/TableRow";
import type { IPO } from "../../types/ipoTypes";
import { formatDateShort } from "../../utils/dateUtils";

interface Props {
  ipo: IPO;
  onClick: () => void;
}

const IPOTableRow = ({ ipo, onClick }: Props) => {
  const columns = [
    {
      key: "company",
      render: (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">{ipo.logo}</div>
          <div>
            <div className="font-semibold text-gray-900">{ipo.companyName}</div>

            <div className="text-sm text-gray-500">
              {ipo.issueDate && ipo.closeDate
                ? `${formatDateShort(ipo.issueDate)} – ${formatDateShort(ipo.closeDate)}`
                : "To be announced"}
            </div>
          </div>
        </div>
      ),
    },

    {
      key: "issueSize",
      render: <span className="font-semibold text-gray-900">{ipo.issueSize}</span>,
    },

    {
      key: "priceRange",
      render: <span className="font-semibold text-gray-900">{ipo.priceRange}</span>,
    },

    {
      key: "minInvest",
      render: (
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold text-gray-900">{ipo.minInvestment}</div>
          <div className="text-sm text-gray-500">{ipo.lotSize} Shares / 5 Lot</div>
        </div>
      ),
    },

  ];

  return <TableRow columns={columns} onClick={onClick} />;
};

export default IPOTableRow;
