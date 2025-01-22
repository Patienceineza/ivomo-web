/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import IconCalendar from "../../Icon/IconCalendar";
import IconArrowForward from "../../Icon/IconArrowForward";
import { useGetCompetitions } from "../../../app/hooks/competitions";
import { Link } from "react-router-dom";

const CompetitionsSection = () => {
  const {loading,handleGetCompetitions,competitions } = useGetCompetitions();

  useEffect(() => {
    handleGetCompetitions();
  }, []);
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-start mb-12 text-blue-800 tracking-tight">
          Upcoming Competitions
        </h2>

        {/* Competitions Cards Grid */}
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitions.slice(0,3)
            .map((competition) => (
              <div
                key={competition.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl duration-300"
              >
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {competition.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{competition.description}</p>
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
        <div className="flex flex-row justify-center my-10">
        <Link   to={`/competitions`} className=" inline-block mt-4 px-16 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold  hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg">
            More Competitions
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default CompetitionsSection;
