import PropTypes from "prop-types";
import { useFormik } from 'formik';
import { useCreateData } from '../../../fitures/CreateLab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalAddLab = ({ isOpen, onClose, onAdd }) => {
  const { mutate } = useCreateData({
    onSuccess: () => {
      toast.success('Data berhasil ditambahkan!');
      onClose();
      onAdd(); // Trigger refresh pada parent component
    },
    onError: (error) => {
      toast.error('Gagal menambahkan data: ' + error.message);
    }
  });

  const formik = useFormik({
    initialValues: {
      id_produk: "",
      tanggal: "",
      gr1: "",
      cm1: "",
      zero: "",
      gr2: "",
      cm2: "",
      numb40: "",
      impurity: "",
      filth: "",
      them_product: "",
      ph: "",
      moisture: "",
      whitness: "",
      remark: ""
    },
    onSubmit: async (values) => {
      try {
        await mutate({
          id_produk: values.id_produk,
          tanggal: values.tanggal,
          gr1: values.gr1,
          cm1: values.cm1,
          zero: values.zero,
          gr2: values.gr2,
          cm2: values.cm2,
          numb40: values.numb40,
          impurity: values.impurity,
          filth: values.filth,
          them_product: values.them_product,
          ph: values.ph,
          moisture: values.moisture,
          whitness: values.whitness,
          remark: values.remark,
        });
        formik.resetForm();
      } catch (error) {
        toast.error('Gagal menambahkan data: ' + error.message);
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      role="dialog"
      aria-modal="true">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}
        aria-hidden="true"></div>
      <div className="hide-scrollbar bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-6 text-zinc-100 text-center">
          Tambah Lab
        </h2>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Nama Produk
            </label>
            <select
              name="id_produk"
              onChange={formik.handleChange}
              value={formik.values.id_produk}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled>
                Pilih Produk
              </option>
              <option value="1">Mata Lebar</option>
              <option value="2">Kurisi</option>
              <option value="3">Kuniran Kuning</option>
              <option value="4">Kapasan</option>
              <option value="5">Kuniran Putih</option>
              <option value="6">Kuniran Merah</option>
              <option value="7">Kuniran Mix</option>
              <option value="8">Coklata</option>
              <option value="9">Kd</option>
              <option value="10">Lainya</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Tanggal
            </label>
            <input
              type="date"
              name="tanggal"
              onChange={formik.handleChange}
              value={formik.values.tanggal}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Gr
            </label>
            <input
              type="number"
              name="gr1"
              onChange={formik.handleChange}
              value={formik.values.gr1}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Cm
            </label>
            <input
              type="number"
              name="cm1"
              onChange={formik.handleChange}
              value={formik.values.cm1}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              0`
            </label>
            <input
              type="number"
              name="zero"
              onChange={formik.handleChange}
              value={formik.values.zero}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Gr
            </label>
            <input
              type="number"
              name="gr2"
              onChange={formik.handleChange}
              value={formik.values.gr2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Cm
            </label>
            <input
              type="number"
              name="cm2"
              onChange={formik.handleChange}
              value={formik.values.cm2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              40`
            </label>
            <input
              type="number"
              name="numb40"
              onChange={formik.handleChange}
              value={formik.values.numb40}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Impurity
            </label>
            <input
              type="number"
              name="impurity"
              onChange={formik.handleChange}
              value={formik.values.impurity}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Filth
            </label>
            <input
              type="number"
              name="filth"
              onChange={formik.handleChange}
              value={formik.values.filth}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Themp of product
            </label>
            <input
              type="number"
              name="them_product"
              onChange={formik.handleChange}
              value={formik.values.them_product}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              pH
            </label>
            <input
              type="number"
              name="ph"
              onChange={formik.handleChange}
              value={formik.values.ph}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Moisture
            </label>
            <input
              type="number"
              name="moisture"
              onChange={formik.handleChange}
              value={formik.values.moisture}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Whiteness
            </label>
            <input
              type="number"
              name="whitness"
              onChange={formik.handleChange}
              value={formik.values.whitness}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Remark
            </label>
            <input
              type="text"
              name="remark"
              onChange={formik.handleChange}
              value={formik.values.remark}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div className="col-span-2 mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="font-bold mr-4 px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              Batal
            </button>
            <button
              type="submit"
              className="font-bold px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Tambah
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

ModalAddLab.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ModalAddLab;