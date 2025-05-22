import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-mobile mx-auto px-4 py-12 md:container md:mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-porsche-gray-dark mb-2">
                {t('contact.form.firstName')}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-porsche-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-porsche-red"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-porsche-gray-dark mb-2">
                {t('contact.form.lastName')}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-porsche-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-porsche-red"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-porsche-gray-dark mb-2">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-porsche-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-porsche-red"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-porsche-gray-dark mb-2">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-porsche-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-porsche-red"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-porsche-gray-dark mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-porsche-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-porsche-red"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-porsche-red text-white rounded-md hover:bg-porsche-red-dark transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? '...' : t('contact.form.submit')}
            </button>
          </div>
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center"
            >
              {t('contact.form.success')}
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-center"
            >
              {t('contact.form.error')}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm; 