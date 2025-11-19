import { Home } from "lucide-react";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import IPOMobileCard from "../components/IPO/IPOMobileCard";
import IPOTableRow from "../components/IPO/IPOTableRow";

import Container from "../components/Layout/Container";
import TableHeader from "../components/Table/TableHeader";

import type { IPO } from "../types/ipoTypes";

interface IPOListPageProps {
  ipoList: IPO[];
  onSelectIPO: (ipo: IPO) => void;
}

const IPOListPage = ({ ipoList, onSelectIPO }: IPOListPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <Container>
          <Breadcrumb items={[{ label: "Home", icon: Home }]} />

          <h1 className="text-3xl font-bold text-gray-900 mb-6">IPO List</h1>
        </Container>
      </div>

      {/* Desktop List */}
      <div className="hidden md:block">
        <Container>
          <div className="bg-white rounded-xl border overflow-hidden">
            <table className="w-full">
              <TableHeader
                columns={[
                  { label: "Company / Issue date" },
                  { label: "Issue size" },
                  { label: "Price range" },
                  { label: "Min invest/qty", className: "text-center" }, // ← center this one
                ]}
              />

              <tbody>
                {ipoList.map((ipo) => (
                  <IPOTableRow
                    key={ipo.id}
                    ipo={ipo}
                    onClick={() => onSelectIPO(ipo)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>

      {/* Mobile List */}
      <div className="md:hidden">
        <Container>
          <div className="space-y-4">
            {ipoList.map((ipo) => (
              <IPOMobileCard
                key={ipo.id}
                ipo={ipo}
                onClick={() => onSelectIPO(ipo)}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default IPOListPage;
