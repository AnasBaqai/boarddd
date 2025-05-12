import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/account-setup");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <div className="flex min-h-screen flex-col md:flex-row">
        <div className="flex w-full md:w-1/2 flex-col items-center justify-center px-6 md:px-12 py-10 md:py-0">
          <div className="w-full max-w-md space-y-6 md:space-y-8">
            {/* Logo and Tagline */}
            <div className="text-center">
              <h1 className="mb-2 text-3xl md:text-4xl font-semibold">
                Welcome to Boarddd
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Get Started- its's free. No credit card needed.
              </p>
            </div>

            {/* Google Sign Up Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-[#F8FAFC] px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">or</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Next
              </button>
            </form>

            {/* Sign In Link */}
            <div className="text-center text-sm">
              <span className="text-gray-500">Already have an account? </span>
              <a
                href="/signin"
                className="font-semibold text-[#2563EB] hover:text-blue-600"
              >
                Sign In
              </a>
            </div>

            {/* Terms and Privacy */}
            <div className="text-center text-xs text-gray-500">
              <p>
                By proceeding, you agree to the{" "}
                <a href="/terms" className="text-[#2563EB] hover:text-blue-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-[#2563EB] hover:text-blue-600"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Grey background */}
        <div className="hidden md:block w-full md:w-1/2 bg-gray-200" />
      </div>
    </motion.div>
  );
};

export default SignUp;
