import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh', name: '中文' }
];

const LangSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('fr');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    // Ici, vous pourrez ajouter la logique de changement de langue
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-white/90 via-porsche-gray-light/80 to-white/90 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300 border border-white/20 hover:border-white/40 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <FaGlobe className="text-porsche-black text-lg group-hover:text-porsche-gray-dark transition-colors" />
          <motion.div
            className="absolute inset-0 bg-porsche-black/10 rounded-full"
            animate={{ scale: isOpen ? 1.5 : 1, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="font-medium text-porsche-black group-hover:text-porsche-gray-dark transition-colors">
          {languages.find(lang => lang.code === selectedLang)?.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          <FaChevronDown className="text-porsche-black group-hover:text-porsche-gray-dark transition-colors" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
            className="absolute right-0 mt-3 w-56 bg-gradient-to-b from-white/95 via-porsche-gray-light/90 to-white/95 backdrop-blur-md rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.15)] border border-white/20 overflow-hidden z-50"
          >
            <div className="p-1">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLangChange(lang.code)}
                  className={`w-full px-4 py-3 text-left rounded-lg hover:bg-gradient-to-r hover:from-porsche-black/5 hover:to-porsche-black/10 transition-all duration-200 flex items-center gap-3 ${
                    selectedLang === lang.code ? 'bg-gradient-to-r from-porsche-black/10 to-porsche-black/5' : ''
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium text-porsche-black min-w-[2.5rem]">{lang.code.toUpperCase()}</span>
                  <span className="text-porsche-gray text-sm">{lang.name}</span>
                  {selectedLang === lang.code && (
                    <motion.div
                      layoutId="activeLang"
                      className="w-1 h-6 bg-gradient-to-b from-porsche-black to-porsche-gray-dark rounded-full ml-auto"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LangSelector; 