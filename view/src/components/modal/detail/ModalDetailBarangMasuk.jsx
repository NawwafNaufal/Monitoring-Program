import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BsGrid } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const ModalDetailBarangMasuk = ({ isOpen, onClose, id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && id) {
      setLoading(true);
      axios
        .get(`http://localhost:3000/BarangMasuk`)
        .then((response) => {
          console.log("Response data:", response.data);
          const foundProduct = response.data.data.find((item) => item.id === id);
          console.log("Found product:", foundProduct);
          setProduct(foundProduct || null);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setProduct(null);
          setLoading(false);
        });
    }
  }, [isOpen, id]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] z-50">
        <div className="flex items-center justify-between mb-4 text-zinc-100">
          <div className="flex items-center gap-2">
            <BsGrid className="text-2xl" />
            <h2 className="text-xl font-bold">Detail Produk</h2>
          </div>
          <div className="flex items-center gap-1 font-bold">
            <MdOutlineCalendarMonth className="text-2xl" />
            {product?.tanggal || "Tidak tersedia"}
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : product ? (
          <div className="border border-zinc-100 rounded-lg p-4 text-zinc-100">
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Nama Produk", value: product.id_produk || "N/A" },
                { label: "Jumlah", value: product.jumlah || "N/A" },
                { label: "Saldo", value: product.saldo || "N/A" },
                { label: "Berat (kg)", value: product.kg || "N/A" },
                { label: "Komposisi", value: product.komposisi || "N/A" },
                { label: "Keterangan", value: product.keterangan || "N/A" },
                { label: "Berat (gr)", value: product.gram || "N/A" },
                { label: "Ukuran (cm)", value: product.cm || "N/A" },
                { label: "JS40", value: product.js40 || "N/A" },
                { label: "Impurity", value: product.impurity || "N/A" },
                { label: "Filth", value: product.filth || "N/A" },
                { label: "Temperatur (°C)", value: product.temp || "N/A" },
                { label: "pH", value: product.ph || "N/A" },
                { label: "Moisture", value: product.moisture || "N/A" },
                { label: "Kecerahan", value: product.whitness || "N/A" },
                { label: "Grade", value: product.grade || "N/A" },
              ].map((item, index) => (
                <div key={index}>
                  <label className="font-bold block">{item.label}:</label>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Produk tidak ditemukan</p>
        )}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

ModalDetailBarangMasuk.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalDetailBarangMasuk;
