import { useState } from "react";
import {
  AccountSetupFormData,
  AccountSetupProps,
} from "../../types/account-setup";

const AccountSetupForm: React.FC<AccountSetupProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState<AccountSetupFormData>({
    fullName: "",
    password: "",
    accountName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Content */}
      <div className="flex w-1/2 flex-col items-center justify-center px-12">
        <div className="w-full max-w-md">
          <div className="mb-16">
            <h1 className="text-2xl font-semibold">Boarddd</h1>
          </div>

          <div>
            <h2 className="mb-8 text-2xl font-semibold">Make your Account</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm text-gray-700"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-700"
                >
                  Create your password
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your password must be at least 8 characters"
                  minLength={8}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="accountName"
                  className="block text-sm text-gray-700"
                >
                  Account name
                </label>
                <input
                  id="accountName"
                  type="text"
                  value={formData.accountName}
                  onChange={(e) =>
                    setFormData({ ...formData, accountName: e.target.value })
                  }
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your account name"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-8">
                <button
                  type="button"
                  onClick={onBack}
                  className="flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 rotate-270"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7v10M12 7l-4 4M12 7l4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Go back
                </button>

                <button
                  type="submit"
                  className="flex items-center rounded-lg bg-[#F0FAFF] px-6 py-2.5 text-sm font-semibold text-gray-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Next
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 rotate-90"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7v10M12 7l-4 4M12 7l4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - Grey background */}
      <div className="w-1/2 bg-gray-200" />
    </div>
  );
};

export default AccountSetupForm;
