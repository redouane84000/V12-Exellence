import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TestDriveForm from './components/TestDriveForm';
import Footer from './components/Footer';
import WhereWeAre from './components/WhereWeAre';
import ModelsSection from './components/ModelsSection';
import ContactPage from './components/ContactPage';
import TestDrivePage from './components/TestDrivePage';
import VehicleDetail from './components/VehicleDetail';
import TestDriveInfo from './components/TestDriveInfo';
import { vehicles } from './data/vehicles';

// Données de test pour les voitures
const cars = [
  {
    id: 1,
    name: 'Porsche 911',
    description: 'La légende continue. La 911 incarne l\'essence même de la sportivité.',
    price: 'À partir de 106 400 €',
    image: '/cars/911.jpg',
    power: '385 ch',
    acceleration: '4.2 s',
    maxSpeed: '293 km/h'
  },
  {
    id: 2,
    name: 'Porsche Taycan',
    description: 'L\'électrique la plus sportive jamais construite.',
    price: 'À partir de 89 900 €',
    image: '/cars/taycan.jpg',
    power: '476 ch',
    acceleration: '2.8 s',
    maxSpeed: '260 km/h'
  },
  {
    id: 3,
    name: 'Porsche Cayenne',
    description: 'Le SUV le plus sportif de sa catégorie.',
    price: 'À partir de 79 900 €',
    image: '/cars/cayenne.jpg',
    power: '340 ch',
    acceleration: '5.7 s',
    maxSpeed: '248 km/h'
  }
];

// Composant pour la page d'accueil
const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-porsche-white">
      <Header />
      
      {/* Version Mobile */}
      <div className="md:hidden">
        <Hero />
        <ModelsSection />
        <TestDriveInfo />
        <div className="max-w-mobile mx-auto px-4 py-8">
          <WhereWeAre />
        </div>
      </div>

      {/* Version Desktop */}
      <div className="hidden md:block">
        <Hero />
        <ModelsSection />
        <TestDriveInfo />
        <div className="container mx-auto px-4 py-16">
          <WhereWeAre />
        </div>
      </div>

      <TestDriveForm isOpen={showForm} onClose={() => setShowForm(false)} />
      <Footer />
    </div>
  );
};

// Composant pour la page des modèles
const ModelsPage = () => {
  return (
    <div className="min-h-screen bg-porsche-white">
      <Header />
      <div className="pt-16">
        <ModelsSection />
      </div>
    </div>
  );
};

// Composant pour la page de localisation
const LocationPage = () => {
  return (
    <div className="min-h-screen bg-porsche-white">
      <Header />
      <div className="pt-16">
        <div className="max-w-mobile mx-auto px-4 py-8 md:container md:mx-auto">
          <WhereWeAre />
        </div>
      </div>
    </div>
  );
};

// Composant pour la page de détail du véhicule
const VehicleDetailPage = () => {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === parseInt(id));
  
  if (!vehicle) {
    return <Navigate to="/" replace />;
  }

  return <VehicleDetail vehicle={vehicle} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/test-drive" element={<TestDrivePage />} />
        <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
