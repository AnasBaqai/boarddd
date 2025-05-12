import { useNavigate } from "react-router-dom";
import GeneralQuestions from "../components/account-setup/GeneralQuestions";
import { GeneralQuestionsData } from "../types/account-setup";
import { motion } from "framer-motion";

const GeneralQuestionsSetup = () => {
  const navigate = useNavigate();

  const handleNext: (data: GeneralQuestionsData) => void = () => {
    navigate("/referral-source");
  };

  const handleBack = () => {
    navigate("/purpose-setup");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <GeneralQuestions onNext={handleNext} onBack={handleBack} />
    </motion.div>
  );
};

export default GeneralQuestionsSetup;
