import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  // Dummy data for blogs
  const blogs = [
    { id: 1, title: "Explore Finland", image: "/images/finland.jpg", link: "/blog/1" },
    { id: 2, title: "Blog 2", image: "/images/blog2.jpg", link: "/blog/2" },
    { id: 3, title: "Blog 3", image: "/images/blog3.jpg", link: "/blog/3" },
    { id: 4, title: "Blog 4", image: "/images/blog4.jpg", link: "/blog/4" },
    { id: 5, title: "Blog 5", image: "/images/blog5.jpg", link: "/blog/5" },
    { id: 6, title: "Blog 6", image: "/images/blog6.jpg", link: "/blog/6" },
    { id: 7, title: "Blog 7", image: "/images/blog7.jpg", link: "/blog/7" },
    { id: 8, title: "Blog 8", image: "/images/blog8.jpg", link: "/blog/8" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-against font-bold text-center mb-8 text-red-500">Showcase</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <Link
            to={blog.link}
            key={blog.id}
            className="group block bg-[#fdfdfd] hover:shadow-lg rounded-lg overflow-hidden transform shadow-2xl hover:scale-105 transition-all"
          >
            <div className="h-56 relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-against font-bold text-black group-hover:text-pink-500 transition-colors">
                {blog.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Showcase;

