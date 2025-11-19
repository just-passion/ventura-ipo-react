import { useParams, useNavigate } from "react-router-dom";
import IPODetailsPage from "./IPODetailsPage";
import type { IPO } from "../types/ipoTypes";

interface Props {
  ipoList: IPO[];
}

const IPODetailsPageWrapper = ({ ipoList }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const ipo = ipoList.find((i) => i.id === Number(id));

  if (!ipo) return <p>IPO not found</p>;

  return <IPODetailsPage ipo={ipo} onBack={() => navigate(-1)} />;
};

export default IPODetailsPageWrapper;