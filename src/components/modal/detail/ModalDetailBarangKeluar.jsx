import PropTypes from "prop-types"; // Import PropTypes
import { BsGrid } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const ModalDetailBarangKeluar = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}></div>
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] z-50">
        {/* Header Modal */}
        <div className="flex items-center justify-between mb-4 text-zinc-100">
          <div className="flex items-center gap-2">
            <BsGrid className="text-2xl" />
            <h2 className="text-xl font-bold">Detail Produk Keluar</h2>
          </div>
          <div className="flex items-center gap-1 font-bold">
            <MdOutlineCalendarMonth className="text-2xl" />
            {product.date}
          </div>
        </div>

        {/* Konten Modal */}
        <div className="border border-zinc-100 rounded-lg p-4 text-zinc-100">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Nama Produk", value: product.name },
              { label: "Jumlah", value: product.count },
              { label: "Saldo", value: product.saldo },
              { label: "Berat (kg)", value: product.kg },
              { label: "Komposisi", value: product.komposisi },
              { label: "Keterangan", value: product.keterangan },
              { label: "Tujuan", value: product.tujuan },
              { label: "Berat (gr)", value: product.gr },
              { label: "Ukuran (cm)", value: product.cm },
              { label: "JS40", value: product.js40 },
              { label: "Impurity", value: product.impurity },
              { label: "Filth", value: product.filth },
              { label: "Temperatur (°C)", value: product.temp },
              { label: "pH", value: product.ph },
              { label: "Moisture", value: product.moisture },
              { label: "Kecerahan", value: product.whitness },
              { label: "Grade", value: product.grade },
            ].map((item, index) => (
              <div key={index}>
                <label className="font-bold block">{item.label}:</label>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded">
          Tutup
        </button>
      </div>
    </div>
  );
};

ModalDetailBarangKeluar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    saldo: PropTypes.number.isRequired,
    kg: PropTypes.number,
    komposisi: PropTypes.string,
    gr: PropTypes.number,
    cm: PropTypes.number,
    js40: PropTypes.number,
    impurity: PropTypes.number,
    filth: PropTypes.number,
    temp: PropTypes.number,
    ph: PropTypes.number,
    moisture: PropTypes.number,
    whitness: PropTypes.number,
    grade: PropTypes.string,
    keterangan: PropTypes.string.isRequired,
    tujuan: PropTypes.string,
  }),
};

export default ModalDetailBarangKeluar;
