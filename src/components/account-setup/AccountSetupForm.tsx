import { useState, useEffect } from "react";
import {
  AccountSetupFormData,
  AccountSetupProps,
} from "../../types/account-setup";
import { useSetup } from "../../context/SetupContext";

const AccountSetupForm: React.FC<AccountSetupProps> = ({ onNext, onBack }) => {
  const { accountData, updateAccountData } = useSetup();
  const [formData, setFormData] = useState<AccountSetupFormData>({
    fullName: "",
    password: "",
    accountName: "",
  });

  // Load saved data when component mounts
  useEffect(() => {
    if (accountData) {
      setFormData(accountData);
    }
  }, [accountData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAccountData(formData);
    onNext(formData);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Content */}
      <div className="flex w-full md:w-1/2 relative">
        <div className="w-full pl-8 pr-4 py-6 md:pl-12 md:pr-[25%]">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h1 className="font-semibold">Boarddd</h1>
          </div>

          <div className="space-y-8 md:space-y-10">
            <div>
              <h2 className="font-semibold mb-16">Make your Account</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm text-gray-700"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-700"
                >
                  Create your password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your password must be at least 8 characters"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="accountName"
                  className="block text-sm text-gray-700"
                >
                  Account name
                </label>
                <input
                  type="text"
                  id="accountName"
                  value={formData.accountName}
                  onChange={(e) =>
                    setFormData({ ...formData, accountName: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your account name"
                  required
                />
              </div>

              {/* Mobile buttons inside form */}
              <div className="flex items-center justify-between mt-16 md:hidden">
                <button
                  type="button"
                  onClick={onBack}
                  className="flex items-center text-sm text-gray-400 hover:text-gray-700"
                >
                  <img src={"/back_arrow.svg"} className={"p-1"} />
                  Go back
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex items-center rounded-lg bg-[#F0FAFF] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Next
                  <img src={"/arrow.svg"} className={"p-1"} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Buttons positioned at the bottom - desktop only */}
        <div className="absolute bottom-8 md:bottom-10 left-0 right-0 px-8 md:px-12 hidden md:flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-sm text-gray-400 hover:text-gray-700"
          >
            <img src={"/back_arrow.svg"} className={"p-1"} />
            Go back
          </button>

          {/* Next button positioned to be partially outside the input area */}
          <div className="relative md:right-[100px]">
            <button
              onClick={handleSubmit}
              className="flex items-center rounded-lg bg-[#F0FAFF] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next
              <img src={"/arrow.svg"} className={"p-1"} />
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Grey background */}
      <div className="hidden md:block w-full md:w-1/2 bg-gray-200" />
    </div>
  );
};

export default AccountSetupForm;
