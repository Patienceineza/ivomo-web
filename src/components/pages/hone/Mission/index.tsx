import React from 'react';
import Nav from '../Nav';
import missionImage from '../../../../assets/images/first_lady.jpg'; // Add relevant images
import visionImage from '../../../../assets/images/banner.png';
import rwandaImage from '../../../../assets/images/first_lady.jpg';
import Footer from '../Footer';

const MissionVisionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center py-24 h-[50vh] shadow-lg"
        style={{
          backgroundImage: `url(https://www.minubumwe.gov.rw/index.php?eID=dumpFile&t=f&f=91043&token=c70816035de38d2cba6f0b58ae1828020024b156)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="md:text-5xl text-4xl font-bold mb-6">
            Mission & Vision
          </h1>
          <p className="text-xl font-light">
            Preserving history, promoting unity, and building a better future for Rwanda.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <img
            src={missionImage}
            alt="Mission"
            className="w-full md:w-1/2 h-full object-cover"
          />
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The mission of MINUBUMWE is to preserve historical memory, to reinforce national unity, and to promote citizenship education and culture.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full md:w-1/2 h-full object-cover"
          />
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MINUBUMWE envisions a Rwanda where the values of unity, historical consciousness, and active citizenship are deeply ingrained in all generations, contributing to a strong, unified nation.
            </p>
          </div>
        </div>

        {/* Rwanda Section */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={rwandaImage}
            alt="Rwanda"
            className="w-full md:w-1/2 h-full object-cover"
          />
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Rwanda</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Rwanda is a country with a deep historical and cultural heritage, defined by a commitment to unity and national reconciliation following its tragic past.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Historical memory preservation through Genocide memorials and education.</li>
              <li>Efforts toward national unity and social cohesion.</li>
              <li>Promotion of citizenship education, culture, and peacebuilding.</li>
              <li>Innovative economic growth and sustainability in the face of adversity.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              By fostering the spirit of "Ndi Umunyarwanda," MINUBUMWE emphasizes the shared identity and values that contribute to the country's vision of growth, reconciliation, and a peaceful future.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MissionVisionPage;
