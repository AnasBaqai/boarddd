import { useNavigate } from "react-router-dom";
import ChannelPreferences from "../components/account-setup/ChannelPreferences";
import { ChannelPreferencesData } from "../types/account-setup";
import { motion } from "framer-motion";

const ChannelPreferencesSetup = () => {
  const navigate = useNavigate();

  const handleNext: (data: ChannelPreferencesData) => void = () => {
    // Navigate to the next step (dashboard or completion page)
    navigate("/team-invite");
  };

  const handleBack = () => {
    navigate("/referral-source");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ChannelPreferences onNext={handleNext} onBack={handleBack} />
    </motion.div>
  );
};

export default ChannelPreferencesSetup;
