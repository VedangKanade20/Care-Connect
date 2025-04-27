import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ml-64 p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
