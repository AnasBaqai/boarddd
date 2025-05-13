import { useState, useEffect } from "react";
import {
  ChannelPreferencesProps,
  ChannelFeatureType,
} from "../../types/account-setup";
import { useSetup } from "../../context/SetupContext";

const ChannelPreferences: React.FC<ChannelPreferencesProps> = ({
  onNext,
  onBack,
}) => {
  const { channelData, updateChannelData } = useSetup();
  const [selectedFeatures, setSelectedFeatures] = useState<
    ChannelFeatureType[]
  >([]);

  useEffect(() => {
    if (channelData) {
      setSelectedFeatures(channelData.selectedFeatures);
    }
  }, [channelData]);

  const toggleFeature = (feature: ChannelFeatureType) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(feature)) {
        return prev.filter((f) => f !== feature);
      } else {
        return [...prev, feature];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { selectedFeatures };
    updateChannelData(data);
    onNext(data);
  };

  const features: ChannelFeatureType[] = [
    "Task Management",
    "Client Management",
    "Form Builder",
    "Work in Progress",
    "Time Tracking",
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo */}
        <div className="mb-8 sm:mb-16 text-center">
          <h1 className="text-5xl font-medium text-[#151515] font-['Bricolage_Grotesque']" style={{ fontSize: '40px', lineHeight: 'normal' }}>
            Board
          </h1>
        </div>

        {/* Back button*/}
        <button
          type="button"
          onClick={onBack}
          className="flex items-center text-sm text-gray-400 hover:text-gray-700 md:absolute md:left-40 md:top-40 relative mb-8 "
        >
          <img src={"/back_arrow.svg"} className={"p-2 "} />
          Go back
        </button>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4">
            <p className="text-center text-[#151515] font-['Bricolage_Grotesque'] mb-4" style={{ fontSize: '24px', fontWeight: 500, lineHeight: 'normal' }}>
              Select what you'd like to manage the most in your Channel
            </p>
            <p className="text-gray-600">
              You can select multiple cards of your choice.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature) => {
              const isSelected = selectedFeatures.includes(feature);
              const iconName = feature.replace(/\s+/g, "");

              return (
                <div
                  key={feature}
                  onClick={() => toggleFeature(feature)}
                  className={`
                    relative flex flex-col justify-end
                    rounded-2xl p-8 pb-4 cursor-pointer transition-all duration-200
                    min-h-[220px] hover:scale-105
                    ${
                      isSelected
                        ? "bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
                        : "bg-white border-2 border-gray-100"
                    }
                  `}
                >
                  <div className="absolute top-6 left-6">
                    <img
                      src={`/channel-icons/${iconName}.svg`}
                      alt={feature}
                      className={`w-8 h-8 `}
                    />
                  </div>
                  <h3
                    className={`text-center text-[#151515] font-['Bricolage_Grotesque'] text-[16px] font-semibold mb-0 ${
                      isSelected ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="flex items-center rounded-lg bg-[#F0FAFF] px-6 py-2.5 text-sm font-semibold text-gray-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next
              <img src={"/arrow.svg"} className={"p-2"} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChannelPreferences;
