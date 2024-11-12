import React from 'react';
import MeImage from '../components/assets/img/me.png';

const About: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5 p-6">
      <div className="w-full text-center mb-8 ">
        <h2 className="text-3xl font-semibold text-gray-500">O mnie</h2>
        <div className="flex justify-center items-center p-4 rounded-lg">
  <img
    src={MeImage}
    alt="Marek Pichniarczyk"
    className="w-32 h-32 rounded-full object-cover border-4  border-indigo-600"
  />
</div>
<div className="max-w-3xl text-center mx-auto text-md shadow-2xl p-4 rounded-md text-gray-300">
        <p className="mb-4">
          Cześć! Nazywam się Marek Pichniarczyk i jestem studentem Informatyki Stosowanej na Akademii Nauk
          Stosowanych w Nowym Sączu. Mam 23 lata i pasjonuję się szeroko pojętą informatyką. Moje zainteresowania
          obejmują programowanie, grafikę komputerową oraz zarządzanie mediami społecznościowymi, a także dążenie
          do stałego rozwoju osobistego i zawodowego.
        </p>

        <p className="mb-4">
          Od czasów szkoły średniej rozwijam swoje umiejętności techniczne i kreatywne, biorąc udział w różnych
          projektach, w tym tworzeniu stron internetowych, aplikacji oraz grafik. Moje doświadczenie obejmuje pracę
          z technologiami takimi jak Python, Django, JavaScript, React.js, HTML, CSS, Tailwind, Bootstrap, MySQL a także ASP.NET. 
          Dzięki tym umiejętnościom udało mi się zrealizować wiele własnych projektów, które pozwalają mi na coraz 
          lepsze wykorzystanie narzędzi programistycznych oraz frameworków.
        </p>

        <p className="mb-4">
          Od kilku lat zajmuję się social mediami, gdzie zarządzam profilem klubu 
          sportowego "SKS Sokolica" w mediach społecznościowych, tworzę treści i grafiki oraz aktywnie współpracuję 
          z klientami. Ta praca nauczyła mnie efektywnej komunikacji, dbałości o detale oraz umiejętności pracy w zespole.
        </p>

        <p className="mb-4">
          Obecnie szukam nowych wyzwań i możliwości rozwoju, które pozwolą mi na zdobycie doświadczenia w komercyjnych
          projektach. Moim celem jest dalsze poszerzanie wiedzy w zakresie nowych technologii oraz aktywne rozwijanie kariery
          zawodowej w branży IT.
        </p>
      </div>
    </div>
      </div>
    );
};

export default About;