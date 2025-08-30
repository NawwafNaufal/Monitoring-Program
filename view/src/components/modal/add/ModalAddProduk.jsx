import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useCreateData } from '../../../fitures/CreateProduk';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalAddProduk = ({ isOpen, onClose }) => {
  const { mutate, refetch } = useCreateData({
    onSuccess: () => {
      refetch();
      toast.success('Data berhasil ditambahkan!');
      onClose();
    },
  });

  const formik = useFormik({
    initialValues: {
      nama_product: "",
      kode_barang: ""
    },
    onSubmit: async (values) => {
      try {
        await mutate({
          nama_product: values.nama_product,
          kode_barang: values.kode_barang,
        });
        formik.resetForm();
      } catch (error) {
        toast.error('Gagal menambahkan data!' + error);
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[425px]">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Tambah Produk</h2>
        </div>
        
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label 
              htmlFor="nama_product" 
              className="block text-sm font-medium text-gray-700"
            >
              Nama Produk
            </label>
            <input
              id="nama_product"
              name="nama_product"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nama_product}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="kode_barang"
              className="block text-sm font-medium text-gray-700"
            >
              Kode Produk
            </label>
            <input
              id="kode_barang"
              name="kode_barang"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.kode_barang}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

ModalAddProduk.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAddProduk;