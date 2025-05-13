import { useState, useEffect } from "react";
import {
  ReferralSourceProps,
  ReferralSourceType,
} from "../../types/account-setup";
import { useSetup } from "../../context/SetupContext";

const ReferralSource: React.FC<ReferralSourceProps> = ({ onNext, onBack }) => {
  const { referralData, updateReferralData } = useSetup();
  const [selectedSources, setSelectedSources] = useState<ReferralSourceType[]>([]);

  // Load saved data when component mounts
  useEffect(() => {
    if (referralData) {
      setSelectedSources([referralData.source]);
    }
  }, [referralData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSources.length > 0) {
      const data = { source: selectedSources[0] };
      updateReferralData(data);
      onNext(data);
    }
  };

  const referralSources: ReferralSourceType[] = [
    "YouTube",
    "Search Engine",
    "Linked in",
    "Facebook",
    "Instagram",
    "Audio Ad",
    "Other",
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-8 py-8 sm:py-12">
        {/* Logo */}
        <div className="mb-8 sm:mb-16 text-center">
          <h1 className="text-2xl font-semibold">Boarddd</h1>
        </div>

        {/* Back button and questions */}
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:pl-8">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center text-sm text-gray-400 hover:text-gray-700 md:absolute md:left-40 md:top-40 relative mb-4 md:mb-0"
            >
              <img src={"/back_arrow.svg"} className={" p-2"} />
              Go back
            </button>

            <h2 className="text-[#151515] font-['Bricolage_Grotesque'] mb-4" style={{ fontSize: '24px', fontWeight: 500, lineHeight: 'normal' }}>
            One last question, how did you hear about us?
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-md mx-auto">
              {referralSources.map((source) => (
                <label
                  key={source}
                  className={`flex cursor-pointer items-center rounded-lg border p-2 transition-colors ${
                    selectedSources.includes(source)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="referralSource"
                    value={source}
                    checked={selectedSources.includes(source)}
                    onChange={() => {
                      setSelectedSources((prev) => 
                        prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]
                      );
                    }}
                    className="h-3 w-3 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-1 text-[#151515] font-['Poppins'] text-[12px] font-normal">
                    {source}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex justify-center pt-4 sm:pt-8">
              <button
                type="submit"
                disabled={selectedSources.length === 0}
                className={`flex items-center rounded-lg px-6 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${
                    selectedSources.length > 0
                      ? "bg-[#F0FAFF] hover:bg-blue-50"
                      : "bg-gray-100 cursor-not-allowed"
                  }
                `}
              >
                <img src={"/arrow.svg"} className={"p-2"} />
                Next
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralSource;
