import { useEffect, useContext, useRef } from "react";
import { UserContext } from "../store/UserContext";

const Mapbox = () => {
  const tomtomApiKey = import.meta.env.VITE_TOMTOM_API_KEY;
  const tomtomStyleId = import.meta.env.VITE_TOMTOM_STYLE_ID;
  const tomtomMapstyleapi = import.meta.env.VITE_TOMTOM_MAPSTYLE_API;
  const { user } = useContext(UserContext);
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps-web.min.js";
    script.onload = () => {
      const tt = window.tt;

      mapRef.current = tt.map({
        key: tomtomApiKey,
        container: "map",
        center: [user.userLoc.lng, user.userLoc.lat], 
        zoom: 10,
        style: `https://api.tomtom.com/style/2/custom/style/${tomtomStyleId}/drafts/0.json?key=${tomtomMapstyleapi}`,
      });

      mapRef.current.addControl(new tt.NavigationControl());
    };
    document.body.appendChild(script);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      document.body.removeChild(script);
    };
  }, []);

 
  useEffect(() => {
    if (mapRef.current && user?.userLoc) {
      mapRef.current.setCenter([user.userLoc.lng, user.userLoc.lat]);
    }
  }, [user?.userLoc]);

  return <div id="map" className="w-full h-full rounded-xl overflow-hidden"></div>;
};

export default Mapbox;
