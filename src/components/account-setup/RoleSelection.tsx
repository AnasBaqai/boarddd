import { useState, useEffect } from "react";
import { RoleSelectionProps, RoleType } from "../../types/account-setup";
import { useSetup } from "../../context/SetupContext";

const RoleSelection: React.FC<RoleSelectionProps> = ({ onNext, onBack }) => {
  const { roleData, purposeData, updateRoleData } = useSetup();
  const [selectedRole, setSelectedRole] = useState<RoleType | null>(null);

  useEffect(() => {
    if (roleData) {
      setSelectedRole(roleData.role);
    }
  }, [roleData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && purposeData) {
      const data = { role: selectedRole, purpose: purposeData.purpose };
      updateRoleData(data);
      onNext(data);
    }
  };

  const roles: RoleType[] = [
    "Director",
    "Team Leader",
    "Business Owner",
    "Team Member",
    "Designer",
    "Freelancer",
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo */}
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-semibold">Boarddd</h1>
        </div>

        {/* Back button */}
        <button
          type="button"
          onClick={onBack}
          className="flex items-center text-sm text-gray-500 hover:text-gray-700 md:absolute md:left-40 md:top-40 relative mb-8"
        >
          <img src={"/arrow.svg"} className={"rotate-180 p-2"} />
          Go back
        </button>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Purpose display */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-center">
                Hey there, what brings you here today?
              </h2>

              <div className="flex justify-center gap-4">
                {purposeData && (
                  <div className="grid grid-cols-4 gap-4 max-w-xl">
                    {["Work", "Personal", "School", "Non Profits"].map(
                      (purpose) => (
                        <label
                          key={purpose}
                          className={`flex items-center rounded-lg border p-4 transition-colors ${
                            purposeData.purpose === purpose
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={purposeData.purpose === purpose}
                            disabled
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-900">
                            {purpose}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Role selection */}
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-center">
                What best describes your current role?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {roles.slice(0, 3).map((role) => (
                  <label
                    key={role}
                    className={`flex cursor-pointer items-center rounded-lg border p-4 transition-colors ${
                      selectedRole === role
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={selectedRole === role}
                      onChange={() => setSelectedRole(role)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">{role}</span>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {roles.slice(3).map((role) => (
                  <label
                    key={role}
                    className={`flex cursor-pointer items-center rounded-lg border p-4 transition-colors ${
                      selectedRole === role
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={selectedRole === role}
                      onChange={() => setSelectedRole(role)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">{role}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={!selectedRole}
              className={`flex items-center rounded-lg px-6 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                selectedRole
                  ? "bg-[#F0FAFF] hover:bg-blue-50"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
            >
              Next
              <img src={"/arrow.svg"} className={"p-2"} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleSelection;
