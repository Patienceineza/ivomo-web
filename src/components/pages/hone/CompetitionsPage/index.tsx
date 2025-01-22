import React, { useEffect } from 'react';
import IconArrowForward from '../../../Icon/IconArrowForward';
import Nav from '../Nav';
import IconCalendar from '../../../Icon/IconCalendar';
import Footer from '../Footer';
import { useGetCompetitions } from '../../../../app/hooks/competitions';
import { Link } from 'react-router-dom';

const CompetitionsPage = () => {
  const { loading, handleGetCompetitions, competitions } = useGetCompetitions();

  useEffect(() => {
    handleGetCompetitions();
  }, []);

  // Utility function to truncate description
  const truncateDescription = (description:any) => {
    return description.length > 150 ? description.substring(0, 150) + '...' : description;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div
        className="relative bg-cover bg-center flex items-center justify-center py-20 h-[40vh] shadow-lg"
        style={{
          backgroundImage: `url(https://www.minubumwe.gov.rw/index.php?eID=dumpFile&t=f&f=91043&token=c70816035de38d2cba6f0b58ae1828020024b156)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="md:text-5xl text-3xl font-bold mb-4 leading-tight">
            Competitions
          </h1>
          <p className="text-xl font-light">
            Explore competitions and win exciting prizes
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-10">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for a competition..."
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {competitions.map((competition) => (
            <div
              key={competition.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl duration-300"
            >
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {competition.title}
                </h3>
                <p className="text-gray-700 mb-4">{truncateDescription(competition.description)}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <IconCalendar className="mr-2 text-blue-500" />
                  {new Date(competition.date).toLocaleDateString()}
                </div>
                <p className="text-gray-600 font-semibold">
                  Prize: {competition.prize}
                </p>
                <Link
                  to={`/competition/${competition.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 mt-4 transition-colors duration-300"
                  >
                    Read More
                    <IconArrowForward className="ml-2" />
                  </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center my-10">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompetitionsPage;
