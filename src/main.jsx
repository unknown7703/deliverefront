
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./store/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  
    <UserProvider>
      <App />
    </UserProvider>
  
);
