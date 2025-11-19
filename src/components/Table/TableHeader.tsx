interface TableHeaderProps {
  columns: {
    label: string;
    className?: string;
  }[];
}

const TableHeader = ({ columns }: TableHeaderProps) => (
  <thead className="bg-gray-50 border-b">
    <tr>
      {columns.map((col) => (
        <th key={col.label} className={`py-3.5 px-6 text-sm font-medium text-gray-500 ${col.className || "text-left"}`}>{col.label}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;