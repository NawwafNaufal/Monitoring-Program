import PropTypes from "prop-types";
import { HiOutlineUser } from "react-icons/hi2";

const UserDropdown = ({ showDropdown, toggleDropdown, handleLogout }) => {
  return (
    <div className="relative">
      <button
        className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-600"
        onClick={toggleDropdown}
      >
        <HiOutlineUser />
      </button>

      {showDropdown && (
        <div className="absolute mt-10 right-0 bg-white dark:bg-neutral-800 rounded-lg shadow-lg z-10">
          <ul className="p-2">
            <li
              className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-700"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Tambahkan prop validation
UserDropdown.propTypes = {
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default UserDropdown;
