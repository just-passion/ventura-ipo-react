import type { IPO } from "../types/ipoTypes";
import { fetchClient } from "./fetchClient";

export const getAllIPOs = () => {
  return fetchClient<IPO[]>("/data/ipos.json");
};

export const getIPODetails = (id: string) => {
  return fetchClient<IPO>(`/data/ipo-${id}.json`);
};

export const searchIpos = async (query: string) => {
  const all = await fetchClient<IPO[]>("/data/ipos.json");
  if (!query.trim()) return all;

  const lower = query.toLowerCase();
  return all.filter((ipo) => ipo.companyName.toLowerCase().includes(lower));
};