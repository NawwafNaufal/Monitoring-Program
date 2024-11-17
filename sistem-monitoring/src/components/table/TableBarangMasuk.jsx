import { useState } from "react";
import * as XLSX from "xlsx";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { useFetchData } from "../../fitures/FetchBarangMasuk";
import ModalEditBarangMasuk from "../modal/edit/ModalEditBarangMasuk";
import { useDeleteProduct } from "../../fitures/UseDeleteBarangMasuk";
import ModalHapusProduk from "../modal/hapus/ModalHapusBarangMasuk";
import ModalDetailBarangMasuk from "../modal/detail/ModalDetailBarangMasuk";
import ModalImportExcelBarangMasuk from "../modal/import excel/ModalImportExcelBarangMasuk";
import { Tooltip } from "react-tooltip";

const TableBarangMasuk = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const deleteProduct = useDeleteProduct();

  const handleImportExcel = (file) => {
    console.log("File Excel yang diimpor:", file);
    toast.success(`File ${file.name} berhasil diimpor!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });
  };
  const { data = [], refetch: refetchProducts } = useFetchData();


  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
  const openDetailModal = (product) => {
    if (product?.id) {
      setSelectedId(product.id);
      setDetailModalOpen(true);
    } else {
      console.error("Product ID is missing");
      toast.error("Error: Unable to load product details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-zinc-900 text-white",
      });
    }
  };
  const handleEditSave = (updatedProduct) => {
    console.log("Produk telah diperbarui:", updatedProduct);
    toast.success(`${updatedProduct.name} Berhasil Diperbarui!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });
    setEditModalOpen(false);
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct.mutateAsync(productId);
      setDeleteModalOpen(false);
      refetchProducts(); 
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Gagal menghapus produk. Silakan coba lagi.');
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Barang Masuk");
    XLSX.writeFile(workbook, "Data_Barang_Masuk.xlsx");
    toast.success("Data berhasil diekspor ke Excel!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });
  };
  const renderData = () => {
    if (!data || data.length === 0) {
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
          <td className="py-3 px-6">{data.tanggal}</td>
              <td className="py-3 px-6">{data.id_produk}</td>
              <td className="py-3 px-6">{data.status}</td>
              <td className="py-3 px-6">{data.jumlah}</td>
              <td className="py-3 px-6">{data.cm}</td>
              <td className="py-3 px-6">{data.js40}</td>
              <td className="py-3 px-6">{data.keterangan}</td>
          <td className="py-3 px-6">
          <div className="flex items-center justify-center space-x-2">
                  <button
                    data-tooltip-id="btnTooltip"
                    data-tooltip-content="Edit"
                    onClick={() => openEditModal(data)}
                    className="text-green-600 hover:text-green-200"
                    aria-label="Edit">
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
                  <button
                    data-tooltip-id="btnTooltip"
                    data-tooltip-content="Detail"
                    onClick={() => openDetailModal(data)}
                    className="text-blue-600 hover:text-blue-200"
                    aria-label="Detail">
                    <BsCardList className="text-2xl" />
                  </button>
                </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-5 mt-1">
        <div className="flex items-center space-x-4">
          <div className="search-input flex items-center border border-zinc-100 rounded overflow-hidden flex-grow h-10">
            <div className="relative flex-grow h-full">
              <input
                type="search"
                className="p-2 pl-10 w-full h-full outline-none"
                placeholder="Cari Barang..."
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-2.5 transform text-gray-400 text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={exportToExcel} // Tambahkan onClick untuk ekspor ke Excel
            className="flex items-center px-4 py-2 bg-blue-500 text-zinc-100 font-bold rounded hover:bg-blue-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Convert to Excel
          </button>
          <button
            onClick={() => setImportModalOpen(true)}
            className="flex items-center px-4 py-2 bg-yellow-500 text-zinc-100 font-bold rounded hover:bg-yellow-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Import Excel
          </button>
        </div>
      </div>
      <h1 className="text-xl font-bold text-zinc-100 font-serif mb-4">
        Daftar Barang
      </h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Tanggal</th>
            <th className="py-2 px-4">Nama Produk</th>
            <th className="py-2 px-4">Jumlah</th>
            <th className="py-2 px-4">Saldo</th>
            <th className="py-2 px-4">Cm</th>
            <th className="py-2 px-4">JS 40`</th>
            <th className="py-2 px-4">Keterangan</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
        {renderData()}
        </tbody>
      </table>
      <Tooltip id="btnTooltip" place="top" type="dark" effect="solid" />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ModalEditBarangMasuk
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
          onSave={handleEditSave}
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
     {selectedId && (
  <ModalDetailBarangMasuk
    isOpen={detailModalOpen}
    onClose={() => setDetailModalOpen(false)}
    id={selectedId} 
  />
)}
      <ModalImportExcelBarangMasuk
        isOpen={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        onImport={handleImportExcel}
      />
      <ToastContainer />
    </div>
  );
};

export default TableBarangMasuk;