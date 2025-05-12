import { useState, useEffect } from "react";
import {
  ReferralSourceProps,
  ReferralSourceType,
} from "../../types/account-setup";
import { useSetup } from "../../context/SetupContext";

const ReferralSource: React.FC<ReferralSourceProps> = ({ onNext, onBack }) => {
  const { referralData, updateReferralData } = useSetup();
  const [selectedSource, setSelectedSource] =
    useState<ReferralSourceType | null>(null);

  // Load saved data when component mounts
  useEffect(() => {
    if (referralData) {
      setSelectedSource(referralData.source);
    }
  }, [referralData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSource) {
      const data = { source: selectedSource };
      updateReferralData(data);
      onNext(data);
    }
  };

  const sources: ReferralSourceType[] = [
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
              className="flex items-center text-sm text-gray-500 hover:text-gray-700 md:absolute md:left-40 md:top-40 relative mb-4 md:mb-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 rotate-270"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 7v10M12 7l-4 4M12 7l4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Go back
            </button>

            <h2 className="text-xl sm:text-2xl font-semibold">
              One last question, how did you hear about us?
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {sources.map((source) => (
                <label
                  key={source}
                  className={`flex cursor-pointer items-center rounded-lg border p-3 sm:p-4 transition-colors
                    ${
                      selectedSource === source
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="source"
                    value={source}
                    checked={selectedSource === source}
                    onChange={(e) =>
                      setSelectedSource(e.target.value as ReferralSourceType)
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-xs sm:text-sm text-gray-900">
                    {source}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex justify-center pt-4 sm:pt-8">
              <button
                type="submit"
                disabled={!selectedSource}
                className={`flex items-center rounded-lg px-6 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${
                    selectedSource
                      ? "bg-[#F0FAFF] hover:bg-blue-50"
                      : "bg-gray-100 cursor-not-allowed"
                  }
                `}
              >
                Next
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 rotate-90"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7v10M12 7l-4 4M12 7l4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralSource;
