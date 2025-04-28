// import Navbar from "../../components/common/Navbar";
// import Sidebar from "../../components/common/Sidebar";

// const MainLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       <Navbar />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 ml-64 p-6">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

//grok

import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ml-64 p-6">{children}</main>
      </div>
      <footer className="bg-gray-200 text-gray-700 p-4 text-center">
        <a href="/about" className="mr-4 hover:text-blue-600">
          About Us
        </a>
        <a href="/contact" className="mr-4 hover:text-blue-600">
          Contact
        </a>
        <a href="/privacy" className="hover:text-blue-600">
          Privacy
        </a>
      </footer>
    </div>
  );
};

export default MainLayout;
