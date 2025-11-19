interface MobileCardInfoItem {
  label: string;
  value: string | number;
}

interface MobileCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  info: MobileCardInfoItem[];
  status?: string;
  statusColor?: string;
  actionLabel?: string;
  onClick?: () => void;
}

const MobileCard = ({
  icon,
  title,
  subtitle,
  info,
  status,
  statusColor = "text-gray-600",
  actionLabel = "View Details →",
  onClick,
}: MobileCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer hover:border-blue-300 transition-colors"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
              {icon}
            </div>
          )}

          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {subtitle && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
        {info.map((item, i) => (
          <div key={i}>
            <p className="text-gray-500">{item.label}</p>
            <p className="font-medium text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      {(status || actionLabel) && (
        <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
          {status && (
            <span className={`text-sm font-medium ${statusColor}`}>
              {status}
            </span>
          )}

          <span className="text-sm text-gray-500">{actionLabel}</span>
        </div>
      )}
    </div>
  );
};

export default MobileCard;
