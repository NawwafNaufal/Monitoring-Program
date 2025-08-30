import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ModalEditBarangMasuk = ({ isOpen, onClose, product, onSave }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  // Gunakan useEffect agar updatedProduct tersinkronisasi saat product berubah
  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedProduct);
  };

  if (!isOpen) return null; // Modal tidak ditampilkan jika isOpen bernilai false

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}></div>
      <div className="hide-scrollbar bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto ">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">Edit Produk</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Nama Produk
            </label>
            <select
              name="name"
              value={updatedProduct.name || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled>
                Pilih Produk
              </option>
              <option value="Produk A"></option>
            </select>
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Tanggal
            </label>
            <input
              type="date"
              name="date"
              value={updatedProduct.date || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Jumlah
            </label>
            <input
              type="number"
              name="count"
              value={updatedProduct.count || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Saldo
            </label>
            <input
              type="number"
              name="saldo"
              value={updatedProduct.saldo || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              KG
            </label>
            <input
              type="number"
              name="kg"
              value={updatedProduct.kg || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Komposisi
            </label>
            <input
              type="text"
              name="komposisi"
              value={updatedProduct.komposisi || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Keterangan
            </label>
            <input
              type="text"
              name="keterangan"
              value={updatedProduct.keterangan || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              GR
            </label>
            <input
              type="number"
              name="gr"
              value={updatedProduct.gr || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              CM
            </label>
            <input
              type="number"
              name="cm"
              value={updatedProduct.cm || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              JS40
            </label>
            <input
              type="number"
              name="js40"
              value={updatedProduct.js40 || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Impurity
            </label>
            <input
              type="number"
              name="impurity"
              value={updatedProduct.impurity || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Filth
            </label>
            <input
              type="number"
              name="filth"
              value={updatedProduct.filth || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Temp
            </label>
            <input
              type="number"
              name="temp"
              value={updatedProduct.temp || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              pH
            </label>
            <input
              type="number"
              name="ph"
              value={updatedProduct.ph || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Moisture
            </label>
            <input
              type="number"
              name="moisture"
              value={updatedProduct.moisture || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Whiteness
            </label>
            <input
              type="number"
              name="whitness"
              value={updatedProduct.whitness || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Grade
            </label>
            <input
              type="text"
              name="grade"
              value={updatedProduct.grade || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded mr-2">
            Simpan
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// Validasi PropTypes
ModalEditBarangMasuk.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ModalEditBarangMasuk;
