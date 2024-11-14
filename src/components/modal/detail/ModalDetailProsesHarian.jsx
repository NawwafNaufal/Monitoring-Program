import PropTypes from "prop-types";
import { BsGrid } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const ModalDetailProsesHarian = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}></div>

      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] z-50 overflow-auto">
        <div className="flex items-center justify-between mb-6 text-zinc-100">
          <div className="flex items-center gap-2">
            <BsGrid className="text-2xl" />
            <h2 className="text-xl font-bold">Detail Ketidaksesuaian Harian</h2>
          </div>
          <div className="flex items-center gap-1 font-bold text-lg">
            <MdOutlineCalendarMonth className="text-2xl" />
            <span>{product.tanggal}</span>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-lg p-4 text-zinc-100 overflow-y-auto max-h-[60vh] hide-scrollbar">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold block mb-1">Nama Produk :</label>
              <p className="text-sm text-gray-300">{product.name}</p>
            </div>

            <div className="col-span-3 border-t border-zinc-600 pt-4 mt-2 text-gray-300">
              <h3 className="font-bold mb-2 text-lg">Proses Produksi</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Receiving */}
                <div>
                  <label className="font-bold block mb-1">Receiving</label>
                  <p className="block text-sm">
                    Organoleptik: <span>{product.receiving.organoleptik}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.receiving.tdkorg}</span>
                  </p>
                  <p className="block text-sm">
                    Temp of Fish: <span>{product.receiving.temp}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.receiving.tdkkemp}</span>
                  </p>
                </div>

                {/* Deboning */}
                <div>
                  <label className="font-bold block mb-1">Deboning</label>
                  <p className="block text-sm">
                    Temp of Fish: <span>{product.deboning.dfish}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.deboning.tdkemp}</span>
                  </p>
                </div>

                {/* Washing */}
                <div>
                  <label className="font-bold block mb-1">Washing I</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product.wash.tpwash}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.wash.tdkemp}</span>
                  </p>
                </div>

                {/* Meat Separating */}
                <div>
                  <label className="font-bold block mb-1">
                    Meat Separating
                  </label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product.meat_spr.tpspr}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.meat_spr.tdkemp}</span>
                  </p>
                </div>

                {/* Leaching */}
                <div>
                  <label className="font-bold block mb-1">Leaching</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product.leaching.tpl}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.leaching.tdkemp}</span>
                  </p>
                </div>

                {/* Refinery */}
                <div>
                  <label className="font-bold block mb-1">Refinery</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product.refinery.tpr}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.refinery.tdkemp}</span>
                  </p>
                </div>

                {/* Mixing */}
                <div>
                  <label className="font-bold block mb-1">Mixing</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product.mixing.tpm}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.mixing.tdkemp}</span>
                  </p>
                </div>

                {/* Forming */}
                <div>
                  <label className="font-bold block mb-1">Forming</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product.forming.top}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.forming.tdkemp}</span>
                  </p>
                </div>

                {/* Freezing */}
                <div>
                  <label className="font-bold block mb-1">Freezing</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product.freezing.tpf}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.freezing.tdkemp}</span>
                  </p>
                </div>

                {/* Packing */}
                <div>
                  <label className="font-bold block mb-1">Packing</label>
                  <p className="block text-sm">
                    Metal Inclusion/Reject: <span>{product.packing.mir}</span>
                  </p>
                  <p className="block text-sm">
                    Ketidaksesuaian: <span>{product.packing.tdkemp}</span>
                  </p>
                </div>

                {/* Stuffing */}
                <div>
                  <label className="font-bold block mb-1">Stuffing</label>
                  <p className="block text-sm">
                    Container Check: <span>{product.stuffing.conchek}</span>
                  </p>
                  <p className="block text-sm">
                    Quality: <span>{product.stuffing.quality}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white font-bold rounded">
          Tutup
        </button>
      </div>
    </div>
  );
};

ModalDetailProsesHarian.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    jam: PropTypes.string.isRequired,
    tanggal: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    remark: PropTypes.string.isRequired,
    receiving: PropTypes.shape({
      organoleptik: PropTypes.string,
      tdkorg: PropTypes.string,
      temp: PropTypes.string,
      tdkkemp: PropTypes.string,
    }),
    deboning: PropTypes.shape({
      dfish: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    wash: PropTypes.shape({
      tpwash: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    meat_spr: PropTypes.shape({
      tpspr: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    leaching: PropTypes.shape({
      tpl: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    refinery: PropTypes.shape({
      tpr: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    mixing: PropTypes.shape({
      tpm: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    forming: PropTypes.shape({
      top: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    freezing: PropTypes.shape({
      tpf: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    packing: PropTypes.shape({
      mir: PropTypes.string,
      tdkemp: PropTypes.string,
    }),
    stuffing: PropTypes.shape({
      conchek: PropTypes.string,
      quality: PropTypes.string,
    }),
  }).isRequired,
};

export default ModalDetailProsesHarian;