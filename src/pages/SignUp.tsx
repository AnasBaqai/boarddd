import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import SignUpForm from "../components/auth/SignUpForm";
import PageTransition from "../components/common/PageTransition";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (email: string) => {
    // Here you would typically verify the email or start the signup process
    console.log("Sign up with email:", email);
    // Navigate to the account setup page
    navigate("/account-setup");
  };

  return (
    <PageTransition>
      <AuthLayout
        title="Welcome to Boarddd"
        subtitle="Get started - it's free. No credit card needed."
      >
        <SignUpForm onSubmit={handleSubmit} />
      </AuthLayout>
    </PageTransition>
  );
};

export default SignUp;
