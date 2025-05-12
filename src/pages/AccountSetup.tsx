import { useNavigate } from "react-router-dom";
import AccountSetupForm from "../components/account-setup/AccountSetupForm";
import { AccountSetupFormData } from "../types/account-setup";
import PageTransition from "../components/common/PageTransition";

const AccountSetup = () => {
  const navigate = useNavigate();

  const handleNext = (data: AccountSetupFormData) => {
    // Here you would typically send this data to your backend
    console.log("Account setup data:", data);
    // Navigate to the purpose selection step
    navigate("/purpose-setup");
  };

  const handleBack = () => {
    navigate("/signup");
  };

  return (
    <PageTransition>
      <AccountSetupForm onNext={handleNext} onBack={handleBack} />
    </PageTransition>
  );
};

export default AccountSetup;
