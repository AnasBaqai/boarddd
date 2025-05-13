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
      className="overflow-hidden bg-white"
    >
      <div className="flex min-h-screen flex-col md:flex-row">
        <div className="flex w-full md:w-[41%] flex-col items-center px-5 md:pl-20">
          <div className="flex flex-col mt-10 md:mt-40 w-full max-w-md">
            {/* Logo and Tagline */}
            <div className="text-center">
              <h1 className="text-5xl font-medium text-center text-neutral-900 max-md:text-4xl">
                Welcome to Boar<span className="text-[#151515]">d</span>dd
              </h1>
              <p className="mt-2.5 text-base text-center text-neutral-900">
                Get started - it's free. No credit card needed.
              </p>
            </div>

            {/* Google Sign Up Button */}
            <button
              type="button"
              className="flex justify-center items-center px-16 py-4 mx-7 mt-14 bg-sky-50 rounded-md text-neutral-600 max-md:px-5 max-md:mx-2.5 max-md:mt-10 whitespace-nowrap"
            >
              <div className="flex gap-2.5 items-center">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="object-contain shrink-0 w-5 aspect-square"
                />
                <span>Continue with Google</span>
              </div>
            </button>

            {/* Divider with lines */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-[1px] bg-gray-300 w-16"></div>
              <p className="mx-2 text-base text-center text-neutral-900">or</p>
              <div className="h-[1px] bg-gray-300 w-16"></div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="px-5 py-4 mx-7 mt-8 rounded-md border border-solid border-stone-300 text-gray-900 max-md:px-5 max-md:mx-2.5 w-[calc(100%-56px)]"
                required
              />

              <button
                type="submit"
                className="px-16 py-4 mx-7 mt-14 font-medium text-center whitespace-nowrap bg-blue-700 rounded-md text-white max-md:px-5 max-md:mx-2.5 max-md:mt-10 w-[calc(100%-56px)]"
              >
                Next
              </button>
            </form>

            {/* Sign In Link */}
            <p className="self-center mt-8 text-stone-300">
              Already have an account?{" "}
              <a 
                href="/signin" 
                className="underline text-[rgba(0,95,217,1)]"
              >
                Sign In
              </a>
            </p>

            {/* Terms and Privacy */}
            <footer className="mt-40 text-center text-stone-300 max-md:mt-10">
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
        <div className="hidden md:block md:w-[59%] bg-stone-300 bg-opacity-80 h-[1024px]" />
      </div>
    </motion.div>
  );
};

export default SignUp;
