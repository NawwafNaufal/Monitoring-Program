import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ModalEditProduk = ({ isOpen, onClose, product, onSave }) => {
  const [formData, setFormData] = useState({
    id: '',
    nama_product: '',
    kode_barang: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (product) {
      console.log("Initializing form with product:", product); // DebuggingN
      setFormData({
        id: product.id,
        nama_product: product.nama_product || '',
        kode_barang: product.kode_barang || '',
        image: null
      });
      setImagePreview(product.image_url || null);
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value:`, value); // Debugging
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("New image selected:", file); // Debugging
      setFormData(prev => ({
        ...prev,
        image: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    console.log("Form data before submission:", formData);

    const formDataToSend = new FormData();
    formDataToSend.append('id', formData.id.toString());
    formDataToSend.append('nama_product', formData.nama_product);
    formDataToSend.append('kode_barang', formData.kode_barang);
    
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    console.log("FormData contents:");
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0], pair[1]);
    }

    await onSave(formDataToSend);
    onClose();
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-md relative z-10">
        <h2 className="text-xl font-bold text-zinc-100 mb-4">Edit Produk</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-100 mb-2 font-bold">
              Nama Produk
            </label>
            <input
              type="text"
              name="nama_product"
              value={formData.nama_product}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-zinc-100 text-zinc-900"
              required
            />
          </div>

          <div>
            <label className="block text-zinc-100 mb-2 font-bold">
              Kode Barang
            </label>
            <input
              type="text"
              name="kode_barang"
              value={formData.kode_barang}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-zinc-100 text-zinc-900"
              required
            />
          </div>

          <div>
            <label className="block text-zinc-100 mb-2 font-bold">
              Gambar Produk
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 rounded bg-zinc-100 text-zinc-900"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-zinc-600 text-zinc-100 rounded hover:bg-zinc-700 transition-colors font-bold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-zinc-100 rounded hover:bg-green-700 transition-colors font-bold"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ModalEditProduk.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nama_product: PropTypes.string,
    kode_barang: PropTypes.string,
    image_url: PropTypes.string
  }),
  onSave: PropTypes.func.isRequired
};

export default ModalEditProduk;