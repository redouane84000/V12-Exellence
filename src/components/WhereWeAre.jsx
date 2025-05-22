import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const WhereWeAre = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-porsche-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-porsche-black">Où sommes-nous ?</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-porsche-black mt-1" />
          <div>
            <p className="text-porsche-gray-dark font-medium">Notre adresse</p>
            <p className="text-porsche-gray">10N rue de l'Arménie</p>
            <p className="text-porsche-gray">84000 AVIGNON</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaPhone className="text-porsche-black mt-1" />
          <div>
            <p className="text-porsche-gray-dark font-medium">Téléphone</p>
            <p className="text-porsche-gray">04 90 XX XX XX</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaEnvelope className="text-porsche-black mt-1" />
          <div>
            <p className="text-porsche-gray-dark font-medium">Email</p>
            <p className="text-porsche-gray">contact@vente-auto.fr</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.1234567890123!2d4.8057!3d43.9493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDU2JzU3LjUiTiA0wrA0OCcyMC41IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default WhereWeAre; 