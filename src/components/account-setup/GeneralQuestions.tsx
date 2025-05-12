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
  const [teamSize, setTeamSize] = useState<TeamSizeType | null>(null);
  const [companySize, setCompanySize] = useState<CompanySizeType | null>(null);

  // Load saved data when component mounts
  useEffect(() => {
    if (generalData) {
      setTeamSize(generalData.teamSize);
      setCompanySize(generalData.companySize);
    }
  }, [generalData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamSize && companySize) {
      const data = { teamSize, companySize };
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
              <img src={"/arrow.svg"} className={"rotate-180 p-2"} />
              Go back
            </button>

            <h2 className="text-xl sm:text-2xl font-semibold">
              How many people are on your team?
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {teamSizes.map((size) => (
                <label
                  key={size}
                  className={`flex cursor-pointer items-center rounded-lg border p-3 sm:p-4 transition-colors
                    ${
                      teamSize === size
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="teamSize"
                    value={size}
                    checked={teamSize === size}
                    onChange={(e) =>
                      setTeamSize(e.target.value as TeamSizeType)
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-xs sm:text-sm text-gray-900">
                    {size}
                  </span>
                </label>
              ))}
            </div>

            <div>
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold">
                How many people work at your company?
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {companySizes.map((size) => (
                  <label
                    key={size}
                    className={`flex cursor-pointer items-center rounded-lg border p-3 sm:p-4 transition-colors
                      ${
                        companySize === size
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="companySize"
                      value={size}
                      checked={companySize === size}
                      onChange={(e) =>
                        setCompanySize(e.target.value as CompanySizeType)
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-xs sm:text-sm text-gray-900">
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-4 sm:pt-8">
              <button
                type="submit"
                disabled={!teamSize || !companySize}
                className={`flex items-center rounded-lg px-6 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${
                    teamSize && companySize
                      ? "bg-[#F0FAFF] hover:bg-blue-50"
                      : "bg-gray-100 cursor-not-allowed"
                  }
                `}
              >
                Next
                <img src={"/arrow.svg"} className={"p-2"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralQuestions;
