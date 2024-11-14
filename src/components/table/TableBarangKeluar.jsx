import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { useFetchData } from "../../fitures/FetchBarangKeluar";
import ModalEditBarangKeluar from "../modal/edit/ModalEditBarangKeluar";
import ModalHapusBarangKeluar from "../modal/hapus/ModalHapusBarangKeluar";
import { useCreateDatas} from "../../fitures/CreateBarangKembali";
import {useDeleteData} from "../../fitures/DeleteBarang";
import ModalDetailBarangKeluar from "../modal/detail/ModalDetailBarangKeluar";
import ModalImportExcelBarangKeluar from "../modal/import excel/ModalImportExcelBarangKeluar";
import { AiOutlineRollback } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

const TableBarangKeluar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(null);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [processingItems, setProcessingItems] = useState({});

  const navigate = useNavigate();
  const { data = [], refetch } = useFetchData();

  const { mutate: createBarangKembali } = useCreateDatas({
    onSuccess: () => {
      refetch();
      toast.success('Data berhasil ditambahkan ke Barang Kembali!');
    },
    onError: (error) => {
      toast.error('Gagal menambahkan data ke Barang Kembali: ' + error.message);
    }
  });

  const { mutate: deleteBarangKeluar } = useDeleteData({
    onSuccess: () => {
      refetch();
      toast.success('Data berhasil dihapus dari Barang Keluar!');
    },
    onError: (error) => {
      toast.error('Gagal menghapus data dari Barang Keluar: ' + error.message);
    }
  });

  const handleBarangKembali = async (product) => {
    try {
      // Set processing state for this item
      setProcessingItems(prev => ({ ...prev, [product.id]: true }));

      // Step 1: Insert complete data into Barang Kembali
      const barangKembaliData = {
        id_produk: product.id_produk,
        jumlah: product.jumlah,
        tanggal: product.tanggal,
        saldo: product.saldo,
        kg: product.kg,
        komposisi: product.komposisi,
        keterangan: product.keterangan,
        tujuan: product.tujuan,
        penerima_barang: product.penerima_barangm,
        gram: product.gram,
        cm: product.cm,
        js40: product.js40,
        impurity: product.impurity,
        filth: product.filth,
        temp: product.temp,
        ph: product.ph,
        moisture: product.moisture,
        whitness: product.whitness,
        grade: product.grade
      };

      await createBarangKembali(barangKembaliData);

      // Step 2: Delete from Barang Keluar
      await deleteBarangKeluar(product.id);

      toast.success(`${product.id_produk} berhasil dipindahkan ke Barang Kembali!`, {
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

    } catch (error) {
      toast.error(`Gagal memproses data: ${error.message}`, {
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
    } finally {
      // Clear processing state for this item
      setProcessingItems(prev => ({ ...prev, [product.id]: false }));
    }
  };

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter(item => {
    // Safely check if the properties exist and are strings
    const id_produk = item?.id_produk?.toString().toLowerCase() || '';
    const keterangan = item?.keterangan?.toString().toLowerCase() || '';
    const searchTermLower = searchTerm.toLowerCase();

    return id_produk.includes(searchTermLower) || 
           keterangan.includes(searchTermLower);
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
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
      setSelectedDetailProduct(product);
      setDetailModalOpen(true);
    } else {
      console.error("Product ID is missing");
    }
  };

  const handleEditSave = (updatedProduct) => {
    console.log("Data telah diperbarui:", updatedProduct);
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

  const handleDelete = () => {
    console.log("Data telah dihapus:", selectedProduct);
    toast.success(`${selectedProduct.name} Berhasil Dihapus!`, {
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
    setDeleteModalOpen(false);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Barang Keluar");
    XLSX.writeFile(workbook, "Data_Barang_Keluar.xlsx");
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
    if (!currentData || currentData.length === 0) {
      return (
        <tr>
          <td colSpan="8" className="text-center py-4">
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
          <td className="py-3 px-6">{data.jumlah}</td>
          <td className="py-3 px-6">{data.tujuan}</td>
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
                onClick={() => openDeleteModal(data)}
                className="text-red-600 hover:text-red-200"
                aria-label="Delete">
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
          <td className="py-3 px-6">
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => handleBarangKembali(data)}
                disabled={processingItems[data.id]}
                className={`px-2 py-1 ${
                  processingItems[data.id]
                    ? 'bg-gray-500'
                    : 'bg-yellow-500 hover:bg-yellow-600'
                } text-white rounded font-bold`}
              >
                {processingItems[data.id] ? 'Processing...' : 'Barang Kembali'}
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
                placeholder="Cari Barang Keluar..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-2.5 transform text-gray-400 text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            data-tooltip-id="kembaliTooltip"
            data-tooltip-content="Lihat Barang kembali"
            onClick={() => navigate("/rejecting")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-bold">
            <AiOutlineRollback className="text-2xl" />
          </button>
          <button
            onClick={exportToExcel}
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
        Daftar Barang Keluar
      </h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Tanggal</th>
            <th className="py-2 px-4">Nama Produk</th>
            <th className="py-2 px-4">Jumlah</th>
            <th className="py-2 px-4">Tujuan</th>
            <th className="py-2 px-4">Keterangan</th>
            <th className="py-2 px-4">Action</th>
            <th className="py-2 px-4">Opsi</th>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {renderData()}
        </tbody>
      </table>
      <Tooltip id="kembaliTooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="btnTooltip" place="top" type="dark" effect="solid" />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      <ModalEditBarangKeluar
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        product={selectedProduct}
        onSave={handleEditSave}
      />
      <ModalHapusBarangKeluar
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
        product={selectedProduct}
      />
      <ModalDetailBarangKeluar
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        product={selectedDetailProduct}
      />
      <ModalImportExcelBarangKeluar
        isOpen={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        onImport={handleImportExcel}
      />

      <div className="flex justify-between mt-4"></div>
      <ToastContainer />
    </div>
  );
};

export default TableBarangKeluar;