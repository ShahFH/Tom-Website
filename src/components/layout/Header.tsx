import React, { useState } from 'react';
import NavLink from './NavLink';
import { Linkedin, Globe, Twitter, Menu, X } from 'lucide-react';
import './Style.css';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  glowColor: string;
  bgGradient: string;
}

function SocialLink({
  href,
  icon,
  label,
  glowColor,
  bgGradient,
}: SocialLinkProps) {
  return (
    <NavLink href={href}>
      <div className={'flex align-center content-center items-center gap-x-1.5'}>
        <div
          className={`relative flex h-8 w-8 items-center justify-center rounded-lg ${bgGradient}`}
        >
          <div
            className={`absolute inset-0 -z-10 rounded-lg blur-md ${glowColor} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
          />
          <div className="relative z-10">{icon}</div>
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
    </NavLink>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto sm:left-20 sm:right-20 sm:top-4">
      <div className="mx-auto max-w-[680px] rounded-none sm:rounded-xl bg-black/80 backdrop-blur-xl">
        <nav className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-semibold text-white Tom-logo">Tom</div>

            {/* Mobile Menu Toggle */}
            <div className="sm:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Navigation for Desktop */}
            <div className="hidden sm:flex items-center space-x-6">
              <SocialLink
                href=""
                icon={<Linkedin className="h-4 w-4" />}
                label="Linkedin"
                glowColor="bg-blue-500/50"
                bgGradient="bg-blue-500/20"
              />
              <SocialLink
                href=""
                icon={<Globe className="h-4 w-4" />}
                label="Website"
                glowColor="bg-purple-500/50"
                bgGradient="bg-purple-500/20"
              />
              <SocialLink
                href=""
                icon={<Twitter className="h-4 w-4" />}
                label="Twitter"
                glowColor="bg-gray-500/50"
                bgGradient="bg-gray-500/20"
              />
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 sm:hidden bg-black/90 backdrop-blur-xl">
                <div className="flex flex-col items-center space-y-4 py-4">
                  <SocialLink
                    href=""
                    icon={<Linkedin className="h-4 w-4" />}
                    label="Linkedin"
                    glowColor="bg-blue-500/50"
                    bgGradient="bg-blue-500/20"
                  />
                  <SocialLink
                    href=""
                    icon={<Globe className="h-4 w-4" />}
                    label="Website"
                    glowColor="bg-purple-500/50"
                    bgGradient="bg-purple-500/20"
                  />
                  <SocialLink
                    href=""
                    icon={<Twitter className="h-4 w-4" />}
                    label="Twitter"
                    glowColor="bg-gray-500/50"
                    bgGradient="bg-gray-500/20"
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
