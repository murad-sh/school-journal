import { Link } from 'react-router-dom';
import { GraduationCap as MainLogo } from 'lucide-react';

const MainNav = ({ role }: { role: 'student' | 'teacher' }) => {
  const logoLink = role === 'student' ? '/schedule' : '/dashboard';

  return (
    <div className="flex gap-6 md:gap-10">
      <Link to={logoLink} className="items-center space-x-2 md:flex">
        <MainLogo />
        <span className="font-bold sm:inline-block">StudyStream</span>
      </Link>
    </div>
  );
};

export default MainNav;
