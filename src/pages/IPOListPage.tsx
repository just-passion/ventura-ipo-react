import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import IPOMobileCard from "../components/IPO/IPOMobileCard";
import IPOTableRow from "../components/IPO/IPOTableRow";
import Container from "../components/Layout/Container";
import TableHeader from "../components/Table/TableHeader";

import SkeletonIPOListDesktop from "../components/skeleton/SkeletonIPOListDesktop";
import SkeletonIPOListMobile from "../components/skeleton/SkeletonIPOListMobile";

import SearchBar from "../components/Search/SearchBar";

import ErrorBox from "../components/UI/ErrorBox";
import { useDebounce } from "../hooks/useDebounce";

import { getAllIPOs, searchIpos } from "../api/ipoService";
import type { IPO } from "../types/ipoTypes";

const IPOListPage = () => {
  const navigate = useNavigate();

  const [ipos, setIpos] = useState<IPO[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  // ---------------------------
  // 1️⃣ Initial load
  // ---------------------------
  useEffect(() => {
    if (debouncedSearch.trim().length > 0) return;

    setLoading(true);
    getAllIPOs()
      .then(setIpos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [debouncedSearch]);

  // ---------------------------
  // 2️⃣ Search logic
  // ---------------------------
  useEffect(() => {
    if (debouncedSearch.trim().length === 0) return;

    setLoading(true);
    searchIpos(debouncedSearch)
      .then(setIpos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <Container>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">IPO List</h1>

          <SearchBar value={search} onChange={setSearch} />
        </Container>
      </div>

      {/* Loading */}
      {loading && (
        <>
          <div className="hidden md:block mt-6">
            <Container>
              <SkeletonIPOListDesktop />
            </Container>
          </div>

          <div className="md:hidden mt-6">
            <Container>
              <SkeletonIPOListMobile />
            </Container>
          </div>
        </>
      )}

      {/* Desktop List */}
      {!loading && !error && ipos && (
        <div className="hidden md:block">
          <Container>
            <div className="bg-white rounded-xl border overflow-hidden mt-6">
              <table className="w-full">
                <TableHeader
                  columns={[
                    { label: "Company / Issue date" },
                    { label: "Issue size" },
                    { label: "Price range" },
                    { label: "Min invest/qty", className: "text-center" }
                  ]}
                />

                <tbody>
                  {ipos.map((ipo) => (
                    <IPOTableRow
                      key={ipo.id}
                      ipo={ipo}
                      onClick={() => navigate(`/ipo/${ipo.id}`)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </div>
      )}

      {/* Mobile List */}
      {!loading && !error && ipos && (
        <div className="md:hidden">
          <Container>
            <div className="space-y-4 mt-6">
              {ipos.map((ipo) => (
                <IPOMobileCard
                  key={ipo.id}
                  ipo={ipo}
                  onClick={() => navigate(`/ipo/${ipo.id}`)}
                />
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* Error */}
      {!loading && error && <ErrorBox message={error} />}

      {/* No Results */}
      {!loading && !error && ipos?.length === 0 && (
        <Container>
          <p className="text-center text-gray-500 py-6">No IPOs found</p>
        </Container>
      )}

    </div>
  );
};

export default IPOListPage;
