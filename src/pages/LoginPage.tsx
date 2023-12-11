import AuthForm from "@/components/auth/AuthForm";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useTheme } from "@/components/theme/theme-provider";

import { Toaster } from "sonner";

const LoginPage = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <div className="flex h-screen flex-col justify-between">
      <main className="flex flex-grow items-center justify-center">
        <AuthForm />
      </main>
      <Toaster richColors theme={theme} position="top-center" />
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-slate-900 dark:text-slate-100 md:text-left">
            &copy; {currentYear} All rights reserved.
          </p>
          <ModeToggle />
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
