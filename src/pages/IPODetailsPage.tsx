import { useState } from "react";
import { ChevronLeft, Download, ExternalLink, Home } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import HorizontalTimeline from "../components/IPO/HorizontalTimeline";
import VerticalTimeline from "../components/IPO/VerticalTimeline";
import ApplyModal from "../components/Modal/ApplyModal";
import Container from "../components/Layout/Container";
import { formatDate } from "../utils/dateUtils";
import type { IPO } from "../types/ipoTypes";

interface IPODetailsPageProps {
  ipo: IPO;
  onBack: () => void;
}

const IPODetailsPage = ({ ipo, onBack }: IPODetailsPageProps) => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [downloadLabel, setDownloadLabel] = useState("Download");
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const handleDownload = () => {
    setDownloadLabel("Downloading...");

    const content = 
    `IPO Details - ${ipo.companyName}
      Issue Size: ${ipo.issueSize}
      Price Range: ${ipo.priceRange}
      Min Investment: ${ipo.minInvestment}
      Lot Size: ${ipo.lotSize}
      Issue Date: ${formatDate(ipo.issueDate)}
      Close Date: ${formatDate(ipo.closeDate)}
      Listing Date: ${formatDate(ipo.listingDate)}
      Listed Price: ${ipo.listedPrice ?? "-"}
      Listing Gains: ${ipo.listedGainAmount ? "₹" + ipo.listedGainAmount : "-"} (${
      ipo.listedGainPercent ?? "-"}%)`;

    setTimeout(() => {
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${ipo.companyName}_IPO_Details.txt`;
      a.click();
      URL.revokeObjectURL(url);
      setDownloadLabel("Downloaded!");
      setTimeout(() => setDownloadLabel("Download"), 1500);
    }, 600);
  };

  const desktopIpoDetailItems: DetailItemConfig[] = [
    { label: "Issue size", value: ipo.issueSize },
    { label: "Price range", value: ipo.priceRange },
    { label: "Minimum amount", value: ipo.minInvestment },
    { label: "Lot size", value: `${ipo.lotSize} shares/lots` },
    {
      label: "Issue dates",
      value: `${formatDate(ipo.issueDate)} - ${formatDate(ipo.closeDate)}`,
    },
    { label: "Listed on", value: formatDate(ipo.listingDate) },
    { label: "Listed price", value: ipo.listedPrice ?? "-" },
    {
      label: "Listing gains",
      value: `${ipo.listedGainAmount ? "₹" + ipo.listedGainAmount : "-"} (${ ipo.listedGainPercent ?? "-" }%)`,
      highlight: true,
    }
  ];

  const mobileDetailItems = desktopIpoDetailItems.slice(0, 5);
  const ABOUT_LIMIT = 160;
  const showToggle = ipo.about.length > ABOUT_LIMIT;
  const mobileAboutText = isAboutExpanded || !showToggle ? ipo.about : `${ipo.about.slice(0, ABOUT_LIMIT)}...`;

  return (
    <div className="min-h-screen bg-gray-50">
      {showApplyModal && (<ApplyModal ipo={ipo} onClose={() => setShowApplyModal(false)} />)}

      {/* ------------------- HEADER ------------------- */}
      <div className="bg-white border-b border-gray-200">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", icon: Home, onClick: onBack },
              { label: ipo.companyName },
            ]}
          />

          <button
            onClick={onBack}
            className="md:hidden flex items-center gap-1 text-gray-600 text-sm mb-3">
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <div className="mt-1 px-1 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={onBack} className="hidden md:flex w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100" ><ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  {ipo.logo}
                </div>
                <div>
                  <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    {ipo.companyName}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {ipo.companyFullName || ipo.companyName}
                  </p>
                </div>
              </div>

            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 border rounded-full flex items-center gap-2 text-sm hover:bg-gray-50"
              >
                <Download className="w-4 h-4" />
                {downloadLabel}
              </button>

              <button
                onClick={() => setShowApplyModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 text-sm hover:bg-blue-700"
              >
                <ExternalLink className="w-4 h-4" />
                Apply now
              </button>
            </div>

          </div>
        </Container>
      </div>

      {/* ------------------- MAIN CONTENT ------------------- */}
      <Container>
        <div className="space-y-6">

          {/* ------------- IPO DETAILS CARD ------------- */}
          <SectionCard title="IPO details">
            <div className="rounded-xl border p-4 sm:p-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {(
                  <div className="contents md:hidden">
                    {mobileDetailItems.map((i) => (
                      <DetailItem key={i.label} {...i} />
                    ))}
                  </div>
                )}

                <div className="hidden md:contents">
                  {desktopIpoDetailItems.map((i) => (
                    <DetailItem key={i.label} {...i} />
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* ------------- TIMELINE ------------- */}
          <SectionCard title="IPO timeline" className="hidden md:block">
            <HorizontalTimeline ipo={ipo} />
          </SectionCard>

          <SectionCard title="IPO timeline" className="md:hidden">
            <VerticalTimeline ipo={ipo} />
          </SectionCard>

          {/* ------------- ABOUT COMPANY ------------- */}
          <SectionCard title="About the company">
            <p className="hidden md:block text-sm md:text-base text-gray-600 leading-relaxed">
              {ipo.about}
            </p>

            <p className="md:hidden text-sm text-gray-600 leading-snug">
              {mobileAboutText}
              {showToggle && (
                <button
                  onClick={() => setIsAboutExpanded((p) => !p)}
                  className="ml-1 text-orange-400 underline font-semibold"
                >
                  {isAboutExpanded ? "Read less" : "Read more"}
                </button>
              )}
            </p>
          </SectionCard>

        </div>
      </Container>
    </div>
  );
};

/* ------------------- REUSABLE COMPONENTS ------------------- */

interface DetailItemConfig {
  label: string;
  value: string | number;
  highlight?: boolean;
}

const DetailItem = ({ label, value }: DetailItemConfig) => {
  const text = value?.toString() ?? "";
  const match = text.match(/(.*)\((.*)\)/);

  return (
    <div>
      <p className="text-xs md:text-sm text-gray-500 mb-1">{label}</p>

      {match ? (
        <p className="text-sm md:text-base font-semibold text-gray-900">
          {match[1].trim()} (
          <span className="text-orange-500">{match[2]}</span>
          )
        </p>
      ) : (
        <p className="text-sm md:text-base font-semibold text-gray-900">{text}</p>
      )}
    </div>
  );
};

const SectionCard = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-white rounded-xl border p-4 sm:p-6 ${className}`}>
    <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
      {title}
    </h2>
    {children}
  </div>
);

export default IPODetailsPage;