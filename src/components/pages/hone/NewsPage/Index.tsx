import React, { useEffect, useState } from 'react';
import IconArrowForward from '../../../Icon/IconArrowForward';
import Nav from '../Nav';
import IconCalendar from '../../../Icon/IconCalendar';
import Footer from '../Footer';
import { useFetchBlogs } from '../../../../app/hooks/blogs';
import { BlogType } from '../../../../app/types/shared';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchBlogs, blogs, loading } = useFetchBlogs();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-outfit text-gray-800">
      <Nav />
      <div
        className="relative bg-cover bg-center flex items-center justify-center py-20 h-[50vh] shadow-lg"
        style={{
          backgroundImage: `url(https://www.minubumwe.gov.rw/index.php?eID=dumpFile&t=f&f=91043&token=c70816035de38d2cba6f0b58ae1828020024b156)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="md:text-5xl text-4xl font-bold mb-4">News and Updates</h1>
          <p className="text-lg md:text-xl font-light">
            Discover the latest updates from Rwanda and beyond
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 my-10">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for a blog ..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog: BlogType, index: number) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">
                  {blog.title}
                </h3>
              
                <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">{blog.content}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <IconCalendar className="mr-2 text-blue-500" />
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
                <a
                  href={`/new/${blog.id}`}
                  className="flex items-center font-bold text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  Read More
                  <IconArrowForward className="ml-2 text-blue-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="flex justify-center mt-10">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Load More
          </button>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
