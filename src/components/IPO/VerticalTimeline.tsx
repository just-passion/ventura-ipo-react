import { Check } from "lucide-react";
import { formatDateShort } from "../../utils/dateUtils";
import type { IPO } from "../../types/ipoTypes";

interface Props {
  ipo: IPO;
}

const VerticalTimeline = ({ ipo }: Props) => {
  const timelineSteps = [
    { label: "IPO Open", date: formatDateShort(ipo.issueDate), status: "completed" },
    {
      label: "IPO Close",
      date: formatDateShort(ipo.closeDate),
      status: ipo.status === "Open" ? "active" : "completed",
    },
    {
      label: "Allotment",
      date: formatDateShort(ipo.basisOfAllotment),
      status: ipo.status === "Listed" ? "completed" : "upcoming",
    },
    {
      label: "Listing",
      date: formatDateShort(ipo.listingDate),
      status: ipo.status === "Listed" ? "completed" : "upcoming",
    },
  ];

  return (
<div className="space">
  {timelineSteps.map((step, index) => (
    <div key={index} className="flex gap-4">
      <div className="flex flex-col items-center">
        
        {/* Circle */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step.status === "completed"
              ? "bg-green-500"
              : step.status === "active"
              ? "bg-blue-500"
              : "bg-gray-200"
          }`}
        >
          {step.status === "completed" ? (
            <Check className="w-5 h-5 text-white" />
          ) : (
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                step.status === "active" ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          )}
        </div>

        {/* Connector line */}
        {index < timelineSteps.length - 1 && (
          <div
            className={`w-0.5 flex-1 ${
              step.status === "completed" ? "bg-green-500" : "bg-gray-200"
            }`}
          ></div>
        )}
      </div>

      {/* Labels */}
      <div className="flex-1 pb-8">
        <p className="text-sm font-medium text-gray-900">{step.label}</p>
        <p className="text-xs text-gray-500 mt-1">{step.date}</p>
      </div>
    </div>
  ))}
</div>

  );
};

export default VerticalTimeline;
