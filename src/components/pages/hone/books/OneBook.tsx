import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetBookById } from '../../../../app/hooks/books';
import { Loader } from '@mantine/core';
import Nav from '../Nav';
import Footer from '../Footer';
import IconCalendar from '../../../Icon/IconCalendar';

const BookDetailPage = () => {
  const { id } = useParams<{ id: any }>();
  const { loadingBook, handleGetBookById, book } = useGetBookById();

  useEffect(() => {
    handleGetBookById(id);
  }, [id]);

  if (loadingBook || !book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/books" className="hover:underline text-blue-500">Books</Link> / {book.title}
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 md:p-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold capitalize text-gray-800 mb-4">
              {book.title}
            </h1>
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-auto max-h-80 object-cover rounded-md shadow-md"
            />
            {/* Book Details */}
            <div className="">
              <p className="text-gray-500 mb-3 flex items-center">
                <span>By {book.author}</span>
                <span className="flex items-center mx-2 text-gray-500">
                  <IconCalendar className="mr-1 text-blue-500" />
                  {new Date(book.publicationDate).toLocaleDateString()}
                </span>
              </p>
              <p className="text-sm text-gray-500 italic mb-4">Genre: {book.genre}</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {book.summary}
              </p>
              <a
                href={book.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg rounded-md"
              >
                Download Book
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetailPage;
