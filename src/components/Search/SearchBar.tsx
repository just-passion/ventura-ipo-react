import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="relative mb-4">
      <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />

      <input
        type="text"
        value={value}
        placeholder="Search IPOs..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white 
                   focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
};

export default SearchBar;
