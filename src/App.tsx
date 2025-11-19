import { useState } from "react";
import { MOCK_IPO_DATA } from "./data/ipoData";

import IPOListPage from "./pages/IPOListPage";
import IPODetailsPage from "./pages/IPODetailsPage";
import type { IPO } from "./types/ipoTypes";

const App = () => {
  const [selectedIPO, setSelectedIPO] = useState<IPO | null>(null);

  if (selectedIPO) {
    return <IPODetailsPage ipo={selectedIPO} onBack={() => setSelectedIPO(null)} />;
  }

  return (
    <IPOListPage
      ipoList={MOCK_IPO_DATA}
      onSelectIPO={(ipo) => setSelectedIPO(ipo)}
    />
  );
};

export default App;
