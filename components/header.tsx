
'use client';

import { useState, useEffect } from 'react';

import { Home, Folder, Briefcase, BookOpen, Compass, Send } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import '../assets/styles/header.css';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: Home, path: '/' },
    { id: 'projects', icon: Folder, path: '/#projects' },
    { id: 'experience', icon: Briefcase, path: '/#experience' },
    { id: 'articles', icon: BookOpen, path: '/articles' },
    { id: 'beyond', icon: Compass, path: '/#beyond' },
    { id: 'contact', icon: Send, path: '/#contact' },
  ];

  const handleNavClick = (id: string, path: string) => {
    if (id === 'articles') {
      // Articles always goes to its own page
      return;
    }

    if (isHomePage) {
      setActiveSection(id);
      // Also update hash without triggering full reload if possible
      window.history.pushState(null, '', path);
    } else {
      // On other pages, navigate back to home with the section hash
      router.push(path);
    }
  };

  return (
    <nav className={`header-nav ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <div className="nav-pill">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = isHomePage
            ? activeSection === item.id
            : pathname.startsWith(item.path) && item.id === 'articles';

          if (item.id === 'articles') {
            return (
              <Link
                key={item.id}
                href="/articles"
                className={`nav-item-btn ${isActive ? 'active' : ''}`}
                title="Articles"
              >
                <Icon size={20} />
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.path)}
              className={`nav-item-btn ${isActive ? 'active' : ''}`}
              title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;