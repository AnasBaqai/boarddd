import { useNavigate } from "react-router-dom";
import PurposeSelection from "../components/account-setup/PurposeSelection";
import { PurposeSelectionData } from "../types/account-setup";
import PageTransition from "../components/common/PageTransition";

const PurposeSetup = () => {
  const navigate = useNavigate();

  const handleNext = (data: PurposeSelectionData) => {
    // Here you would typically send this data to your backend
    console.log("Purpose selection:", data);
    // Navigate to the role selection step
    navigate("/role-selection");
  };

  const handleBack = () => {
    navigate("/account-setup");
  };

  return (
    <PageTransition>
      <PurposeSelection onNext={handleNext} onBack={handleBack} />
    </PageTransition>
  );
};

export default PurposeSetup;
