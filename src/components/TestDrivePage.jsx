import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const TestDrivePage = () => {
  const location = useLocation();
  const vehicle = location.state?.vehicle;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    vehicleCode: vehicle?.code || '',
    message: ''
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
        <div className="max-w-mobile mx-auto px-4 py-8 md:container md:mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-porsche-black mb-8">
            Demander un Essai
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulaire de demande d'essai */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-porsche-gray mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-porsche-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-porsche-gray mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  />
                </div>

                {vehicle && (
                  <div>
                    <label htmlFor="vehicleCode" className="block text-porsche-gray mb-2">
                      Code véhicule
                    </label>
                    <input
                      type="text"
                      id="vehicleCode"
                      name="vehicleCode"
                      value={formData.vehicleCode}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light bg-porsche-gray-light/20"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="preferredDate" className="block text-porsche-gray mb-2">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-porsche-gray mb-2">
                    Horaire souhaité
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  >
                    <option value="">Sélectionnez un horaire</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-porsche-gray mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-porsche-gray-light focus:border-porsche-black focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-porsche-black text-white py-4 rounded-lg hover:bg-porsche-gray-dark transition-colors text-lg font-medium"
                >
                  Demander un essai
                </button>
              </form>
            </div>

            {/* Informations sur les essais */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-porsche-black mb-6">
                Informations sur les Essais
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-porsche-black mb-2">
                    Durée de l'essai
                  </h3>
                  <p className="text-porsche-gray">
                    Nos essais durent environ 30 minutes. Nous vous demandons de vous présenter 15 minutes avant l'horaire prévu pour les formalités administratives.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-porsche-black mb-2">
                    Documents requis
                  </h3>
                  <ul className="list-disc list-inside text-porsche-gray space-y-2">
                    <li>Permis de conduire valide</li>
                    <li>Carte d'identité</li>
                    <li>Justificatif de domicile de moins de 3 mois</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-porsche-black mb-2">
                    Horaires disponibles
                  </h3>
                  <p className="text-porsche-gray">
                    Lundi - Vendredi : 9h00 - 12h00 et 14h00 - 18h00<br />
                    Samedi : 9h00 - 12h00 et 14h00 - 17h00<br />
                    Dimanche : Fermé
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-porsche-black mb-2">
                    Contact
                  </h3>
                  <p className="text-porsche-gray">
                    Pour toute question concernant les essais, n'hésitez pas à nous contacter au :<br />
                    +33 4 90 00 00 00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestDrivePage; 