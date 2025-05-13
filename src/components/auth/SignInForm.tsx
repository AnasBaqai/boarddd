import { useState } from "react";
import { Link } from "react-router-dom";

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Content */}
      <div className="flex w-full md:w-1/2">
        <div className="w-full pl-8 pr-4 py-6 md:pl-12 md:pr-[25%]">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h1 className="text-5xl font-medium text-center text-[#151515] font-['Bricolage_Grotesque']" style={{ fontSize: '48px', lineHeight: 'normal' }}>
              Welcome to Boar<span className="text-[#151515]">d</span>dd
            </h1>
          </div>

          <p className="mt-2.5 text-base text-center text-[#151515] font-['Poppins']" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}>
            Sign in to your account
          </p>

          <div className="space-y-8 md:space-y-10">
            <div>
              <h2 className="font-semibold mb-16">Welcome Back</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-1 block text-xs text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-xs">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="text-center text-xs text-gray-600">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-500">
                Sign up
              </Link>
            </div>
          </div>

          <footer className="mt-10 text-center text-stone-300 max-md:mt-10">
            <p>
              By proceeding, you agree to the
              <br />
              <a
                href="/terms"
                className="underline text-[rgba(0,95,217,1)]"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline text-[rgba(0,95,217,1)]"
              >
                Privacy Policy
              </a>
            </p>
          </footer>
        </div>
      </div>

      {/* Right side - Grey background */}
      <div className="hidden md:block w-full md:w-1/2 bg-gray-200" />
    </div>
  );
};

export default SignInForm;
