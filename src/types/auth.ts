export interface AuthProps {
  onSubmit: (email: string) => void;
}

export interface GoogleAuthProps {
  onGoogleSignIn: () => void;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}
