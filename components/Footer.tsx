import Link from 'next/link';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-teal to-brand-sky text-transparent bg-clip-text">
              TeachingDream
            </h2>
            <p className="mt-4 text-gray-400 text-sm">
              Helping you pass the FTCE with confidence through AI-powered conversational learning.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Start Free Trial</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/tos" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TeachingDream. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
