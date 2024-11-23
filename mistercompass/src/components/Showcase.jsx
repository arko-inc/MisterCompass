// src/components/Showcase.jsx
import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  const blogs = [
    {
      id: 1,
      title: "Frosty Finland", image: "/images/European/finland.jpg", link: "/Europe/Finland", description:"Welcome to Finland",
    },
    { id: 2,
       title: "Jurasic South Africa", image: "/images/African/kruger.jpg", link: "/Africa/South Africa" , description:"World's biggest open Zoo, Close to wild",
        },
    { id: 3, title: "Icy Iceland", image: "/images/European/iceland.jpg", link: "/blog/3"  , description:"Ice Beauty, Snow White", },
    { id: 4, title: "Blog 4", image: "/images/blog4.jpg", link: "/blog/4" , description:"", },
    { id: 5, title: "Blog 5", image: "/images/blog5.jpg", link: "/blog/5" , description:"", },
    { id: 6, title: "Blog 6", image: "/images/blog6.jpg", link: "/blog/6"  , description:"",},
    { id: 7, title: "Blog 7", image: "/images/blog7.jpg", link: "/blog/7"  , description:"",},
    { id: 8, title: "Blog 8", image: "/images/blog8.jpg", link: "/blog/8"  , description:"",},
  ];

  return (
    <div className="container mx-auto p-4 bg-black">
      <h2 className="text-3xl font-against font-bold text-center mb-8 text-red-600">
        Showcase
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {blogs.map((blog) => (
          <Link
            to={blog.link}
            key={blog.id}
            className="group block bg-black backdrop-blur-lg border border-white hover:shadow-lg rounded-lg overflow-hidden transform shadow-2xl hover:scale-105 transition-all "
          >
            <div className="h-56 relative ">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-against font-bold text-white group-hover:text-red-500 transition-colors">
                {blog.title}
              </h3>
              <p className="font-against text-sm text-white mt-5">
                  {blog.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
