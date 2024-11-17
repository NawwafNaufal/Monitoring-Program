import PropTypes from "prop-types";

const ModalHapusProduk = ({ isOpen, onClose, product, onDelete }) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50 z-50">
      <div className="bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-bold text-zinc-100 mb-4">Hapus Produk</h2>
        <p className="font-semibold text-zinc-100 mb-6">
          Apakah Anda yakin ingin menghapus produk `{product.nama_product}`?
        </p>
        <div className="flex justify-end items-center gap-3">
          <button
            onClick={onClose}
            className="bg-zinc-600 text-zinc-100 font-bold py-2 px-4 rounded hover:bg-zinc-700 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

ModalHapusProduk.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nama_product: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ModalHapusProduk;