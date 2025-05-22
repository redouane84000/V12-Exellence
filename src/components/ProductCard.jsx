import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProductCard = ({ car }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-porsche-white rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Version Mobile */}
      <div className="md:hidden">
        <div className="relative h-48">
          <img 
            src={car.image} 
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
          <p className="text-porsche-gray mb-4">{car.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{car.price}</span>
            <button className="bg-porsche-black text-porsche-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-porsche-gray-dark transition-colors">
              Découvrir
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Version Desktop */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2">
          <div className="relative h-[400px]">
            <img 
              src={car.image} 
              alt={car.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-porsche-black/30 to-transparent" />
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold mb-4">{car.name}</h3>
              <p className="text-porsche-gray text-lg mb-6">{car.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-porsche-gray">Puissance</p>
                  <p className="text-xl font-semibold">{car.power}</p>
                </div>
                <div>
                  <p className="text-sm text-porsche-gray">Accélération</p>
                  <p className="text-xl font-semibold">{car.acceleration}</p>
                </div>
                <div>
                  <p className="text-sm text-porsche-gray">Vitesse max</p>
                  <p className="text-xl font-semibold">{car.maxSpeed}</p>
                </div>
                <div>
                  <p className="text-sm text-porsche-gray">Prix</p>
                  <p className="text-xl font-semibold">{car.price}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-porsche-black text-porsche-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-porsche-gray-dark transition-colors">
                Demander un essai
                <FaArrowRight />
              </button>
              <button className="border-2 border-porsche-black text-porsche-black px-6 py-3 rounded-full font-semibold hover:bg-porsche-black hover:text-porsche-white transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 