import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';

const FilterBar = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    yearFrom: '',
    powerDINFrom: '',
    powerFiscalFrom: '',
    city: '',
    transmission: '',
    fuel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    setFilters({
      brand: '',
      model: '',
      yearFrom: '',
      powerDINFrom: '',
      powerFiscalFrom: '',
      city: '',
      transmission: '',
      fuel: ''
    });
    onFilterChange({});
  };

  return (
    <div className="mb-8">
      {/* Bouton de filtre pour mobile */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-porsche-black text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-4"
        >
          <FaFilter />
          Filtres
        </button>
      )}

      {/* Barre de filtres */}
      <AnimatePresence>
        {(!isMobile || isOpen) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-porsche-black">Filtres</h3>
              {isMobile && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-porsche-gray hover:text-porsche-black"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Marque */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Marque
                  </label>
                  <select
                    name="brand"
                    value={filters.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Toutes les marques</option>
                    <option value="Porsche">Porsche</option>
                    <option value="BMW">BMW</option>
                  </select>
                </div>

                {/* Modèle */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Modèle
                  </label>
                  <select
                    name="model"
                    value={filters.model}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Tous les modèles</option>
                    {filters.brand === 'Porsche' && (
                      <>
                        <option value="911">911</option>
                        <option value="Taycan">Taycan</option>
                        <option value="Cayenne">Cayenne</option>
                        <option value="718">718</option>
                      </>
                    )}
                    {filters.brand === 'BMW' && (
                      <>
                        <option value="XM">XM</option>
                        <option value="i8">i8</option>
                        <option value="M4 Competition">M4 Competition</option>
                        <option value="M8 Competition">M8 Competition</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Année minimum */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Année minimum
                  </label>
                  <select
                    name="yearFrom"
                    value={filters.yearFrom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Toutes les années</option>
                    {Array.from({ length: 15 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Puissance DIN minimum */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Puissance DIN minimum
                  </label>
                  <select
                    name="powerDINFrom"
                    value={filters.powerDINFrom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Toutes les puissances</option>
                    {[300, 400, 500, 600, 700].map(power => (
                      <option key={power} value={power}>{power} ch</option>
                    ))}
                  </select>
                </div>

                {/* Puissance Fiscale minimum */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Puissance Fiscale minimum
                  </label>
                  <select
                    name="powerFiscalFrom"
                    value={filters.powerFiscalFrom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Toutes les puissances</option>
                    {[30, 35, 40, 45, 50, 55].map(power => (
                      <option key={power} value={power}>{power} CV</option>
                    ))}
                  </select>
                </div>

                {/* Ville */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Ville
                  </label>
                  <select
                    name="city"
                    value={filters.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Toutes les villes</option>
                    <option value="Avignon">Avignon</option>
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Transmission
                  </label>
                  <select
                    name="transmission"
                    value={filters.transmission}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Toutes les transmissions</option>
                    <option value="Manuelle">Manuelle</option>
                    <option value="Automatique">Automatique</option>
                  </select>
                </div>

                {/* Carburant */}
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Carburant
                  </label>
                  <select
                    name="fuel"
                    value={filters.fuel}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Tous les carburants</option>
                    <option value="Essence">Essence</option>
                    <option value="Électrique">Électrique</option>
                  </select>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-porsche-black text-white py-3 rounded-lg hover:bg-porsche-gray-dark transition-colors"
                >
                  Appliquer les filtres
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-porsche-gray-light text-porsche-black py-3 rounded-lg hover:bg-porsche-gray transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterBar; 