import PropTypes from "prop-types";
import { useFormik } from 'formik';
import { useCreateData } from '../../../fitures/AddProses';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalAddProses = ({ isOpen, onClose, onAdd }) => {
  const { mutate } = useCreateData({
    onSuccess: () => {
      toast.success('Data berhasil ditambahkan!');
      onClose();
      onAdd();
    },
    onError: (error) => {
      toast.error('Gagal menambahkan data: ' + error.message);
    }
  });

  const formik = useFormik({
    initialValues: {
      jam: "",
      tanggal:"",
      id_ikan: "",
      organoleptik_receiving: "",
      temp_of_fish_receiving: "",
      reject_receiving: "",
      temp_of_fish_deheading: "",
      temp_of_product_washing_I: "",
      ph_leaching: "",
      temp_of_product_leaching: "",
      temp_of_product_mixing: "",
      bad_smell_mixing: "",
      bad_colour_mixing: "",
      moisture_forming: "",
      temp_of_product_forming: "",
      foreign_material_forming: "",
      temp_of_CPF_freezing: "",
      metal_calibration_packing: "",
      metal_inclusion_reject_packing: "",
      labeling_packing: "",
      temp_of_anteroom_storing: "",
      temp_of_CSR_1_storing: "",
      temp_of_CSR_2_storing: "",
      product_dehydration_storing: "",
      condensation_storing: "",
      container_check_stuffing: "",
      quality_stuffing: "",
      broken_stuffing: "",
      remark: ""
    },
    onSubmit: async (values) => {
      try {
        console.log('Submitting form with values:', values);
        await mutate(values);
        formik.resetForm();
      } catch (error) {
        toast.error('Gagal menambahkan data: ' + error.message);
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}
      />
      <div className="hide-scrollbar bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">
          Tambah Data Proses
        </h2>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {/* Section: Input waktu dan jenis ikan */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Jam
            </label>
            <input
              type="time"
              name="jam"
              value={formik.values.jam}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Tanggal
            </label>
            <input
              type="date"
              name="tanggal"
              value={formik.values.tanggal}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Jenis Ikan
            </label>
            <select
              name="id_ikan"
              value={formik.values.id_ikan}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>Pilih Jenis Ikan</option>
              <option value="1">Ikan A</option>
              <option value="2">Ikan B</option>
            </select>
          </div>

          {/* Section: Receiving */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Organoleptik (Receiving)
            </label>
            <input
              type="number"
              name="organoleptik_receiving"
              value={formik.values.organoleptik_receiving}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Fish (Receiving)
            </label>
            <input
              type="number"
              name="temp_of_fish_receiving"
              value={formik.values.temp_of_fish_receiving}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Reject (Receiving)
            </label>
            <input
              type="number"
              name="reject_receiving"
              value={formik.values.reject_receiving}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Section: Deheading and Washing */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Fish (Deheading)
            </label>
            <input
              type="number"
              name="temp_of_fish_deheading"
              value={formik.values.temp_of_fish_deheading}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Washing I)
            </label>
            <input
              type="number"
              name="temp_of_product_washing_I"
              value={formik.values.temp_of_product_washing_I}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>


          {/* Section: Leaching */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              PH (Leaching)
            </label>
            <input
              type="number"
              name="ph_leaching"
              value={formik.values.ph_leaching}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Leaching)
            </label>
            <input
              type="number"
              name="temp_of_product_leaching"
              value={formik.values.temp_of_product_leaching}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Mixing)
            </label>
            <input
              type="number"
              name="temp_of_product_mixing"
              value={formik.values.temp_of_product_mixing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Bad Smell (Mixing)
            </label>
            <input
              type="number"
              name="bad_smell_mixing"
              value={formik.values.bad_smell_mixing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Bad Colour (Mixing)
            </label>
            <input
              type="number"
              name="bad_colour_mixing"
              value={formik.values.bad_colour_mixing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Section: Forming */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Moisture (Forming)
            </label>
            <input
              type="number"
              name="moisture_forming"
              value={formik.values.moisture_forming}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Forming)
            </label>
            <input
              type="number"
              name="temp_of_product_forming"
              value={formik.values.temp_of_product_forming}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Foreign Material (Forming)
            </label>
            <input
              type="number"
              name="foreign_material_forming"
              value={formik.values.foreign_material_forming}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Section: Freezing */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of CPF (Freezing)
            </label>
            <input
              type="number"
              name="temp_of_CPF_freezing"
              value={formik.values.temp_of_CPF_freezing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Section: Packing */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Metal Calibration (Packing)
            </label>
            <input
              type="number"
              name="metal_calibration_packing"
              value={formik.values.metal_calibration_packing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Metal Inclusion/Reject (Packing)
            </label>
            <input
              type="number"
              name="metal_inclusion_reject_packing"
              value={formik.values.metal_inclusion_reject_packing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Labeling (Packing)
            </label>
            <input
              type="number"
              name="labeling_packing"
              value={formik.values.labeling_packing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Section: Storing */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Anteroom (Storing)
            </label>
            <input
              type="number"
              name="temp_of_anteroom_storing"
              value={formik.values.temp_of_anteroom_storing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of CSR 1 (Storing)
            </label>
            <input
              type="number"
              name="temp_of_CSR_1_storing"
              value={formik.values.temp_of_CSR_1_storing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of CSR 2 (Storing)
            </label>
            <input
              type="number"
              name="temp_of_CSR_2_storing"
              value={formik.values.temp_of_CSR_2_storing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Product Dehydration (Storing)
            </label>
            <input
              type="number"
              name="product_dehydration_storing"
              value={formik.values.product_dehydration_storing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Condensation (Storing)
            </label>
            <input
              type="number"
              name="condensation_storing"
              value={formik.values.condensation_storing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Section: Stuffing */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Container Check (Stuffing)
            </label>
            <input
              type="number"
              name="container_check_stuffing"
              value={formik.values.container_check_stuffing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Quality (Stuffing)
            </label>
            <input
              type="number"
              name="quality_stuffing"
              value={formik.values.quality_stuffing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Broken (Stuffing)
            </label>
            <input
              type="number"
              name="broken_stuffing"
              value={formik.values.broken_stuffing}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Remark Section */}
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
            Remark
            </label>
            <input
              type="number"
              name="remark"
              value={formik.values.remark}
              onChange={formik.handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Button Section - Now inside the form */}
          <div className="col-span-2 sm:col-span-3">
            <div className="flex justify-end mt-4 gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-zinc-500 text-white rounded-md hover:bg-zinc-600 focus:outline-none font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none font-bold"
              >
                Tambah Proses
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

ModalAddProses.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ModalAddProses;