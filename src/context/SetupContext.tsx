import { createContext, useContext, useState, ReactNode } from "react";
import {
  AccountSetupFormData,
  PurposeSelectionData,
  RoleSelectionData,
  GeneralQuestionsData,
  ReferralSourceData,
  ChannelPreferencesData,
} from "../types/account-setup";

interface SetupContextType {
  accountData: AccountSetupFormData | null;
  purposeData: PurposeSelectionData | null;
  roleData: RoleSelectionData | null;
  generalData: GeneralQuestionsData | null;
  referralData: ReferralSourceData | null;
  channelData: ChannelPreferencesData | null;
  updateAccountData: (data: AccountSetupFormData) => void;
  updatePurposeData: (data: PurposeSelectionData) => void;
  updateRoleData: (data: RoleSelectionData) => void;
  updateGeneralData: (data: GeneralQuestionsData) => void;
  updateReferralData: (data: ReferralSourceData) => void;
  updateChannelData: (data: ChannelPreferencesData) => void;
  isStepCompleted: (
    step: "account" | "purpose" | "role" | "general" | "referral" | "channel"
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
  const [roleData, setRoleData] = useState<RoleSelectionData | null>(null);
  const [generalData, setGeneralData] = useState<GeneralQuestionsData | null>(
    null
  );
  const [referralData, setReferralData] = useState<ReferralSourceData | null>(
    null
  );
  const [channelData, setChannelData] = useState<ChannelPreferencesData | null>(
    null
  );

  const updateAccountData = (data: AccountSetupFormData) => {
    setAccountData(data);
  };

  const updatePurposeData = (data: PurposeSelectionData) => {
    setPurposeData(data);
  };

  const updateRoleData = (data: RoleSelectionData) => {
    setRoleData(data);
  };

  const updateGeneralData = (data: GeneralQuestionsData) => {
    setGeneralData(data);
  };

  const updateReferralData = (data: ReferralSourceData) => {
    setReferralData(data);
  };

  const updateChannelData = (data: ChannelPreferencesData) => {
    setChannelData(data);
  };

  const isStepCompleted = (
    step: "account" | "purpose" | "role" | "general" | "referral" | "channel"
  ) => {
    switch (step) {
      case "account":
        return !!accountData;
      case "purpose":
        return !!purposeData;
      case "role":
        return !!roleData;
      case "general":
        return !!generalData;
      case "referral":
        return !!referralData;
      case "channel":
        return !!channelData;
      default:
        return false;
    }
  };

  return (
    <SetupContext.Provider
      value={{
        accountData,
        purposeData,
        roleData,
        generalData,
        referralData,
        channelData,
        updateAccountData,
        updatePurposeData,
        updateRoleData,
        updateGeneralData,
        updateReferralData,
        updateChannelData,
        isStepCompleted,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};
