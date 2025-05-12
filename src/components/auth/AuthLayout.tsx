import { AuthLayoutProps } from "../../types/auth";

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Content */}
      <div className="flex w-1/2 flex-col items-center justify-center px-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>

      {/* Right side - Grey background */}
      <div className="w-1/2 bg-gray-200" />
    </div>
  );
};

export default AuthLayout;
