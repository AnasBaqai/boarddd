import { useState, useEffect } from "react";
import { PurposeSelectionProps, PurposeType } from "../../types/account-setup";
import { useSetup } from "../../context/SetupContext";

const PurposeSelection: React.FC<PurposeSelectionProps> = ({
  onNext,
  onBack,
}) => {
  const { purposeData, updatePurposeData } = useSetup();
  const [selectedPurpose, setSelectedPurpose] = useState<PurposeType | null>(
    null
  );

  // Load saved data when component mounts
  useEffect(() => {
    if (purposeData) {
      setSelectedPurpose(purposeData.purpose);
    }
  }, [purposeData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPurpose) {
      const data = { purpose: selectedPurpose };
      updatePurposeData(data);
      onNext(data);
    }
  };

  const purposes: PurposeType[] = ["Work", "Personal", "School", "Non Profits"];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-2xl px-8 py-12">
        {/* Logo */}
        <div className="mb-16 text-center">
          <h1 className="text-2xl font-semibold">Boarddd</h1>
        </div>

        {/* Back button and heading in the same line */}
        <div className="mb-12 flex items-center gap-8 pl-8">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700"
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

          <h2 className="text-2xl font-semibold">
            Hey there, what brings you here today?
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-4 gap-4">
            {purposes.map((purpose) => (
              <label
                key={purpose}
                className={`flex cursor-pointer items-center rounded-lg border p-4 transition-colors
                  ${
                    selectedPurpose === purpose
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }
                `}
              >
                <input
                  type="radio"
                  name="purpose"
                  value={purpose}
                  checked={selectedPurpose === purpose}
                  onChange={(e) =>
                    setSelectedPurpose(e.target.value as PurposeType)
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-900">{purpose}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!selectedPurpose}
              className={`flex items-center rounded-lg px-6 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${
                  selectedPurpose
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
  );
};

export default PurposeSelection;
