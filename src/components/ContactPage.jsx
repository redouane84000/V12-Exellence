import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const location = useLocation();
  const vehicle = location.state?.vehicle;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    vehicleCode: vehicle?.code || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-porsche-white">
      <Header />
      <div className="pt-16">
        <div className="max-w-mobile mx-auto px-4 py-12 md:container md:mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-porsche-black mb-8 text-center">
            Contactez-nous
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-porsche-black mb-6">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-porsche-gray-light p-3 rounded-full">
                    <FaPhone className="text-porsche-black text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-porsche-black mb-1">Téléphone</h3>
                    <a href="tel:0782197182" className="text-porsche-gray hover:text-porsche-black transition-colors">
                      07.82.19.71.82
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-porsche-gray-light p-3 rounded-full">
                    <FaEnvelope className="text-porsche-black text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-porsche-black mb-1">Email</h3>
                    <a href="mailto:contact@v12-excellence.fr" className="text-porsche-gray hover:text-porsche-black transition-colors">
                      contact@v12-excellence.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-porsche-gray-light p-3 rounded-full">
                    <FaMapMarkerAlt className="text-porsche-black text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-porsche-black mb-1">Adresse</h3>
                    <p className="text-porsche-gray">
                      123 Avenue des Prestiges<br />
                      84000 Avignon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-porsche-black mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-porsche-gray mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-porsche-gray mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none transition-colors"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-porsche-gray mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none transition-colors h-32 resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-porsche-black text-white py-4 rounded-lg hover:bg-porsche-gray-dark transition-colors font-medium"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 