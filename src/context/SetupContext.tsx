import { createContext, useContext, useState, ReactNode } from "react";
import {
  AccountSetupFormData,
  PurposeSelectionData,
  GeneralQuestionsData,
  ReferralSourceData,
} from "../types/account-setup";

interface SetupContextType {
  accountData: AccountSetupFormData | null;
  purposeData: PurposeSelectionData | null;
  generalData: GeneralQuestionsData | null;
  referralData: ReferralSourceData | null;
  updateAccountData: (data: AccountSetupFormData) => void;
  updatePurposeData: (data: PurposeSelectionData) => void;
  updateGeneralData: (data: GeneralQuestionsData) => void;
  updateReferralData: (data: ReferralSourceData) => void;
  isStepCompleted: (
    step: "account" | "purpose" | "general" | "referral"
  ) => boolean;
}

const SetupContext = createContext<SetupContextType | null>(null);

export const useSetup = () => {
  const context = useContext(SetupContext);
  if (!context) {
    throw new Error("useSetup must be used within a SetupProvider");
  }
  return context;
};

interface SetupProviderProps {
  children: ReactNode;
}

export const SetupProvider = ({ children }: SetupProviderProps) => {
  const [accountData, setAccountData] = useState<AccountSetupFormData | null>(
    null
  );
  const [purposeData, setPurposeData] = useState<PurposeSelectionData | null>(
    null
  );
  const [generalData, setGeneralData] = useState<GeneralQuestionsData | null>(
    null
  );
  const [referralData, setReferralData] = useState<ReferralSourceData | null>(
    null
  );

  const updateAccountData = (data: AccountSetupFormData) => {
    setAccountData(data);
  };

  const updatePurposeData = (data: PurposeSelectionData) => {
    setPurposeData(data);
  };

  const updateGeneralData = (data: GeneralQuestionsData) => {
    setGeneralData(data);
  };

  const updateReferralData = (data: ReferralSourceData) => {
    setReferralData(data);
  };

  const isStepCompleted = (
    step: "account" | "purpose" | "general" | "referral"
  ) => {
    switch (step) {
      case "account":
        return !!accountData;
      case "purpose":
        return !!purposeData;
      case "general":
        return !!generalData;
      case "referral":
        return !!referralData;
      default:
        return false;
    }
  };

  return (
    <SetupContext.Provider
      value={{
        accountData,
        purposeData,
        generalData,
        referralData,
        updateAccountData,
        updatePurposeData,
        updateGeneralData,
        updateReferralData,
        isStepCompleted,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};
