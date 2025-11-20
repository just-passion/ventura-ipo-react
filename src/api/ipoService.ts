import { API } from "../constants/api";
import type { IPO } from "../types/ipoTypes";
import { fetchClient } from "./fetchClient";

export const getAllIPOs = () => {
  return fetchClient<IPO[]>(API.IPO_LIST);
};

export const getIPODetails = (id: string) => {
  return fetchClient<IPO>(API.IPO_DETAILS(id));
};

export const searchIpos = async (query: string) => {
  const all = await fetchClient<IPO[]>(API.IPO_LIST);
  if (!query.trim()) return all;

  const lower = query.toLowerCase();
  return all.filter((ipo) => ipo.companyName.toLowerCase().includes(lower));
};