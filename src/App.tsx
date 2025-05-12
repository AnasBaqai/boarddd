import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignUp from "./pages/SignUp";
import AccountSetup from "./pages/AccountSetup";
import PurposeSetup from "./pages/PurposeSetup";
import GeneralQuestionsSetup from "./pages/GeneralQuestionsSetup";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/purpose-setup" element={<PurposeSetup />} />
        <Route path="/general-questions" element={<GeneralQuestionsSetup />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
