import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchBlogById } from '../../../../app/hooks/blogs';
import Nav from '../Nav';
import Footer from '../Footer';
import IconCalendar from '../../../Icon/IconCalendar';
import { Loader } from '@mantine/core';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: any }>();
  const { blog, loading } = useFetchBlogById(id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
     
      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 my-12">
      <div className="text-sm text-gray-500 mb-4">
          <Link to="/news" className="hover:underline text-blue-500">Updates</Link> / {blog.title}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
         

          {/* Inline Image */}
          <div className="mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto max-h-80 object-cover rounded-md shadow-md"
            />
          </div>

          {/* Content Section */}
          <h3 className="text-2xl font-semibold mb-4">Natural Beauty</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {blog.content}
          </p>
          <div className="flex items-center text-gray-500 text-sm mb-4">
  <IconCalendar className="mr-2 text-blue-300" />
  <span>
    {new Date(blog.createdAt).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })}
  </span>
</div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
