import PropTypes from "prop-types";
import { BsGrid } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const ModalDetailProses = ({ isOpen, onClose, product }) => {
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
            <h2 className="text-xl font-bold">Detail Proses</h2>
          </div>
          <div className="flex items-center gap-1 font-bold text-lg">
            <MdOutlineCalendarMonth className="text-2xl" />
            <span>{product?.tanggal || 'Tanggal Tidak Tersedia'}</span>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-lg p-4 text-zinc-100 overflow-y-auto max-h-[60vh] hide-scrollbar">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="font-bold block mb-1">Nama Produk :</label>
              <p className="text-sm text-gray-300">{product?.name || 'Nama Tidak Tersedia'}</p>
            </div>
            <div>
              <label className="font-bold block mb-1">Jam :</label>
              <p className="text-sm text-gray-300">{product?.jam || 'Jam Tidak Tersedia'}</p>
            </div>
            <div>
              <label className="font-bold block mb-1">Remark :</label>
              <p className="text-sm text-gray-300">{product?.remark || 'Remark Tidak Tersedia'}</p>
            </div>

            <div className="col-span-3 border-t border-zinc-600 pt-4 mt-2 text-gray-300">
              <h3 className="font-bold mb-2 text-lg">Proses Produksi</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Receiving */}
                <div>
                  <label className="font-bold block mb-1">Receiving</label>
                  <p className="block text-sm">
                    Organoleptik: <span>{product?.receiving?.organoleptik || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Temp of Fish: <span>{product?.receiving?.thr || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Reject: <span>{product?.receiving?.rej || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Deboning */}
                <div>
                  <label className="font-bold block mb-1">Deboning</label>
                  <p className="block text-sm">
                    Temp of Fish: <span>{product?.deboning?.dfish || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Washing */}
                <div>
                  <label className="font-bold block mb-1">Washing I</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product?.wash?.tpwash || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Meat Separating */}
                <div>
                  <label className="font-bold block mb-1">Meat Separating</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product?.meat_spr?.tpspr || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Leaching */}
                <div>
                  <label className="font-bold block mb-1">Leaching</label>
                  <p className="block text-sm">
                    pH: <span>{product?.leaching?.ph || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Temp of Product: <span>{product?.leaching?.tpl || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Refinery */}
                <div>
                  <label className="font-bold block mb-1">Refinery</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product?.refinery?.tpr || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Mixing */}
                <div>
                  <label className="font-bold block mb-1">Mixing</label>
                  <p className="block text-sm">
                    Temp of Product: <span>{product?.mixing?.tpm || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Bad Smell: <span>{product?.mixing?.bds || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Bad Colour: <span>{product?.mixing?.bdc || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Forming */}
                <div>
                  <label className="font-bold block mb-1">Forming</label>
                  <p className="block text-sm">
                    Moisture: <span>{product?.forming?.mois || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Temp of Product: <span>{product?.forming?.top || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Foreign Material: <span>{product?.forming?.rem || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Freezing */}
                <div>
                  <label className="font-bold block mb-1">Freezing</label>
                  <p className="block text-sm">
                    Temp of CPF: <span>{product?.freezing?.tpcf || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Temp of Product: <span>{product?.freezing?.tpf || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Packing */}
                <div>
                  <label className="font-bold block mb-1">Packing</label>
                  <p className="block text-sm">
                    Metal Calibration: <span>{product?.packing?.mtl || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Metal Inclusion/Reject: <span>{product?.packing?.mir || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Labeling: <span>{product?.packing?.leb || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Storing */}
                <div>
                  <label className="font-bold block mb-1">Storing</label>
                  <p className="block text-sm">
                    Temp of Anteroom: <span>{product?.storing?.atr || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Temp of CSR 1: <span>{product?.storing?.tcsr1 || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Temp of CSR 2: <span>{product?.storing?.tcsr2 || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Condensation: <span>{product?.storing?.cond || 'Data tidak tersedia'}</span>
                  </p>
                </div>

                {/* Stuffing */}
                <div>
                  <label className="font-bold block mb-1">Stuffing</label>
                  <p className="block text-sm">
                    Container Check: <span>{product?.stuffing?.conchek || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Quality: <span>{product?.stuffing?.quality || 'Data tidak tersedia'}</span>
                  </p>
                  <p className="block text-sm">
                    Broken: <span>{product?.stuffing?.brok || 'Data tidak tersedia'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

ModalDetailProses.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    receiving: PropTypes.shape({
      organoleptik: PropTypes.string,
      thr: PropTypes.string,
      rej: PropTypes.string,
    }),
    deboning: PropTypes.shape({
      dfish: PropTypes.string,
    }),
    wash: PropTypes.shape({
      tpwash: PropTypes.string,
    }),
    meat_spr: PropTypes.shape({
      tpspr: PropTypes.string,
    }),
    leaching: PropTypes.shape({
      ph: PropTypes.string,
      tpl: PropTypes.string,
    }),
    refinery: PropTypes.shape({
      tpr: PropTypes.string,
    }),
    mixing: PropTypes.shape({
      tpm: PropTypes.string,
      bds: PropTypes.string,
      bdc: PropTypes.string,
    }),
    forming: PropTypes.shape({
      mois: PropTypes.string,
      top: PropTypes.string,
      rem: PropTypes.string,
    }),
    freezing: PropTypes.shape({
      tpcf: PropTypes.string,
      tpf: PropTypes.string,
    }),
    packing: PropTypes.shape({
      mtl: PropTypes.string,
      mir: PropTypes.string,
      leb: PropTypes.string,
    }),
    storing: PropTypes.shape({
      atr: PropTypes.string,
      tcsr1: PropTypes.string,
      tcsr2: PropTypes.string,
      cond: PropTypes.string,
    }),
    stuffing: PropTypes.shape({
      conchek: PropTypes.string,
      quality: PropTypes.string,
      brok: PropTypes.string,
    }),
    remark: PropTypes.string,
    tanggal: PropTypes.string,
    jam: PropTypes.string,
    name: PropTypes.string,
  }),
};

ModalDetailProses.defaultProps = {
  product: {
    receiving: {},
    deboning: {},
    wash: {},
    meat_spr: {},
    leaching: {},
    refinery: {},
    mixing: {},
    forming: {},
    freezing: {},
    packing: {},
    storing: {},
    stuffing: {},
    remark: '',
    tanggal: '',
    jam: '',
    name: '',
  },
};

export default ModalDetailProses;
