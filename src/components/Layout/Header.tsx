import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// 1. Initialize theme from localStorage or default to dark
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'light' ? false : true;
  });

  // 2. Handle theme side effects
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'subteams', label: 'Subteams' },
    { id: 'projects', label: 'Projects' },
    { id: 'competitions', label: 'Competitions' },
    { id: 'join', label: 'Join Us' },
    { id: 'sponsors', label: 'Sponsors' },
  ];

  return (
    <header className="bg-parchment-50 dark:bg-space-indigo-950 shadow-sm dark:shadow-none sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <img src="/images/ThicRLNobackground.png" alt="The Rocket Launchers Logo" className="h-12 w-12 object-contain" />
            <span className="ml-0 text-xl font-bold text-prussian-blue-900 dark:text-parchment-50">The Rocket Launchers</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-prussian-blue-700 dark:text-parchment-200 hover:text-primary-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* 3. Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-4 p-2 rounded-full bg-prussian-blue-50 dark:bg-space-indigo-800 text-lg hover:opacity-80 transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
              <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-prussian-blue-900 dark:bg-parchment-50"></span>
              <span className="w-full h-0.5 bg-prussian-blue-900 dark:bg-parchment-50"></span>
              <span className="w-full h-0.5 bg-prussian-blue-900 dark:bg-parchment-50"></span>
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  currentPage === item.id
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-prussian-blue-700 dark:text-parchment-200 hover:bg-parchment-50 dark:hover:bg-space-indigo-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-full text-left px-3 py-2 text-base font-medium text-prussian-blue-700 dark:text-parchment-200"
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
