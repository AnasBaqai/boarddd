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
      <div className="mx-auto max-w-2xl px-4 sm:px-8 py-8 sm:py-12">
        {/* Logo */}
        <div className="mb-1 sm:mb-8 text-center">
          <h1 className="text-5xl font-medium text-[#151515] font-['Bricolage_Grotesque']" style={{ fontSize: '40px', lineHeight: 'normal' }}>
            Board
          </h1>
        </div>

        {/* Back button and questions */}
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:pl-8 mt-40">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center text-sm text-gray-400 hover:text-gray-700 md:absolute md:left-40 md:top-50 relative mb-4 md:mb-0"
            >
              <img src={"/back_arrow.svg"} className={"p-2"} />
              Go back
            </button>

            <p className="text-center text-[#151515] font-['Bricolage_Grotesque']" style={{ fontSize: '24px', fontWeight: 500, lineHeight: 'normal' }}>
              Hey there, what's bringing you up today?
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {purposes.map((purpose) => (
                <label
                  key={purpose}
                  className={`flex cursor-pointer items-center rounded-lg border p-3 sm:p-4 transition-colors
                    ${
                      selectedPurpose === purpose
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    name="purpose"
                    value={purpose}
                    checked={selectedPurpose === purpose}
                    onChange={(e) =>
                      setSelectedPurpose(e.target.value as PurposeType)
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-xs sm:text-sm text-gray-900">
                    {purpose}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex justify-center pt-4 sm:pt-8">
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

export default PurposeSelection;
