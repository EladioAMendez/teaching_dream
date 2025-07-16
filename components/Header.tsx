"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import config from "@/config";
import ButtonSignin from "./ButtonSignin";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/#features",
    label: "Features",
  },
  {
    href: "/#testimonials",
    label: "Success Stories",
  },
  {
    href: "/#pricing",
    label: "Pricing",
  },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [searchParams]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" title={`${config.appName} homepage`}>
              <div className="text-2xl font-bold bg-gradient-to-r from-brand-coral to-brand-sky bg-clip-text text-transparent">
                {config.appName}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-gray-700 hover:text-brand-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  title={link.label}
                >
                  {link.label}
                </Link>
              ))}
              <ButtonSignin text="Start Free Trial" extraStyle="bg-gradient-to-r from-brand-coral to-brand-sky hover:from-[#FF5252] hover:to-[#42A5F5] text-white" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-teal p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="text-gray-700 hover:text-brand-teal block px-3 py-2 rounded-md text-base font-medium"
                title={link.label}
              >
                {link.label}
              </Link>
            ))}
            <ButtonSignin text="Start Free Trial" extraStyle="w-full mt-2 bg-gradient-to-r from-brand-coral to-brand-sky hover:from-[#FF5252] hover:to-[#42A5F5] text-white" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
