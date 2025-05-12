import { useNavigate } from "react-router-dom";
import RoleSelection from "../components/account-setup/RoleSelection";
import { RoleSelectionData } from "../types/account-setup";
import PageTransition from "../components/common/PageTransition";

const RoleSelectionSetup = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleNext = (data: RoleSelectionData) => {
    // Navigate to general questions
    navigate("/general-questions");
  };

  const handleBack = () => {
    navigate("/purpose-setup");
  };

  return (
    <PageTransition>
      <RoleSelection onNext={handleNext} onBack={handleBack} />
    </PageTransition>
  );
};

export default RoleSelectionSetup;
