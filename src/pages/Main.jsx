import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mapbox from "../components/Map";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex flex-row items-center justify-center">
        <div className="w-2/3">hhh</div>
        
        <div className="w-1/3 h-full "><Mapbox /></div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
