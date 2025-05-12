import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AccountSetup from "./pages/AccountSetup";
import PurposeSetup from "./pages/PurposeSetup";
import GeneralQuestionsSetup from "./pages/GeneralQuestionsSetup";
import ReferralSourceSetup from "./pages/ReferralSourceSetup";
import ChannelPreferencesSetup from "./pages/ChannelPreferencesSetup";
import { SetupProvider } from "./context/SetupContext";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/purpose-setup" element={<PurposeSetup />} />
        <Route path="/general-questions" element={<GeneralQuestionsSetup />} />
        <Route path="/referral-source" element={<ReferralSourceSetup />} />
        <Route
          path="/channel-preferences"
          element={<ChannelPreferencesSetup />}
        />
        <Route path="/" element={<Navigate to="/signin" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <SetupProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </SetupProvider>
  );
}

export default App;
