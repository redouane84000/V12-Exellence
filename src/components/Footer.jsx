import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-porsche-black text-porsche-white py-12">
      <div className="max-w-mobile mx-auto px-4 md:container md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-sm text-porsche-gray-light">
              {t('footer.aboutText')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/models" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                  {t('nav.models')}
                </Link>
              </li>
              <li>
                <Link to="/test-drive" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                  {t('nav.testDrive')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/test-drive" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                  {t('nav.testDrive')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-porsche-gray-light">
                V12-Excellence
              </li>
              <li className="text-sm text-porsche-gray-light">
                123 Avenue des Champs-Élysées
              </li>
              <li className="text-sm text-porsche-gray-light">
                75008 Paris, France
              </li>
              <li className="text-sm text-porsche-gray-light">
                +33 1 23 45 67 89
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-porsche-gray-dark">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-porsche-gray-light">
              © 2024 V12-Excellence. {t('footer.rights')}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/legal" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                {t('footer.legal')}
              </Link>
              <Link to="/privacy" className="text-sm text-porsche-gray-light hover:text-porsche-white transition-colors">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 