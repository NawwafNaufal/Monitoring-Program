import PropTypes from "prop-types";

const ModalHapusProses = ({ isOpen, onClose, product, onDelete }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50">
      <div className="bg-zinc-900 rounded-lg p-4">
        <h2 className="text-lg font-bold text-zinc-100 mb-3">Hapus Proses</h2>
        <p className="font-semibold text-zinc-100">
          Apakah Anda yakin ingin menghapus {product.name}?
        </p>
        <div className="flex justify-end items-center mt-4">
          <button
            onClick={onDelete}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded">
            Hapus
          </button>
          <button
            onClick={onClose}
            className="bg-zinc-600 text-zinc-100 font-bold ml-2 py-2 px-4 rounded">
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

ModalHapusProses.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ModalHapusProses;