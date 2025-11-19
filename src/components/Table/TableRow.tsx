interface TableRowProps {
  columns: {
    key: string;
    render: React.ReactNode;
    className?: string;
  }[];
  onClick?: () => void;
}

const TableRow = ({ columns, onClick }: TableRowProps) => {
  return (
    <tr
      onClick={onClick}
      className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
    >
      {columns.map((col) => (
        <td key={col.key} className={`py-4 px-6 ${col.className || ""}`}>
          {col.render}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
