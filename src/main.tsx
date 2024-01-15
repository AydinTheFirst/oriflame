import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import "./styles/bs.css";

import { ToastBox } from "./components/Toast";

import { App } from "./pages/App";

import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Dashboard } from "./pages/Dashboard";

document.body.classList.add("bg-slate-100", "dark:bg-gray-900");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ToastBox />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/2527c9a7" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);
