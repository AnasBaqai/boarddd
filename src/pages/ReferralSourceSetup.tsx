import { useNavigate } from "react-router-dom";
import ReferralSource from "../components/account-setup/ReferralSource";
import { ReferralSourceData } from "../types/account-setup";
import { motion } from "framer-motion";

const ReferralSourceSetup = () => {
  const navigate = useNavigate();

  const handleNext = (data: ReferralSourceData) => {
    // Navigate to the next step (you can change this to wherever you want to go next)
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/general-questions");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ReferralSource onNext={handleNext} onBack={handleBack} />
    </motion.div>
  );
};

export default ReferralSourceSetup;
