import PropTypes from "prop-types"; // Import PropTypes

const ModalHapusBarangMasuk = ({ isOpen, onClose, product, onDelete }) => {
  if (!isOpen) return null; // Modal tidak akan ditampilkan jika isOpen bernilai false

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}></div>
      <div className="bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-lg">
        <h2 className="text-lg font-bold mb-4 text-zinc-100">
          Hapus Barang Masuk
        </h2>
        <p className="mb-4 text-zinc-100">
          Apakah Anda yakin ingin menghapus produk
          <strong>{product.name}</strong>?
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-zinc-500 text-zinc-100 font-bold rounded hover:bg-zinc-600">
            Batal
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-zinc-100 font-bold rounded hover:bg-red-600">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

// Menambahkan PropTypes untuk validasi
ModalHapusBarangMasuk.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen harus berupa boolean dan wajib diisi
  onClose: PropTypes.func.isRequired, // onClose harus berupa fungsi dan wajib diisi
  product: PropTypes.shape({
    // product harus berupa objek dengan struktur yang ditentukan
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired, // onDelete harus berupa fungsi dan wajib diisi
};

export default ModalHapusBarangMasuk;
