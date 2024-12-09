import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default NavLink;