import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import FilterBar from './FilterBar';
import { FaCar, FaCalendarAlt, FaClock, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ModelsSection = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const { t } = useTranslation();

  const handleFilterChange = (filters) => {
    let filtered = [...vehicles];

    if (filters.brand) {
      filtered = filtered.filter(v => v.brand === filters.brand);
    }
    if (filters.model) {
      filtered = filtered.filter(v => v.model === filters.model);
    }
    if (filters.yearFrom) {
      filtered = filtered.filter(v => v.year >= parseInt(filters.yearFrom));
    }
    if (filters.powerDINFrom) {
      filtered = filtered.filter(v => v.powerDIN >= parseInt(filters.powerDINFrom));
    }
    if (filters.powerFiscalFrom) {
      filtered = filtered.filter(v => v.powerFiscal >= parseInt(filters.powerFiscalFrom));
    }
    if (filters.city) {
      filtered = filtered.filter(v => v.city === filters.city);
    }
    if (filters.transmission) {
      filtered = filtered.filter(v => v.transmission === filters.transmission);
    }
    if (filters.fuel) {
      filtered = filtered.filter(v => v.fuel === filters.fuel);
    }

    setFilteredVehicles(filtered);
  };

  return (
    <div className="bg-porsche-white py-16">
      <div className="max-w-mobile mx-auto px-4 md:container md:mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1f2e] tracking-wider bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            V12-Excellence
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-porsche-black mb-8">
          Nos Modèles
        </h2>

        {/* Barre de filtres */}
        <FilterBar onFilterChange={handleFilterChange} />

        {/* Grille des véhicules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredVehicles.map((vehicle) => (
            <Link to={`/vehicle/${vehicle.id}`} key={vehicle.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Image du véhicule */}
                <div className="relative h-56">
                  <img
                    src={vehicle.images[0]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                    <p className="text-sm text-white/90">{vehicle.shortDescription}</p>
                  </div>
                </div>

                {/* Informations du véhicule */}
                <div className="p-6">
                  {/* Caractéristiques principales */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-porsche-red/10 rounded-full flex items-center justify-center">
                        <FaCar className="text-porsche-red" />
                      </div>
                      <span className="text-porsche-gray-dark">{vehicle.mileage} km</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-porsche-red/10 rounded-full flex items-center justify-center">
                        <FaCalendarAlt className="text-porsche-red" />
                      </div>
                      <span className="text-porsche-gray-dark">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-porsche-red/10 rounded-full flex items-center justify-center">
                        <FaClock className="text-porsche-red" />
                      </div>
                      <span className="text-porsche-gray-dark">{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-porsche-red/10 rounded-full flex items-center justify-center">
                        <FaUser className="text-porsche-red" />
                      </div>
                      <span className="text-porsche-gray-dark">{vehicle.firstHand ? 'Première main' : 'Occasion'}</span>
                    </div>
                  </div>

                  {/* Localisation et prix */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-porsche-red/10 rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt className="text-porsche-red" />
                      </div>
                      <span className="text-porsche-gray-dark">{vehicle.city}</span>
                    </div>
                    <span className="text-xl font-bold text-porsche-black">{vehicle.price}</span>
                  </div>

                  {/* Bouton de détails */}
                  <button className="w-full bg-gradient-to-r from-porsche-red to-porsche-red-dark text-white py-3 rounded-xl hover:from-porsche-red-dark hover:to-porsche-red transition-all duration-300 font-medium">
                    Voir les détails
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-porsche-gray text-lg">
              Aucun véhicule ne correspond à vos critères de recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelsSection; 