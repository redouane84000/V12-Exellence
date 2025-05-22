import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaCalendarAlt, FaClock, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import FilterBar from './FilterBar';

const ModelsPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Utiliser les données réelles au lieu des données mockées
    setVehicles(vehicles);
    setFilteredVehicles(vehicles);
    setLoading(false);
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = [...vehicles];

    // Filtre par marque
    if (filters.brand) {
      filtered = filtered.filter(v => v.brand === filters.brand);
    }

    // Filtre par modèle
    if (filters.model) {
      filtered = filtered.filter(v => v.model === filters.model);
    }

    // Filtre par année minimum
    if (filters.yearFrom) {
      filtered = filtered.filter(v => {
        const vehicleYear = typeof v.year === 'string' ? parseInt(v.year) : v.year;
        const filterYear = parseInt(filters.yearFrom);
        return vehicleYear >= filterYear;
      });
    }

    // Filtre par puissance DIN minimum
    if (filters.powerDINFrom) {
      filtered = filtered.filter(v => {
        const vehiclePower = typeof v.powerDIN === 'string' ? parseInt(v.powerDIN) : v.powerDIN;
        const filterPower = parseInt(filters.powerDINFrom);
        return vehiclePower >= filterPower;
      });
    }

    // Filtre par puissance fiscale minimum
    if (filters.powerFiscalFrom) {
      filtered = filtered.filter(v => {
        const vehiclePower = typeof v.powerFiscal === 'string' ? parseInt(v.powerFiscal) : v.powerFiscal;
        const filterPower = parseInt(filters.powerFiscalFrom);
        return vehiclePower >= filterPower;
      });
    }

    // Filtre par ville
    if (filters.city) {
      filtered = filtered.filter(v => v.city === filters.city);
    }

    // Filtre par transmission
    if (filters.transmission) {
      filtered = filtered.filter(v => v.transmission === filters.transmission);
    }

    // Filtre par carburant
    if (filters.fuel) {
      filtered = filtered.filter(v => v.fuel === filters.fuel);
    }

    setFilteredVehicles(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-porsche-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-porsche-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-porsche-white">
      <Header />
      <div className="pt-16">
        <div className="max-w-mobile mx-auto px-4 py-8 md:container md:mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-porsche-black mb-8">
            Nos Modèles
          </h1>

          {/* Barre de filtres */}
          <FilterBar onFilterChange={handleFilterChange} />

          {/* Grille des véhicules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={vehicle.images[0]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{vehicle.name}</h3>
                    <p className="text-sm opacity-90">{vehicle.shortDescription}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCar className="text-porsche-black" />
                      <span className="text-porsche-gray">{vehicle.mileage} km</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-porsche-black" />
                      <span className="text-porsche-gray">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-porsche-black" />
                      <span className="text-porsche-gray">{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-porsche-black" />
                      <span className="text-porsche-gray">{vehicle.firstHand ? 'Première main' : 'Occasion'}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-porsche-black" />
                      <span className="text-porsche-gray">{vehicle.city}</span>
                    </div>
                    <span className="text-xl font-bold text-porsche-black">{vehicle.price}</span>
                  </div>

                  <button
                    onClick={() => window.location.href = `/models/${vehicle.id}`}
                    className="w-full bg-porsche-black text-white py-3 rounded-lg hover:bg-porsche-gray-dark transition-colors"
                  >
                    Voir les détails
                  </button>
                </div>
              </motion.div>
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
      <Footer />
    </div>
  );
};

export default ModelsPage; 