import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import NotifyProvider from "./components/notify";

createRoot(document.getElementById("root")!).render(
  <>
    <NotifyProvider>
      <App />
      <NotifyProvider.NotifyBar />
    </NotifyProvider>
  </>
);
