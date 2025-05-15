import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import TeamInvitation from "../components/account-setup/TeamInvitation";

const TeamInviteSetup = () => {
  const navigate = useNavigate();

  const handleNext = (data: {
    invitedEmails: string[];
    allowAutoSignup: boolean;
  }) => {
    // Log the invited emails and auto signup setting
    console.log("Team invites:", data);
    // Navigate to the next step (dashboard or completion page)
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/channel-preferences");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <TeamInvitation onNext={handleNext} onBack={handleBack} />
    </motion.div>
  );
};

export default TeamInviteSetup;
