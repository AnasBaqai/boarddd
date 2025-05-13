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
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-medium text-[#151515] font-['Bricolage_Grotesque']" style={{ fontSize: '40px', lineHeight: 'normal' }}>
            Board
          </h1>
        </div>

        {/* Back button */}
        <div className="mt-24">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-sm text-gray-400 hover:text-gray-700 md:absolute md:left-32 md:top-40 relative mb-6"
          >
            <img src={"/back_arrow.svg"} className={"p-1"} />
            Go back
          </button>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Purpose display */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3">
                <p className="text-center text-[#151515] font-['Bricolage_Grotesque']" style={{ fontSize: '24px', fontWeight: 500, lineHeight: 'normal' }}>
                  Hey there, what's bringing you up today?
                </p>

                <div className="flex justify-center gap-3">
                  {purposeData && (
                    <div className="grid grid-cols-4 gap-3 max-w-md mb-8">
                      {["Work", "Personal", "School", "Non Profits"].map(
                        (purpose) => (
                          <label
                            key={purpose}
                            className={`flex items-center rounded-lg border p-2 transition-colors ${
                              purposeData.purpose === purpose
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={purposeData.purpose === purpose}
                              disabled
                              className="h-3 w-3 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-1 text-xs text-gray-900">
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
              <div className="space-y-3">
                <h2 className="heading-bricolage mb-4">
                  What best describes your current role?
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-md mx-auto">
                  {roles.map((role) => (
                    <label
                      key={role}
                      className={`flex cursor-pointer items-center rounded-lg border p-2 transition-colors ${
                        selectedRole === role
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="role"
                        value={role}
                        checked={selectedRole === role}
                        onChange={() => {
                          setSelectedRole((prev) => 
                            prev === role ? null : role
                          );
                        }}
                        className="h-3 w-3 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-1 text-xs text-gray-900">{role}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={!selectedRole}
                className={`flex items-center rounded-lg px-4 py-2 text-xs font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedRole
                    ? "bg-[#F0FAFF] hover:bg-blue-50"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              >
                Next
                <img src={"/arrow.svg"} className={"p-1"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
