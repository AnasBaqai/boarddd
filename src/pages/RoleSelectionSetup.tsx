import { useNavigate } from "react-router-dom";
import RoleSelection from "../components/account-setup/RoleSelection";
import { RoleSelectionData } from "../types/account-setup";
import PageTransition from "../components/common/PageTransition";

const RoleSelectionSetup = () => {
  const navigate = useNavigate();

  const handleNext = (data: RoleSelectionData) => {
    console.log(data);
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
