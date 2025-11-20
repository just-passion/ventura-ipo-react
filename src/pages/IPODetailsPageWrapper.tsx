import { useParams, useNavigate } from "react-router-dom";
import IPODetailsPage from "./IPODetailsPage";
import type { IPO } from "../types/ipoTypes";
import { useFetch } from "../hooks/useFetch";
import { getIPODetails } from "../api/ipoService";
import ErrorBox from "../components/UI/ErrorBox";
import SkeletonIPODetails from "../components/skeleton/SkeletonIPODetails";

const IPODetailsPageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: ipo, loading, error } = useFetch<IPO>(
    () => getIPODetails(id!),
    [id]
  );

  if (loading) return <SkeletonIPODetails />;

  if (error || !ipo) return <ErrorBox message={error ?? "IPO not found"} />;

  return <IPODetailsPage ipo={ipo} onBack={() => navigate(-1)} />;
};

export default IPODetailsPageWrapper;