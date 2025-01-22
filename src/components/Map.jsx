import { useEffect } from "react";

const Mapbox = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps-web.min.js";
    script.onload = () => {
      const tt = window.tt;
      const map = tt.map({
        key: import.meta.env.VITE_TOMTOM_API_KEY,
        container: "map",
        center: [75, 22],
        zoom: 3,
      });
      map.addControl(new tt.NavigationControl());
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-4 border border-solid border-gray-900 rounded-xl m-4 h-[80%]">
      <div id="map" className="w-full h-full rounded-xl "></div>
    </div>
  );
};

export default Mapbox;
