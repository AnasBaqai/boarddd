export interface AccountSetupFormData {
  fullName: string;
  password: string;
  accountName: string;
}

export interface AccountSetupProps {
  onNext: (data: AccountSetupFormData) => void;
  onBack: () => void;
}

export type PurposeType = "Work" | "Personal" | "School" | "Non Profits";

export interface PurposeSelectionData {
  purpose: PurposeType;
}

export interface PurposeSelectionProps {
  onNext: (data: PurposeSelectionData) => void;
  onBack: () => void;
}

export type RoleType =
  | "Director"
  | "Team Leader"
  | "Business Owner"
  | "Team Member"
  | "Designer"
  | "Freelancer";

export interface RoleSelectionData {
  role: RoleType;
  purpose: PurposeType; // Store the selected purpose from the previous screen
}

export interface RoleSelectionProps {
  onNext: (data: RoleSelectionData) => void;
  onBack: () => void;
}

export type TeamSizeType =
  | "Only me"
  | "02-05"
  | "06-10"
  | "11-15"
  | "16-25"
  | "26-50"
  | "51-100"
  | "101-500";
export type CompanySizeType =
  | "01-19"
  | "20-49"
  | "50-99"
  | "100-250"
  | "251-500"
  | "501-1500"
  | "1500+";

export interface GeneralQuestionsData {
  teamSize: TeamSizeType;
  companySize: CompanySizeType;
}

export interface GeneralQuestionsProps {
  onNext: (data: GeneralQuestionsData) => void;
  onBack: () => void;
}

export type ReferralSourceType =
  | "YouTube"
  | "Search Engine"
  | "Linked in"
  | "Facebook"
  | "Instagram"
  | "Audio Ad"
  | "Other";

export interface ReferralSourceData {
  source: ReferralSourceType;
}

export interface ReferralSourceProps {
  onNext: (data: ReferralSourceData) => void;
  onBack: () => void;
}

export type ChannelFeatureType =
  | "Task Management"
  | "Client Management"
  | "Form Builder"
  | "Work in Progress"
  | "Time Tracking";

export interface ChannelPreferencesData {
  selectedFeatures: ChannelFeatureType[];
}

export interface ChannelPreferencesProps {
  onNext: (data: ChannelPreferencesData) => void;
  onBack: () => void;
}

export interface TeamInvitationProps {
  onNext: (data: { invitedEmails: string[]; allowAutoSignup: boolean }) => void;
  onBack: () => void;
}
