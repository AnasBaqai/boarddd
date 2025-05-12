import { useState } from "react";
import { AuthProps } from "../../types/auth";
import GoogleButton from "./GoogleButton";

const SignUpForm: React.FC<AuthProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-in logic
    console.log("Google sign-in clicked");
  };

  return (
    <div className="mt-8 space-y-6">
      <GoogleButton onGoogleSignIn={handleGoogleSignIn} />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-gray-500">or</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your work email"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button>
      </form>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a
          href="/signin"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Sign in
        </a>
      </p>

      <p className="text-center text-xs text-gray-500">
        By proceeding, you agree to the{" "}
        <a href="/terms" className="text-blue-600 hover:text-blue-500">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-blue-600 hover:text-blue-500">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;
