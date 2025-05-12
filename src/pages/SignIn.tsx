import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailSubmitted(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    navigate("/account-setup");
  };

  const handleChangeEmail = () => {
    setIsEmailSubmitted(false);
    setPassword("");
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center px-6 md:px-12 py-10 md:py-0">
        <div className="w-full max-w-md space-y-6 md:space-y-8">
          {/* Logo and Tagline */}
          <div className="text-center">
            <h1 className="mb-2 text-3xl md:text-4xl font-semibold">Boarddd</h1>
            <p className="text-sm md:text-base text-gray-600">
              We have to change the tagline here for Sign In
            </p>
          </div>

          {!isEmailSubmitted ? (
            <>
              {/* Google Sign In Button */}
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
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    Your work email
                  </label>
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
            </>
          ) : (
            /* Password Form */
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-gray-700">
                  Your work email
                </label>
                <div className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2.5">
                  <span className="text-sm text-gray-900">{email}</span>
                  <button
                    type="button"
                    onClick={handleChangeEmail}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    change
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-700">
                  Enter password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>
          )}

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-gray-500">Are you new to Boarddd? </span>
            <a
              href="/signup"
              className="font-semibold text-[#2563EB] hover:text-blue-600"
            >
              Sign Up
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
              <a href="/privacy" className="text-[#2563EB] hover:text-blue-600">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Grey background */}
      <div className="hidden md:block w-full md:w-1/2 bg-gray-200" />
    </div>
  );
};

export default SignIn;
