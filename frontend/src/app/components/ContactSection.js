'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [],  // Change from 'course' (string) to 'courses' (array)
    message: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
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
                <input type="text" name="name" value={formData.name} onChange={handleCheckboxChange} required className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleCheckboxChange} required className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleCheckboxChange} required className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Interested Courses</label>
                <div className="relative">
                  <button
                    type="button"
                    className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {formData.courses.length > 0 ? formData.courses.join(', ') : 'Select Courses'}
                  </button>

                  {dropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-neutral-800 border border-gray-600 rounded-md shadow-lg">
                      <div className="p-2 space-y-2">
                        {['JEE Physics', 'NEET Physics', 'Board Exams'].map((course) => (
                          <label key={course} className="flex items-center space-x-2">
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
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleCheckboxChange} className="mt-1 block w-full rounded-md bg-neutral-700 border-transparent focus:border-yellow-500 focus:ring-yellow-500 text-white px-4 py-2"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-neutral-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="h-6 w-6 text-yellow-500" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">#56 Tower Enclave, Phase - 1, Near Nakodar Road, Jalandhar, 144014</p>
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
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-yellow-500">+91 9855659866</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">Closed</span>
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




