import { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalEditProduk from "../modal/edit/ModalEditProduk";
import ModalHapusProduk from "../modal/hapus/ModalHapusProduk";
import ModalAddProduk from "../modal/add/ModalAddProduk";
import { Tooltip } from "react-tooltip";
import { useFetchData } from "../../fitures/FetchData";
import { useCreateDatas } from "../../fitures/CreateProduks";
import { useDeleteProduct } from "../../fitures/UseDeleteProduk";
import { IoEnterOutline, IoExitOutline } from "react-icons/io5";

const TableProduk = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);

  const navigate = useNavigate();
  const deleteProduct = useDeleteProduct();

  const { mutate, refetch } = useCreateDatas({
    onSuccess: () => {
      refetch();
      toast.success('Data berhasil ditambahkan!');
    },
  });

  const { data: datas = [], refetch: refetchProducts } = useFetchData();

  const handleDelete = async (productId) => {
    try {
      await deleteProduct.mutateAsync(productId);
      setDeleteModalOpen(false);
      refetchProducts(); // Refresh the products list
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Gagal menghapus produk. Silakan coba lagi.');
    }
  };

  const totalPages = Math.ceil((datas?.length || 0) / itemsPerPage);
  
  const currentData = datas?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) || [];

  const handlePostBarangStatus = async (id_produk, status) => {
    try {
      await mutate({
        id_produk: id_produk,
        status: status
      });
      
      if (status === "masuk") {
        const product = datas.find(item => item.id === id_produk);
        setBarangMasuk(prev => [...prev, product]);
      } else {
        const product = datas.find(item => item.id === id_produk);
        setBarangKeluar(prev => [...prev, product]);
      }
      
      toast.success(`Berhasil menambahkan barang ${status}!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-zinc-900 text-white",
      });
    } catch (error) {
      toast.error(`Gagal menambahkan data: ${error.message}`);
    }
  };

  const handleBarangMasuk = (product) => {
    handlePostBarangStatus(product.id, "Barang Masuk");
  };

  const handleBarangKeluar = (product) => {
    handlePostBarangStatus(product.id, "Barang Keluar");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  const renderData = () => {
    if (!datas || datas.length === 0) {
      return (
        <tr>
          <td colSpan="5" className="text-center py-4">
            Tidak ada data tersedia
          </td>
        </tr>
      );
    }

    return currentData.map((data, index) => {
      const rowNumber = (currentPage - 1) * itemsPerPage + index + 1;
      return (
        <tr key={data.id}>
          <td>{rowNumber}</td>
          <td>{data.kode_barang}</td>
          <td>{data.nama_product}</td>
          <td>
            <button
              data-tooltip-id="btnTooltip"
              data-tooltip-content="Edit"
              className="text-green-600 hover:text-green-200"
              aria-label="Edit"
              onClick={() => openEditModal(data)}
            >
              <BsPencil className="text-xl" />
            </button>
            <button
              data-tooltip-id="btnTooltip"
              data-tooltip-content="Delete"
              className="text-red-600 hover:text-red-200"
              aria-label="Delete"
              onClick={() => openDeleteModal(data)}
            >
              <BsTrash className="text-xl" />
            </button>
          </td>
          <td className="py-3 px-6">
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => handleBarangMasuk(data)}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 font-bold"
              >
                Barang Masuk
              </button>
              <button
                onClick={() => handleBarangKeluar(data)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 font-bold"
              >
                Barang Keluar
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const goToBarangMasukPage = () => {
    navigate("/incoming", { state: { barangMasuk } });
  };

  const goToBarangKeluarPage = () => {
    navigate("/outgoing", { state: { barangKeluar } });
  };

  if (!datas) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-100 font-serif">
          Daftar Produk
        </h1>
        <ToastContainer />
        <div className="flex items-center mb-4 gap-3">
          <button
            data-tooltip-id="masukTooltip"
            data-tooltip-content="Lihat Barang Masuk"
            onClick={goToBarangMasukPage}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-bold flex items-center gap-2"
          >
            <IoEnterOutline className="text-2xl" />
          </button>

          <button
            data-tooltip-id="keluarTooltip"
            data-tooltip-content="Lihat Barang Keluar"
            onClick={goToBarangKeluarPage}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 font-bold flex items-center gap-2"
          >
            <IoExitOutline className="text-2xl" />
          </button>
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-bold"
          >
            Tambah Produk
          </button>
        </div>
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Kode Product</th>
            <th className="py-2 px-4">Nama Product</th>
            <th className="py-2 px-4">Actions</th>
            <th className="py-2 px-4">Opsi</th>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {renderData()}
        </tbody>
      </table>

      <Tooltip id="masukTooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="keluarTooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="btnTooltip" place="top" type="dark" effect="solid" />

      {datas.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={datas.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}

      {selectedProduct && (
        <ModalEditProduk
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
        />
      )}

      {selectedProduct && (
        <ModalHapusProduk
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          product={selectedProduct}
          onDelete={() => handleDelete(selectedProduct.id)}
        />
      )}

      <ModalAddProduk
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
    </div>
  );
};

export default TableProduk;