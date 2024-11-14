import PropTypes from "prop-types"; // Import PropTypes
import { BsGrid } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const ModalDetailHasilLab = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}></div>
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] z-50">
        <div className="flex items-center justify-between mb-4 text-zinc-100">
          <div className="flex items-center gap-2">
            <BsGrid className="text-2xl" />
            <h2 className="text-xl font-bold">Detail Hasil Lab</h2>
          </div>
          <div className="flex items-center gap-1 font-bold">
            <MdOutlineCalendarMonth className="text-2xl" />
            {product.tanggal}
          </div>
        </div>

        <div className="border border-zinc-100 rounded-lg p-4 text-zinc-100">
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Nama Sampel", value: product.name },
              { label: "Gr", value: product.gr },
              { label: "Cm", value: product.cm },
              { label: "0`", value: product.nol },
              { label: "Gr", value: product.gr2 },
              { label: "Cm", value: product.cm2 },
              { label: "40`", value: product.puluh4 },
              { label: "Impurity", value: product.impurity },
              { label: "Filth", value: product.filth },
              { label: "Temp", value: product.temp },
              { label: "pH", value: product.ph },
              { label: "Moisture", value: product.moisture },
              { label: "Whiteness", value: product.whitness },
              { label: "Grade", value: product.grade },
            ].map((item, index) => (
              <div key={index}>
                <label className="font-bold block">{item.label}:</label>
                <p>{item.value || "N/A"}</p>
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

ModalDetailHasilLab.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tanggal: PropTypes.string.isRequired,
    gr: PropTypes.number,
    cm: PropTypes.number,
    nol: PropTypes.number,
    gr2: PropTypes.number,
    cm2: PropTypes.number,
    puluh4: PropTypes.number,
    impurity: PropTypes.number,
    filth: PropTypes.number,
    temp: PropTypes.number,
    ph: PropTypes.number,
    moisture: PropTypes.number,
    whitness: PropTypes.number,
    grade: PropTypes.string,
  }),
};

export default ModalDetailHasilLab;
