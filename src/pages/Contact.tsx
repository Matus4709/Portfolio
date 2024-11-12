import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Ikony do kontaktu

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-6">
      {/* Tytuł sekcji */}
      <div className="w-full text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-500">Kontakt</h2>
        <p className="mt-2 text-lg text-gray-300">
          Możesz skontaktować się ze mną za pomocą poniższych danych:
        </p>
      </div>

      {/* Sekcja kontaktowa */}
      <div className="flex flex-wrap justify-center items-center w-full mx-auto">
        <div className="mx-auto p-4">
          {/* Telefon */}
          <div className="flex items-center space-x-4 mb-6">
            <FaPhoneAlt className="text-indigo-600 text-3xl" />
            <div className="text-lg">
              <a href="tel:+48690802318" className="text-gray-500 hover:text-indigo-600 font-medium">
                +48 690 802 318
              </a>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex items-center space-x-4 mb-6">
            <FaEnvelope className="text-indigo-600 text-3xl" />
            <div className="text-lg">
              <a href="mailto:pichniarczykmarek@gmail.com" className="text-gray-500 hover:text-indigo-600 font-medium">
                pichniarczykmarek@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4 mb-6">
            <FaLinkedin className="text-indigo-600 text-3xl" />
            <div className="text-lg">
              <a
                href="https://www.linkedin.com/in/marek-pichniarczyk-54361223a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-4 mb-6">
            <FaGithub className="text-indigo-600 text-3xl" />
            <div className="text-lg">
              <a
                href="https://github.com/matus4709"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
