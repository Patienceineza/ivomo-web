// CompetitionDetail.js
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCompetition } from "../../../../app/hooks/books";
import IconCalendar from "../../../Icon/IconCalendar";
import Nav from "../Nav";
import Footer from "../Footer";

const CompetitionDetail = () => {
  const { id } = useParams<{ id: any }>();
  const { loading, competition, handleGetCompetition } = useGetCompetition();

  useEffect(() => {
    handleGetCompetition(id);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!competition) return <div>Competition not found.</div>;

  const formattedDate = new Date(competition.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
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

      <div className="text-sm text-gray-500 m-5 ">
      <Link to="/competitions" className="hover:underline text-blue-500">Competitions</Link> / {competition.title}
    </div>
      <div
        key={competition.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden transition transform m-4 hover:scale-20 hover:shadow-xl duration-300"
      > 

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {competition.title}
          </h3>
          <p className="text-gray-700 mb-4">{competition.description}</p>
          <div className="flex items-center text-gray-500 mb-4">
            <IconCalendar className="mr-2 text-blue-500" />
            {new Date(competition.date).toLocaleDateString()}
          </div>
          <p className="text-blue-500   text-lg font-semibold">
            Prize: {competition.prize}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompetitionDetail;
