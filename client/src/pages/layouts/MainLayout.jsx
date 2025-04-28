import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 ml-64 p-6 bg-slate-900">{children}</main>
      </div>

      <footer className="bg-slate-800 text-slate-300 p-4 text-center border-t border-slate-700">
        <a href="/about" className="mr-4 hover:text-blue-300 transition-colors">
          About Us
        </a>
        <a
          href="/contact"
          className="mr-4 hover:text-blue-300 transition-colors"
        >
          Contact
        </a>
        <a href="/privacy" className="hover:text-blue-300 transition-colors">
          Privacy
        </a>
      </footer>
    </div>
  );
};

export default MainLayout;
