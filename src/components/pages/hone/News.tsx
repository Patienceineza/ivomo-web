import IconArrowForward from "../../Icon/IconArrowForward";
import IconCalendar from "../../Icon/IconCalendar";
import { useState, useEffect } from "react";
import { useFetchBlogs } from "../../../app/hooks/blogs";
import { BlogType } from "../../../app/types/shared";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const { fetchBlogs, blogs, loading } = useFetchBlogs();

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100  p-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-start mb-12 text-blue-800 tracking-tight">
          Latest Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {blogs.slice(0, 3).map((blog: BlogType, index: number) => (
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

        <div className="flex my-16 justify-center">
          <Link  to={'/news'} className="inline-block mt-4 px-16 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
