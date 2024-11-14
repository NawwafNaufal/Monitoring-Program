import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import { toast } from "react-toastify";

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  const navigate = useNavigate(); // Hook untuk navigasi

  if (!isOpen) return null; // Jika modal tidak terbuka, tidak ada yang dirender

  const handleLogout = () => {
    // Hapus status autentikasi (misalnya localStorage)
    localStorage.removeItem("authToken"); // Pastikan ini sesuai dengan implementasi Anda

    // Panggil fungsi onLogout untuk memperbarui state di atas
    onLogout();

    // Tutup modal setelah logout
    onClose();

    toast.success("Logout berhasil!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });

    // Arahkan ke halaman login setelah modal ditutup tanpa refresh
    navigate("/login", { replace: true }); // Redirect ke halaman login tanpa refresh dan mengganti history
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50 z-30">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-md mx-4">
        <h2 className="text-xl text-zinc-100 font-bold mb-4">
          Konfirmasi Logout
        </h2>
        <p className="text-zinc-100 font-medium">
          Apakah Anda yakin ingin keluar?
        </p>
        <div className="mt-4 flex justify-end font-bold">
          <button
            onClick={onClose}
            className="mr-2 p-2 bg-zinc-600 text-zinc-100 rounded">
            Batal
          </button>
          <button
            onClick={handleLogout}
            className="p-2 bg-red-500 text-zinc-100 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

LogoutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default LogoutModal;
