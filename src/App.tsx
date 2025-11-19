import { useState } from "react";
import { MOCK_IPO_DATA } from "./data/ipoData";
import IPOListPage from "./pages/IPOListPage";
import IPODetailsPage from "./pages/IPODetailsPage";
import type { IPO } from "./types/ipoTypes";
import { Route, Routes } from "react-router-dom";
import IPODetailsPageWrapper from "./pages/IPODetailsPageWrapper";

const App = () => {

  return (
    <Routes>
      {/* List page */}
      <Route path="/" element={<IPOListPage ipoList={MOCK_IPO_DATA} />} />

      {/* Details page */}
      <Route 
      path="/ipo/:id" 
      element={<IPODetailsPageWrapper ipoList={MOCK_IPO_DATA} />} 
    />
    </Routes>
  );
};

export default App;
