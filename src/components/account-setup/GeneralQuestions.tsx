import { useState, useEffect } from "react";
import {
  GeneralQuestionsProps,
  TeamSizeType,
  CompanySizeType,
} from "../../types/account-setup";
import { useSetup } from "../../context/SetupContext";

const GeneralQuestions: React.FC<GeneralQuestionsProps> = ({
  onNext,
  onBack,
}) => {
  const { generalData, updateGeneralData } = useSetup();
  const [selectedTeamSize, setSelectedTeamSize] = useState<TeamSizeType | null>(
    null
  );
  const [selectedCompanySize, setSelectedCompanySize] =
    useState<CompanySizeType | null>(null);

  // Load saved data when component mounts
  useEffect(() => {
    if (generalData) {
      console.log(generalData);
      setSelectedTeamSize(generalData.teamSize);
      setSelectedCompanySize(generalData.companySize);
    }
  }, [generalData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTeamSize && selectedCompanySize) {
      const data = {
        teamSize: selectedTeamSize,
        companySize: selectedCompanySize,
      };
      updateGeneralData(data);
      onNext(data);
    }
  };

  const teamSizes: TeamSizeType[] = [
    "Only me",
    "02-05",
    "06-10",
    "11-15",
    "16-25",
    "26-50",
    "51-100",
    "101-500",
  ];

  const companySizes: CompanySizeType[] = [
    "01-19",
    "20-49",
    "50-99",
    "100-250",
    "251-500",
    "501-1500",
    "1500+",
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="font-semibold">Boarddd</h1>
        </div>

        {/* Back button and questions */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 md:pl-6">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center text-sm text-gray-400 hover:text-gray-700 md:absolute md:left-32 md:top-32 relative mb-4 md:mb-0"
            >
              <img src={"/back_arrow.svg"} className={"p-1"} />
              Go back
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="space-y-6">
              <div>
                <h2 className="heading-bricolage mb-4">
                  How many people are in your team?
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {teamSizes.map((size) => (
                    <label
                      key={size}
                      className={`flex cursor-pointer items-center rounded-lg border p-2 transition-colors ${
                        selectedTeamSize === size
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="teamSize"
                        value={size}
                        checked={selectedTeamSize === size}
                        onChange={(e) =>
                          setSelectedTeamSize(e.target.value as TeamSizeType)
                        }
                        className="h-3 w-3 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-1 text-xs text-gray-900">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="heading-bricolage mb-4">
                  What's your company size?
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {companySizes.map((size) => (
                    <label
                      key={size}
                      className={`flex cursor-pointer items-center rounded-lg border p-2 transition-colors ${
                        selectedCompanySize === size
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="companySize"
                        value={size}
                        checked={selectedCompanySize === size}
                        onChange={(e) =>
                          setSelectedCompanySize(
                            e.target.value as CompanySizeType
                          )
                        }
                        className="h-3 w-3 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-1 text-xs text-gray-900">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={!selectedTeamSize || !selectedCompanySize}
                className={`flex items-center rounded-lg px-4 py-2 text-xs font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2
                  ${
                    selectedTeamSize && selectedCompanySize
                      ? "bg-[#F0FAFF] hover:bg-blue-50"
                      : "bg-gray-100 cursor-not-allowed"
                  }
                `}
              >
                Next
                <img src={"/arrow.svg"} className={"p-1"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralQuestions;
