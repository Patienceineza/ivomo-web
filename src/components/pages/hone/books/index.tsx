import React, { useEffect, useState } from "react";
import IconArrowForward from "../../../Icon/IconArrowForward";
import Nav from "../Nav";
import Footer from "../Footer";
import { BookType } from "../../../../app/types/shared";
import { useGetAllBooks } from "../../../../app/hooks/books";
import { Loader } from "@mantine/core";
import IconCalendar from "../../../Icon/IconCalendar";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { books, loadingBooks, handleGetBooks } = useGetAllBooks();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  const filteredBooks = books?.data?.filter((book: BookType) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen font-outfit bg-gray-100">
      <Nav />
      <div
        className="relative bg-cover bg-center flex items-center justify-center py-16 h-[40vh] shadow-lg"
        style={{
          backgroundImage: `url(https://www.minubumwe.gov.rw/index.php?eID=dumpFile&t=f&f=91043&token=c70816035de38d2cba6f0b58ae1828020024b156)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="md:text-5xl text-3xl font-bold mb-4 leading-tight">
            Books and History
          </h1>
          <p className="text-xl font-light">
            Explore a vast collection of books and history of Rwanda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10">
        {/* Search Input */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for a book by title, author, or genre..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        {loadingBooks ? (
          <div className="text-center text-gray-600">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBooks && filteredBooks.length > 0 ? (
              filteredBooks.map((book: BookType, index: number) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                  <div className="flex flex-col md:flex-row">
                    <Link to={`/book/${book.id}`} className="w-full md:w-1/3">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-64 object-cover rounded-md shadow-md"
                      />
                    </Link>
                    <div className="md:ml-8 flex-1">
                      <h2 className="text-2xl font-bold capitalize text-gray-900 mb-2">{book.title}</h2>
                      <p className="text-gray-500 mb-2 flex items-center">
                        <span>By {book.author}</span> |{' '}
                        <span className="flex items-center mx-2 text-gray-500">
                          <IconCalendar className="mr-1 text-blue-500" />
                          {new Date(book.publicationDate).toLocaleDateString()}
                        </span>
                      </p>
                      <p className="text-blue-500 italic mb-4">Genre: {book.genre}</p>
                      <p className="text-gray-700 mb-6">{book.summary}</p>
                      <a
                        href={book.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg rounded-md"
                      >
                        Download Book
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">No books found.</div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BooksPage;
