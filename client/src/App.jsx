import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className="w-full p-6">
        <Navbar />
        <Outlet />
      <div className="footer">
      <Footer /> 
      </div>
      </div>
  );
};
export default App