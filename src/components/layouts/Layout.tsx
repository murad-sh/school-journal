import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import { UserNav } from "./UserNav";
import Sidebar from "./Sidebar";
import { studentNav, teacherNav } from "../../config/navigation";
import User from "@/models/user";
import { Footer } from "./Footer";
import { ModeToggle } from "../theme/mode-toggle";

// TODO: get user from session
const user: User = {
  fullName: "Murad Shahbazov",
  role: "student",
  // role: "teacher",
};

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav role={user.role} />
          <div className="flex items-center justify-center gap-3">
            <ModeToggle />
            <UserNav fullName={user.fullName} role={user.role} />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <Sidebar items={user.role === "student" ? studentNav : teacherNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
