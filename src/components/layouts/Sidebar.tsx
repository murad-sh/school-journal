import { useLocation } from 'react-router-dom';
import type { SidebarNavItem } from '../../types/index';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarProps {
  items: SidebarNavItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const { pathname } = useLocation();

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => (
        <Link key={index} to={item.to}>
          <span
            className={cn(
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
              pathname === item.to ? 'bg-accent' : 'transparent'
            )}
          >
            {<item.icon className="mr-2 h-4 w-4" />}
            <span>{item.title}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
