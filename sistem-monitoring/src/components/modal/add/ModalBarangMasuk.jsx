// components/modal/add/ModalAddBarangMasuk.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const ModalAddBarangMasuk = ({ isOpen, onClose, onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    date: "",
    count: "",
    saldo: "",
    kg: "",
    komposisi: "",
    keterangan: "",
    gr: "",
    cm: "",
    js40: "",
    impurity: "",
    filth: "",
    temp: "",
    ph: "",
    moisture: "",
    whitness: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAdd = () => {
    onAdd(newProduct);
    setNewProduct({
      name: "",
      date: "",
      count: "",
      saldo: "",
      kg: "",
      komposisi: "",
      keterangan: "",
      gr: "",
      cm: "",
      js40: "",
      impurity: "",
      filth: "",
      temp: "",
      ph: "",
      moisture: "",
      whitness: "",
      grade: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}></div>
      <div className="hide-scrollbar  bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto ">
        <h2 className="text-xl font-bold mb-6 text-zinc-100 text-center">
          Tambah Produk
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Nama Produk
            </label>
            <select
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled>
                Pilih Produk
              </option>
              <option value="Produk 1">Produk 1</option>
              <option value="Produk 2">Produk 2</option>
              <option value="Produk 3">Produk 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Tanggal
            </label>
            <input
              type="date"
              name="date"
              value={newProduct.date}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Jumlah
            </label>
            <input
              type="number"
              name="count"
              value={newProduct.count}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Jumlah Produk"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Saldo
            </label>
            <input
              type="text"
              name="saldo"
              value={newProduct.saldo}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Saldo (pcs, kg, dll)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              KG
            </label>
            <input
              type="text"
              name="kg"
              value={newProduct.kg}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="KG"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Komposisi
            </label>
            <input
              type="text"
              name="komposisi"
              value={newProduct.komposisi}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Komposisi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Keterangan
            </label>
            <input
              type="text"
              name="keterangan"
              value={newProduct.keterangan}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Keterangan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Gr
            </label>
            <input
              type="text"
              name="gr"
              value={newProduct.gr}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Gr"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Cm
            </label>
            <input
              type="text"
              name="cm"
              value={newProduct.cm}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Cm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              JS 40`
            </label>
            <input
              type="text"
              name="js40"
              value={newProduct.js40}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="JS 40"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Impurity
            </label>
            <input
              type="text"
              name="impurity"
              value={newProduct.impurity}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Impurity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Filth
            </label>
            <input
              type="text"
              name="filth"
              value={newProduct.filth}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Filth"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Temp
            </label>
            <input
              type="text"
              name="temp"
              value={newProduct.temp}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Temp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Ph
            </label>
            <input
              type="text"
              name="ph"
              value={newProduct.ph}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ph"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Moisture
            </label>
            <input
              type="text"
              name="moisture"
              value={newProduct.moisture}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Moisture"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Whiteness
            </label>
            <input
              type="text"
              name="whitness"
              value={newProduct.whitness}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Whiteness"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Grade
            </label>
            <input
              type="text"
              name="grade"
              value={newProduct.grade}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Grade"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="font-bold mr-4 px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Batal
          </button>
          <button
            onClick={handleAdd}
            className="font-bold px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

ModalAddBarangMasuk.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ModalAddBarangMasuk;
