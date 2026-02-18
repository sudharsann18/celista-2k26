import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
