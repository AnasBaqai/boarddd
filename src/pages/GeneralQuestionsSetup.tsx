import { useNavigate } from "react-router-dom";
import GeneralQuestions from "../components/account-setup/GeneralQuestions";
import { GeneralQuestionsData } from "../types/account-setup";
import PageTransition from "../components/common/PageTransition";

const GeneralQuestionsSetup = () => {
  const navigate = useNavigate();

  const handleNext = (data: GeneralQuestionsData) => {
    // Here you would typically send this data to your backend
    console.log("General questions data:", data);
    // Navigate to the next step in your setup process
    navigate("/workspace-setup");
  };

  const handleBack = () => {
    navigate("/purpose-setup");
  };

  return (
    <PageTransition>
      <GeneralQuestions onNext={handleNext} onBack={handleBack} />
    </PageTransition>
  );
};

export default GeneralQuestionsSetup;
