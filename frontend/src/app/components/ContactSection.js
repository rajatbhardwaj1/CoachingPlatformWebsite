'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [],
    message: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      courses: checked
        ? [...prev.courses, value]
        : prev.courses.filter((course) => course !== value),
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const message = `New Contact Form Submission:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Courses: ${formData.courses.join(', ')}\n` +
      `Message: ${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot7874603990:AAEw4N-j2DXMq0B2uQCvD9G4EyD2edyzmmI/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: 1129658311, text: message }),
      });

      const data = await response.json();
      if (data.ok) {
        setStatusMessage('✅ Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', courses: [], message: '' });
      } else {
        throw new Error('Failed to send message to Telegram');
      }
    } catch (error) {
      setStatusMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Interested Courses</label>
                <div className="relative">
                  <button
                    type="button"
                    className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2 flex justify-between items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {formData.courses.length > 0 ? formData.courses.join(', ') : 'Select Courses'}
                    <span className={`transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute z-10 mt-2 w-full bg-neutral-800 border border-gray-600 rounded-md shadow-lg overflow-hidden"
                      >
                        <div className="p-3 space-y-2">
                          {['JEE Physics', 'NEET Physics', 'Board Exams'].map((course) => (
                            <label key={course} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all">
                              <input
                                type="checkbox"
                                value={course}
                                checked={formData.courses.includes(course)}
                                onChange={handleCheckboxChange}
                                className="form-checkbox text-yellow-500"
                              />
                              <span className="text-white">{course}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-neutral-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-all duration-300">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && <p className="text-center text-white mt-4">{statusMessage}</p>}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-4 font-bold text-lg">Er. Kumar Bharti</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="h-6 w-6 text-yellow-500" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">#56 Tower Enclave, Phase - 1, Near Wadala Chowk, Jalandhar, 144014</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="h-6 w-6 text-yellow-500" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:info@kumarphysics.com" className="text-gray-300 hover:text-yellow-500">kumbat2211@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="h-6 w-6 text-yellow-500" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:+91 9855659866" className="text-gray-300 hover:text-yellow-500">+91 9855659866</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;