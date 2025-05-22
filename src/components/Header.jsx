import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ forceWhite = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/models', label: t('nav.models') },
    { path: '/test-drive', label: t('nav.testDrive') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/location', label: t('nav.location') }
  ];

  const headerClasses = forceWhite 
    ? 'bg-white text-porsche-black shadow-md'
    : isScrolled 
      ? 'bg-white text-porsche-black shadow-md'
      : 'bg-transparent text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-mobile mx-auto px-4 md:container md:mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            V12-Excellence
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-porsche-red transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/models" className="hover:text-porsche-red transition-colors">
              {t('nav.models')}
            </Link>
            <Link to="/test-drive" className="hover:text-porsche-red transition-colors">
              Demander un devis
            </Link>
            <Link to="/contact" className="hover:text-porsche-red transition-colors">
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </nav>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block py-2 text-sm font-medium text-porsche-black hover:text-porsche-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/models"
                className="block py-2 text-sm font-medium text-porsche-black hover:text-porsche-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.models')}
              </Link>
              <Link
                to="/test-drive"
                className="block py-2 text-sm font-medium text-porsche-black hover:text-porsche-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander un devis
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-sm font-medium text-porsche-black hover:text-porsche-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 