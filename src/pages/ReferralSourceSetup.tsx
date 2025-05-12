import { useNavigate } from "react-router-dom";
import ReferralSource from "../components/account-setup/ReferralSource";
import { ReferralSourceData } from "../types/account-setup";
import { motion } from "framer-motion";

const ReferralSourceSetup = () => {
  const navigate = useNavigate();

  const handleNext: (data: ReferralSourceData) => void = () => {
    // Navigate to the channel preferences page
    navigate("/channel-preferences");
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
