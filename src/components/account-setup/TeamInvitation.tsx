// src/components/InviteTeam.tsx
import { useState } from "react";
import { TeamInvitationProps } from "../../types/account-setup";

const TeamInvitation: React.FC<TeamInvitationProps> = ({ onNext, onBack }) => {
  const [inviteEmails, setInviteEmails] = useState<
    Array<{ email: string; role: string }>
  >([
    { email: "", role: "Admin" },
    { email: "", role: "Member" },
  ]);
  const [allowAutoSignup, setAllowAutoSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validEmails = inviteEmails
      .filter((item) => item.email.trim() !== "")
      .map((item) => item.email);

    onNext({ invitedEmails: validEmails, allowAutoSignup });
  };

  const addAnotherEmail = () => {
    setInviteEmails([...inviteEmails, { email: "", role: "Member" }]);
  };

  const updateEmail = (index: number, email: string) => {
    const newEmails = [...inviteEmails];
    newEmails[index].email = email;
    setInviteEmails(newEmails);
  };

  const updateRole = (index: number, role: string) => {
    const newEmails = [...inviteEmails];
    newEmails[index].role = role;
    setInviteEmails(newEmails);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center py-16">
      {/* Logo */}
      <h1
        className="text-5xl font-medium text-[#151515] font-['Bricolage_Grotesque'] mb-16"
        style={{ fontSize: "40px", lineHeight: "normal" }}
      >
        Boarddd
      </h1>

      {/* Back button - hidden in this view based on the image */}
      <button
        type="button"
        onClick={onBack}
        className="hidden items-center text-sm text-gray-400 hover:text-gray-700 md:absolute md:left-40 md:top-40"
      >
        <img src={"/back_arrow.svg"} className={"p-2"} />
        Go back
      </button>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-8">
        {/* Heading */}
        <h2
          className="text-[#151515] font-['Bricolage_Grotesque'] text-center"
          style={{ fontSize: "24px", fontWeight: 500, lineHeight: "normal" }}
        >
          Who else is on your team?
        </h2>

        {/* Invite with link section */}
        <div className="space-y-2">
          <p className="text-[#151515] font-['Poppins'] text-[14px] font-normal">
            Invite with link{" "}
            <span className="text-[#151515] text-[12px]">
              (anyone with a @workspin.net email)
            </span>
          </p>
          <div
            className="flex items-center space-x-2 border border-[#BCBCBC] rounded-[5px] overflow-hidden"
            style={{ height: "50px" }}
          >
            <input
              type="text"
              value="https://workspin-group.monday.com/users/sign_up?invitationId=471..."
              readOnly
              className="flex-grow px-4 py-2 text-[#005FD9] font-['Poppins'] text-[12px] font-normal border-none focus:outline-none h-full"
              style={{ height: "50px" }}
            />
            <button
              type="button"
              className="px-4 py-2 text-[#151515] font-['Poppins'] text-[12px] font-normal hover:bg-gray-50 flex items-center border-l border-gray-300 bg-[#F0FAFF] h-full"
            >
              <img src="/copy.svg" alt="Copy" className="w-4 h-4 mr-1" />
              Copy Invite
            </button>
          </div>
        </div>

        {/* Invite with email section */}
        <div className="space-y-3">
          <p className="text-[#151515] font-['Poppins'] text-[14px] font-normal">
            Invite with email
          </p>
          {inviteEmails.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="email"
                value={item.email}
                onChange={(e) => updateEmail(index, e.target.value)}
                placeholder="Add email here"
                className="flex-grow px-4 py-2 text-[#151515] font-['Poppins'] text-[12px] font-normal border border-[#BCBCBC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ height: "50px", maxWidth: "581px" }}
              />
              <div className="relative">
                <select
                  value={item.role}
                  onChange={(e) => updateRole(index, e.target.value)}
                  className={`px-4 py-2 text-[#151515] font-['Poppins'] text-[12px] font-normal border border-[#BCBCBC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8 bg-[#F0FAFF]`}
                  style={{ height: "50px", minWidth: "120px" }}
                >
                  <option value="Admin">Admin</option>
                  <option value="Member">Member</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <img src="/Frame.svg" alt="Dropdown" className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addAnotherEmail}
            className="flex items-center text-black font-['Poppins'] text-[12px] font-normal hover:underline"
          >
            <img
              src="/add_another.svg"
              alt="Dropdown"
              className="mr-2 ml-4 w-4 h-4"
            />
            Add another
          </button>
        </div>

        {/* Auto signup checkbox */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="autoSignup"
            checked={allowAutoSignup}
            onChange={(e) => setAllowAutoSignup(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#005FD9] focus:ring-[#005FD9]"
          />
          <label
            htmlFor="autoSignup"
            className="text-[#151515] font-['Poppins'] text-[12px] font-normal"
          >
            Allow automatic signups with an{" "}
            <span className="font-medium">@workspin.net</span> email address
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center space-y-4 pt-8">
          <button
            type="submit"
            className="flex items-center justify-center rounded-[5px] bg-[#005FD9] text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ width: "219px", height: "50px", flexShrink: 0 }}
          >
            <img
              src="/white_arrow.svg"
              alt="Arrow right"
              className="w-10 h-8 mr-2"
            />
            Invite your team
          </button>
          <button
            type="button"
            className="text-sm text-gray-400"
            onClick={onBack}
          >
            Remind me later
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamInvitation;
