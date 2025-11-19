export interface CompanyDetails {
  issueSize: string;
  priceRange: string;
  minInvestment: string;
  lotSize: string;
  issueDate: string;
  listingDate: string;
}

export interface IPO {
  id: number;
  companyName: string;
  companyFullName?: string;
  issueSize: string;
  priceRange: string;
  minInvestment: string;
  lotSize: number;
  issueDate: string;
  closeDate: string;
  listingDate: string;
  basisOfAllotment: string;
  status: "Open" | "Closed" | "Listed";
  subscriptionRate: string;
  logo: string;
  about: string;
  companyDetails: CompanyDetails;
  listedPrice?: string;    // NEW: e.g. "₹150"
  listedGainAmount: number;   // ₹ amount
  listedGainPercent: number;  // percentage
}
