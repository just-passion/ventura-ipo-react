import { Route, Routes } from "react-router-dom";
import IPODetailsPageWrapper from "./pages/IPODetailsPageWrapper";
import IPOListPage from "./pages/IPOListPage";

const App = () => {

  return (
    <Routes>
      {/* List page */}
      <Route path="/" element={<IPOListPage />} />

      {/* Details page */}
      <Route 
      path="/ipo/:id" 
      element={<IPODetailsPageWrapper />} 
    />
    </Routes>
  );
};

export default App;
