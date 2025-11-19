import React from "react";

interface BreadcrumbItem {
  label: string;
  icon?: React.ElementType;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="hidden md:flex items-center text-sm mb-6">
      {items.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center">
            {item.onClick ? (
              <button
                onClick={item.onClick}
                className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </button>
            ) : (
              <span className="flex items-center gap-1.5 text-gray-900 font-medium">
                {Icon && <Icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </span>
            )}

            {!isLast && <span className="mx-2 text-gray-400">{">"}</span>}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
