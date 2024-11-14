import PropTypes from "prop-types"; // Import PropTypes di bagian atas
import { useState, useEffect, useRef } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import LogoutModal from "./modal/logout/LogoutModal";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = ({ onLogout }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userButtonRef = useRef(null);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setModalOpen(true);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, userButtonRef]);

  return (
    <>
      <header className="p-4 bg-zinc-900 flex justify-between items-center relative z-20">
        <div className="gretting-title text-2xl font-serif font-extrabold text-zinc-100">
          Sistem Monitoring Inventori
        </div>

        <div className="flex items-center">
          <button
            ref={userButtonRef}
            className="p-2 rounded-full bg-zinc-600"
            onClick={toggleDropdown}>
            <HiOutlineUser className="text-white text-2xl" />
          </button>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-4 mt-2 w-40 bg-zinc-600 rounded-lg z-50"
              style={{ top: "100%" }}>
              <button
                onClick={handleLogout}
                className="w-full text-left font-bold text-zinc-100 px-4 py-2 flex justify-between items-center">
                Logout <RiLogoutCircleLine className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </header>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onLogout={onLogout} // Pastikan ini dipanggil
      />
    </>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
