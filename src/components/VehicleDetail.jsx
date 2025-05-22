import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

const VehicleDetail = ({ vehicle }) => {
  const [activeTab, setActiveTab] = useState('characteristics');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-porsche-black to-porsche-gray-dark">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header forceWhite={true} />
      </div>
      <div className="pt-16">
        {/* Carrousel d'images */}
        <div className="relative flex justify-center items-center h-[42vh] md:h-[51vh] bg-gradient-to-b from-porsche-red/20 to-transparent">
          <div className="w-[85%] h-full overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-contain rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Contrôles du carrousel */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-porsche-red/80 text-white p-3 rounded-full hover:bg-porsche-red transition-all duration-300 shadow-lg hover:shadow-porsche-red/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-porsche-red/80 text-white p-3 rounded-full hover:bg-porsche-red transition-all duration-300 shadow-lg hover:shadow-porsche-red/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateurs de position */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {vehicle.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-porsche-red scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Informations du véhicule */}
        <div className="max-w-mobile mx-auto px-4 py-8 md:container md:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-porsche-black/95 to-porsche-gray-dark/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 border border-porsche-red/20"
          >
            {/* En-tête du véhicule */}
            <div className="mb-8 text-center">
              <div className="mb-4">
                <span className="text-porsche-red font-bold text-xl">Référence: {String(vehicle.id).padStart(3, '0')}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-porsche-red to-porsche-red-dark bg-clip-text text-transparent">
                {vehicle.brand} {vehicle.model}
              </h1>
              <p className="text-2xl text-porsche-red font-semibold">
                {formatPrice(vehicle.price)}
              </p>
            </div>

            {/* Onglets */}
            <div className="border-b border-porsche-red/20 mb-8">
              <div className="flex justify-center space-x-8">
                {['characteristics', 'options', 'description'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 font-medium text-lg transition-all duration-300 ${
                      activeTab === tab
                        ? 'text-white border-b-2 border-porsche-red'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {t(`vehicle.${tab}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Contenu des onglets */}
            <div className="mb-12">
              {activeTab === 'characteristics' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { key: 'brand', value: vehicle.brand },
                    { key: 'model', value: vehicle.model },
                    { key: 'year', value: vehicle.year },
                    { key: 'fuel', value: vehicle.fuel },
                    { key: 'mileage', value: `${vehicle.mileage.toLocaleString()} km` },
                    { key: 'transmission', value: vehicle.transmission },
                    { key: 'city', value: vehicle.city },
                    { key: 'price', value: formatPrice(vehicle.price) },
                    { key: 'firstHand', value: vehicle.firstHand ? 'Oui' : 'Non' },
                    { key: 'color', value: vehicle.color },
                    { key: 'powerDIN', value: `${vehicle.powerDIN} ch` },
                    { key: 'powerFiscal', value: `${vehicle.powerFiscal} CV` },
                    { key: 'maintenance', value: vehicle.maintenance ? 'Oui' : 'Non' }
                  ].map(({ key, value }) => (
                    <div key={key} className="bg-porsche-black/50 rounded-xl p-4 hover:bg-porsche-black/70 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-porsche-red mb-2">{t(`vehicle.details.${key}`)}</h3>
                      <p className="text-white/90">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'options' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-porsche-red/10 to-porsche-black/10 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <svg className="w-6 h-6 text-porsche-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('vehicle.options')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vehicle.options.map((option, index) => (
                        <div
                          key={index}
                          className="bg-porsche-black/50 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-porsche-red/20 hover:border-porsche-red/40 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-porsche-red/20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-porsche-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-white font-medium">{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'description' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-porsche-red/10 to-porsche-black/10 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <svg className="w-6 h-6 text-porsche-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('vehicle.description')}
                    </h3>
                    <div className="bg-porsche-black/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-porsche-red/20">
                      <p className="text-white/90 leading-relaxed text-lg">
                        {vehicle.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="/test-drive"
                className="px-8 py-3 bg-gradient-to-r from-porsche-red to-porsche-red-dark text-white rounded-full hover:from-porsche-red-dark hover:to-porsche-red transition-all duration-300 text-center font-medium shadow-lg hover:shadow-porsche-red/50 transform hover:scale-105"
              >
                {t('vehicle.testDrive')}
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-porsche-black to-porsche-gray-dark text-white rounded-full hover:from-porsche-gray-dark hover:to-porsche-black transition-all duration-300 text-center font-medium shadow-lg hover:shadow-porsche-black/50 transform hover:scale-105"
              >
                {t('vehicle.contact')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VehicleDetail; 