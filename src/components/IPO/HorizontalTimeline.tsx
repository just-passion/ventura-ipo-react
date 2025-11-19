import { Check } from "lucide-react";
import { formatDateShort } from "../../utils/dateUtils";
import type { IPO } from "../../types/ipoTypes";

interface HorizontalTimelineProps {
  ipo: IPO;
}

const HorizontalTimeline = ({ ipo }: HorizontalTimelineProps) => {
  const timelineSteps = [
    {
      label: "IPO Open",
      date: formatDateShort(ipo.issueDate),
      status: "completed",
    },
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
    <div className="relative w-full">
      <div className="flex justify-between items-start">
        {timelineSteps.map((step, index) => {
          const isCompleted = step.status === "completed";
          const isActive = step.status === "active";

          return (
            <div
              key={index}
              className="relative flex flex-col items-center flex-1"
            >
              {/* Connector Line */}
              {index !== 0 && (
                <div
                  className={`absolute -left-1/2 top-5 w-full h-0.5 
                  ${isCompleted ? "bg-green-500" : "bg-gray-200"}`}
                />
              )}

              {/* Step Indicator */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center z-10
                  ${
                    isCompleted
                      ? "bg-green-500"
                      : isActive
                      ? "bg-blue-500"
                      : "bg-gray-200"
                  }
                `}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <div
                    className={`
                      w-3 h-3 rounded-full
                      ${isActive ? "bg-white" : "bg-gray-400"}
                    `}
                  />
                )}
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-gray-900">{step.label}</p>
                <p className="text-xs text-gray-500 mt-1">{step.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
