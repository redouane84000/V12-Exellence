import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TestDriveInfo = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-porsche-black text-porsche-white py-16">
      <div className="max-w-mobile mx-auto px-4 md:container md:mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Durée de l'essai */}
          <motion.div
            variants={itemVariants}
            className="bg-porsche-gray-dark rounded-lg p-6 transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-porsche-red rounded-full mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('testDrive.info.duration')}</h3>
            <p className="text-porsche-gray-light">{t('testDrive.info.durationText')}</p>
          </motion.div>

          {/* Documents requis */}
          <motion.div
            variants={itemVariants}
            className="bg-porsche-gray-dark rounded-lg p-6 transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-porsche-red rounded-full mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('testDrive.info.documents')}</h3>
            <ul className="space-y-3 text-porsche-gray-light">
              {t('testDrive.info.documentsList', { returnObjects: true }).map((doc, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 text-porsche-red mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Horaires disponibles */}
          <motion.div
            variants={itemVariants}
            className="bg-porsche-gray-dark rounded-lg p-6 transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-porsche-red rounded-full mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('testDrive.info.hours')}</h3>
            <div className="space-y-2 text-porsche-gray-light">
              {t('testDrive.info.hoursText').split('\n').map((line, index) => (
                <p key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 text-porsche-red mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestDriveInfo; 