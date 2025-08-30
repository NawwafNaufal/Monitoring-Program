import PropTypes from "prop-types";

const ModalHapusLab = ({ isOpen, onClose, product, onDelete }) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50 z-50">
      <div className="bg-zinc-900 rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">
          Konfirmasi Hapus
        </h2>
        <p className="mb-6 text-zinc-100">
          Apakah Anda yakin ingin menghapus <strong>{product?.name}</strong>?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 font-bold bg-zinc-500 text-zinc-100 rounded hover:bg-zinc-600">
            Batal
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 font-bold bg-red-500 text-zinc-100 rounded hover:bg-red-600">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

ModalHapusLab.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ModalHapusLab;
