import React from 'react';
import MyImage from '../components/assets/img/img.png';


const Home: React.FC = () => {
    return (
      <div className="flex flex-wrap justify-center items-center mt-10 p-6">
        {/* Opis po lewej */}
        <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
          <h2 className="text-3xl font-bold text-start">Marek Pichniarczyk</h2>
          <p className="mt-4 text-md text-end">
          Jestem studentem informatyki stosowanej na Akademii
Nauk Stosowanych w Nowym Sączu, mam 23 lata.
Szukam wyzwań i nowych rozwiązań w życiu, cenię
sobie rozwój osobisty i dalszy rozwój na różnych
płaszczyznach. Wolny czas spędzam rozwijając się jako
programista, grafik komputerowy, oraz prowadzę social
media klubu sportowego, obecnie szukam możliwości zdobycia doświadcznia komercyjnego.
          </p>
        </div>
  
        {/* Obrazek po prawej */}
        <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
          <img
            src={MyImage}
            alt="Marek Pichniarczyk"
            className="object-cover w-full h-100 rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };
  
  export default Home;
  