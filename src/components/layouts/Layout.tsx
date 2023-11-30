import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';
import { UserNav } from './UserNav';
import Sidebar from './Sidebar';
import { studentNav } from '../../config/navigation';

// TODO: get user from session
const user = {
  fullName: 'Murad Shahbazov',
  role: 'student',
};

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <UserNav fullName={user.fullName} role={user.role} />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <Sidebar items={studentNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
