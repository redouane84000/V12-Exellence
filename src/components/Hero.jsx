import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/src/assets/rs3.png',
    '/src/assets/c63.png',
    '/src/assets/couverture.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Voiture de luxe"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-mobile mx-auto px-4 md:container md:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Une expérience de conduite inégalée
            </p>
            <Link
              to="/models"
              className="inline-block bg-porsche-red text-white px-8 py-3 rounded-full hover:bg-porsche-red-dark transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Indicateurs d'images */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Version Mobile */}
      <div className="md:hidden">
        <div className="relative h-[500px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="Voiture de luxe"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              Découvrez l'Excellence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg mb-6"
            >
              Une expérience de conduite inégalée
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-porsche-white text-porsche-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-porsche-gray-light transition-colors"
            >
              Demander un essai
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Version Desktop */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold leading-tight"
              >
                Découvrez l'Excellence Automobile
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-porsche-gray-light"
              >
                Une expérience de conduite inégalée, une passion pour l'excellence
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4"
              >
                <button className="bg-porsche-white text-porsche-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-porsche-gray-light transition-colors">
                  Demander un essai
                  <FaArrowRight />
                </button>
                <button className="border-2 border-porsche-white text-porsche-white px-8 py-4 rounded-full font-semibold hover:bg-porsche-white hover:text-porsche-black transition-colors">
                  Nous contacter
                </button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-porsche-black via-transparent to-transparent z-10 rounded-[2rem]" />
              <div className="absolute inset-0 bg-gradient-to-l from-porsche-black via-transparent to-transparent z-10 rounded-[2rem]" />
              <div className="absolute inset-0 bg-gradient-to-b from-porsche-black via-transparent to-transparent z-10 rounded-[2rem]" />
              <div className="relative z-0 w-[120%] h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="Voiture de luxe"
                    className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 rounded-[2rem]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 