const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-semibold">MisterCompass</h2>
          <p className="text-sm my-2">
            &copy; {new Date().getFullYear()} MisterCompass. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  