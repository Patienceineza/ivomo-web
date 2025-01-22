import React, { useEffect } from "react";
import IconArrowForward from "../../Icon/IconArrowForward";
import { Link } from "react-router-dom";
import { useGetAllBooks } from "../../../app/hooks/books";
import { BookType } from "../../../app/types/shared";

// Banner Component with Overlapping Books
const BannerWithBooks = () => {
  const { books, loadingBooks, handleGetBooks } = useGetAllBooks();

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center py-16 h-[70vh]"
      style={{
        backgroundImage: `url(https://www.minubumwe.gov.rw/index.php?eID=dumpFile&t=f&f=91043&token=c70816035de38d2cba6f0b58ae1828020024b156)`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Banner Content */}
      <div className="relative z-10 text-white text-center md:text-left w-[70%] px-6 md:px-0">
        <h1 className="md:text-6xl text-4xl font-extrabold mb-7 leading-tight">
          MINUBUMWE
        </h1>
        <p className="mb-10 text-2xl font-light">
          Ministry of National Unity & Civic Engagement
        </p>
      </div>

      {/* Overlapping Book Cards */}
      <div className="absolute bottom-[-170px] left-1/2 transform -translate-x-1/2 flex flex-col  space-x-6 z-20">
        <p className="text-white font-bold px-6 text-xl">Recent Books</p>
        <div className="flex flex-row space-x-6 z-20 ">
          {books &&
            books?.data.slice(0, 3).map((book: BookType, index: any) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg overflow-hidden w-[23rem] p-6 hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <p className="text-gray-500 italic mb-4">{book.genre}</p>
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {book.summary}
                </p>
                <a
                  href={book.file}
                  className=" flex flex-row  font-bold text-blue-500  hover:text-blue-700"
                >
                  <Link to={`/book/${book.id}`}>
                  Read More <IconArrowForward />
                  </Link>
                
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <div className="pt-60 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <Link
            to={"/books"}
            className=" inline-block mt-4 px-16 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold  hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
          >
            More books
          </Link>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <BannerWithBooks />
      <ContentSection />
    </div>
  );
};

export default HomePage;
