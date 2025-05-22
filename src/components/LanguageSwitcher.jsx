import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('fr')}
        className={`text-sm font-medium ${i18n.language === 'fr' ? 'text-porsche-red' : 'text-porsche-black'}`}
      >
        FR
      </button>
      <span className="text-porsche-black">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`text-sm font-medium ${i18n.language === 'en' ? 'text-porsche-red' : 'text-porsche-black'}`}
      >
        EN
      </button>
      <span className="text-porsche-black">|</span>
      <button
        onClick={() => changeLanguage('de')}
        className={`text-sm font-medium ${i18n.language === 'de' ? 'text-porsche-red' : 'text-porsche-black'}`}
      >
        DE
      </button>
      <span className="text-porsche-black">|</span>
      <button
        onClick={() => changeLanguage('es')}
        className={`text-sm font-medium ${i18n.language === 'es' ? 'text-porsche-red' : 'text-porsche-black'}`}
      >
        ES
      </button>
      <span className="text-porsche-black">|</span>
      <button
        onClick={() => changeLanguage('it')}
        className={`text-sm font-medium ${i18n.language === 'it' ? 'text-porsche-red' : 'text-porsche-black'}`}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSwitcher; 