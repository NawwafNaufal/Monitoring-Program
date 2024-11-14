import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddProduk from "./pages/produk/AddProduk";
import Incoming from "./pages/produk/Incoming";
import Outgoing from "./pages/produk/Outgoing";
import Reject from "./pages/produk/Reject";
import Rekap from "./pages/lab/Rekap";
import InputLab from "./pages/lab/InputLab";
import RekapProses from "./pages/proses/RekapProses";
import InputProses from "./pages/proses/InputProses";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

import "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/rekap" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const App = () => {
  const [setIsAuthenticated] = useState(false); // State autentikasi

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
  };
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div className="flex h-screen">
        { <Sidebar />}
        <div className="flex-1 flex flex-col">
          {<Navbar onLogout={handleLogout} />}
          <ToastContainer />
          <div className="flex-1 bg-zinc-950 overflow-y-auto hide-scrollbar">
            <Routes>
              <Route
                path="/"
                element={
                    <Dashboard />
                }
              />
              <Route
                path="/add-product"
                element={
                    <AddProduk />
                }
              />
              <Route
                path="/incoming"
                element={
                    <Incoming />
                }
              />
              <Route
                path="/outgoing"
                element={
                    <Outgoing />
                }
              />
              <Route
                path="/rejecting"
                element={
                    <Reject />
                }
              />
              <Route
                path="/input-lab"
                element={
                    <InputLab />
                }
              />
              <Route
                path="/rekap"
                element={
                    <Rekap />
                }
              />
              <Route
                path="/input-proses"
                element={
                    <InputProses />
                }
              />
              <Route
                path="/rekap-proses"
                element={
                    <RekapProses />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
      </QueryClientProvider>
  );
};

export default App;
