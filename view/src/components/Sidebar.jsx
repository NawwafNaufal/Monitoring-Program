import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { CiInboxIn, CiInboxOut, CiBoxes } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { LiaFlaskSolid } from "react-icons/lia";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdOutlineRecycling } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isHasilLabOpen, setIsHasilLabOpen] = useState(false);
  const [isProsesOpen, setIsProsesOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Close "Product" and "Hasil Lab" pop-ups when location pathname changes
  useEffect(() => {
    setIsProductOpen(false);
    setIsHasilLabOpen(false);
    setIsProsesOpen(false);
  }, [location]);

  // Handle submenu toggle
  const handleProductToggle = () => {
    setIsProductOpen(!isProductOpen);
    setIsHasilLabOpen(false); // Close Hasil Lab submenu when Product is opened
    setIsProsesOpen(false);
  };

  const handleHasilLabToggle = () => {
    setIsHasilLabOpen(!isHasilLabOpen);
    setIsProductOpen(false); // Close Product submenu when Hasil Lab is opened
    setIsProsesOpen(false);
  };
  const handleProsesToggle = () => {
    setIsProsesOpen(!isProsesOpen);
    setIsHasilLabOpen(false);
    setIsProductOpen(false);
  };

  return (
    <aside
      className={`bg-zinc-900 p-4 h-full max-h-screen transition-all duration-700 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      } overflow-y-auto custom-scrollbar`}>
      <div className="flex justify-between mb-4">
        {!isCollapsed && (
          <h1
            className={`text-zinc-100 text-center text-2xl font-bold transition-opacity duration-500 ease-in-out ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}>
            SIM
          </h1>
        )}
        <button
          className={`text-xl transition-all duration-700 ease-in-out ${
            isCollapsed
              ? "w-full h-full flex items-center justify-center mt-2 text-2xl"
              : "ml-auto"
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}>
          <FaBars className="text-zinc-100 " />
        </button>
      </div>
      <nav className="mt-11">
        <ul>
          <li className="mb-2">
            <Link
              to="/"
              className={`flex items-center p-2 transition-all duration-500 ease-in-out ${
                location.pathname === "/" ? "rounded-md bg-zinc-600" : ""
              } ${isCollapsed ? "justify-center" : "justify-start"}`}>
              <IoHomeOutline className="text-2xl text-zinc-100 transform transition-transform duration-500 ease-in-out" />
              {!isCollapsed && (
                <span className="ml-2 text-lg  text-zinc-100 font-bold">
                  Dashboard
                </span>
              )}
            </Link>
          </li>
          <li className="mb-2">
            <span
              className={`flex items-center p-2 font-semibold cursor-pointer transition-all duration-500 ease-in-out ${
                isCollapsed ? "justify-center" : "justify-start"
              }`}
              onClick={handleProductToggle}>
              <BsBoxSeam className="text-2xl text-zinc-100 transform transition-transform duration-500 ease-in-out" />
              {!isCollapsed && (
                <span className="ml-2 text-lg text-zinc-100 font-bold">
                  Product
                </span>
              )}
            </span>
            {isCollapsed && isProductOpen && (
              <div
                style={{
                  position: "absolute",
                  left: "5.5rem",
                  top: "6.7rem",
                  marginTop: "2rem",
                  backgroundColor: "#18181b",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  zIndex: 50,
                  width: "10rem",
                  transition: "all 0.5s ease-in-out",
                }}>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="/add-product"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/add-product"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <CiBoxes className="text-2xl text-zinc-100" />
                      <span className="ml-2">Add Product</span>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/incoming"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/incoming"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <CiInboxIn className="text-2xl text-zinc-100" />
                      <span className="ml-2">Incoming</span>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/outgoing"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/outgoing"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <CiInboxOut className="text-2xl text-zinc-100" />
                      <span className="ml-2">Outgoing</span>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/rejecting"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/rejecting"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <HiOutlineArchiveBoxXMark className="text-2xl text-zinc-100" />
                      <span className="ml-2">Rejecting</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {!isCollapsed && isProductOpen && (
              <ul className={`ml-4 ${isCollapsed ? "ml-0" : "ml-6"}`}>
                <li className="mb-1">
                  <Link
                    to="/add-product"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/add-product"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <CiBoxes className="text-2xl text-zinc-100" />
                    <span className="ml-2">Add Product</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/incoming"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/incoming"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <CiInboxIn className="text-2xl text-zinc-100" />
                    <span className="ml-2">Incoming</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/outgoing"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/outgoing"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <CiInboxOut className="text-2xl text-zinc-100" />
                    <span className="ml-2">Outgoing</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/rejecting"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/rejecting"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <HiOutlineArchiveBoxXMark className="text-2xl text-zinc-100" />
                    <span className="ml-2">Rejecting</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-2">
            <span
              className={`flex items-center p-2 font-semibold cursor-pointer transition-all duration-500 ease-in-out ${
                isCollapsed ? "justify-center" : "justify-start"
              }`}
              onClick={handleHasilLabToggle}>
              <LiaFlaskSolid className="text-2xl text-zinc-100 transform transition-transform duration-500 ease-in-out" />
              {!isCollapsed && (
                <span className="ml-2 text-lg text-zinc-100 font-bold">
                  Hasil Lab
                </span>
              )}
            </span>
            {isCollapsed && isHasilLabOpen && (
              <div
                style={{
                  position: "absolute",
                  left: "5.5rem",
                  top: "11.8rem",
                  backgroundColor: "#18181b",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  zIndex: 50,
                  width: "10rem",
                  transition: "all 0.5s ease-in-out",
                }}>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="/input-lab"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/input-lab"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <BsDatabaseAdd className="text-2xl text-zinc-100" />
                      <span className="ml-2">Input Lab</span>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/rekap"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/rekap"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <BsFileEarmarkText className="text-2xl text-zinc-100" />
                      <span className="ml-2">Rekap</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {!isCollapsed && isHasilLabOpen && (
              <ul className="ml-4">
                <li className="mb-1">
                  <Link
                    to="/input-lab"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/input-lab"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <BsDatabaseAdd className="text-2xl text-zinc-100" />
                    <span className="ml-2">Input Lab</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/rekap"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/rekap"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <BsFileEarmarkText className="text-2xl text-zinc-100" />
                    <span className="ml-2">Rekap</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-2">
            <span
              className={`flex items-center p-2 font-semibold cursor-pointer transition-all duration-500 ease-in-out ${
                isCollapsed ? "justify-center" : "justify-start"
              }`}
              onClick={handleProsesToggle}>
              <MdOutlineRecycling className="text-2xl text-zinc-100 transform transition-transform duration-500 ease-in-out" />
              {!isCollapsed && (
                <span className="ml-2 text-lg text-zinc-100 font-bold">
                  Proses
                </span>
              )}
            </span>
            {isCollapsed && isProsesOpen && (
              <div
                style={{
                  position: "absolute",
                  left: "5.5rem",
                  top: "14.8rem",
                  backgroundColor: "#18181b",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  zIndex: 50,
                  width: "10rem",
                  transition: "all 0.5s ease-in-out",
                }}>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="/input-proses"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/input-proses"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <BsDatabaseAdd className="text-2xl text-zinc-100" />
                      <span className="ml-2">Input Proses</span>
                    </Link>
                  </li>

                  <li className="mb-1">
                    <Link
                      to="/rekap-proses"
                      className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                        location.pathname === "/rekap-proses"
                          ? "rounded-md bg-zinc-600"
                          : ""
                      }`}>
                      <BsFileEarmarkText className="text-2xl text-zinc-100" />
                      <span className="ml-2">Rekap</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {!isCollapsed && isProsesOpen && (
              <ul className="ml-4">
                <li className="mb-1">
                  <Link
                    to="/input-proses"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/input-proses"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <BsDatabaseAdd className="text-2xl text-zinc-100" />
                    <span className="ml-2">Input Proses</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/rekap-proses"
                    className={`flex items-center p-2 text-zinc-100 transition-all duration-500 ease-in-out ${
                      location.pathname === "/rekap-proses"
                        ? "rounded-md bg-zinc-600"
                        : ""
                    }`}>
                    <BsFileEarmarkText className="text-2xl text-zinc-100" />
                    <span className="ml-2">Rekap</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;