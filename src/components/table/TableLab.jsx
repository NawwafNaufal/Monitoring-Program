import { useState } from "react";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
// import ModalImportExcelLab from "../modal/import excel/ModalImportExcelLab";
import ModalEditLab from "../modal/edit/ModalEditLab";
import ModalAddLab from "../modal/add/ModalAddLab";
import ModalHapusLab from "../modal/hapus/ModalHapusLab";
import ModalDetailLab from "../modal/detail/ModalDetailLab";
import { useFetchData } from "../../fitures/FetchLab";
import { Tooltip } from "react-tooltip";

const TableLab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalState, setModalState] = useState({
    add: false,
    edit: false,
    delete: false,
    detail: false,
    import: false
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const itemsPerPage = 10;
  const { data: labData = [], isLoading, error } = useFetchData();

  console.log("Lab Data:", labData);  

  const filteredData = labData.filter(item => 
    item.nama_ikan?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleModalOpen = (modalType, product = null) => {
    setModalState(prev => ({ ...prev, [modalType]: true }));
    if (product) setSelectedProduct(product);
  };

  const handleModalClose = (modalType) => {
    setModalState(prev => ({ ...prev, [modalType]: false }));
    if (modalType !== 'detail') setSelectedProduct(null);
  };

  const showToast = (message, type = 'success') => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: `${type === 'success' ? 'bg-zinc-900' : 'bg-red-500'} text-white`,
      bodyClassName: "flex items-center",
    });
  };

  const handleAddProduct = (newProduct) => {
    showToast(`${newProduct.name} Berhasil Ditambahkan!`);
    handleModalClose('add');
  };

  const handleEditSave = (updatedProduct) => {
    showToast(`${updatedProduct.name} Berhasil Diperbarui!`);
    handleModalClose('edit');
  };

  const handleDelete = () => {
    if (!selectedProduct) return;
    showToast(`${selectedProduct.name} Berhasil Dihapus!`);
    handleModalClose('delete');
  };

  const renderTableRows = () => {
    if (isLoading) return (
      <tr>
        <td colSpan="10" className="text-center py-4">Loading...</td>
      </tr>
    );

    if (error) return (
      <tr>
        <td colSpan="10" className="text-center py-4 text-red-500">Error: {error.message}</td>
      </tr>
    );

    if (!currentData.length) return (
      <tr>
        <td colSpan="10" className="text-center py-4">Tidak ada data tersedia</td>
      </tr>
    );
    function formatTanggal(tanggal) {
      const date = new Date(tanggal);
      
      const bulan = [
          "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
          "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      
      const hari = date.getDate();
      const namaBulan = bulan[date.getMonth()];
      const tahun = date.getFullYear();
      
      return `${hari}-${namaBulan}-${tahun}`;
  }
    return currentData.map((item, index) => (
      <tr key={item.id}>
        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
        <td>{formatTanggal(item.tanggal)}</td>
        <td>{item.nama_ikan}</td>
        <td>{item.gr1}</td>
        <td>{item.cm1}</td>
        <td>{item.nol}</td>
        <td>{item.gr2}</td>
        <td>{item.cm2}</td>
        <td>{item.empat}</td>
        <td>{item.remark}</td>
        <td className="py-3 px-6">
          <div className="flex items-center justify-center space-x-2">
            <button
              data-tooltip-id="btnTooltip"
              data-tooltip-content="Edit"
              onClick={() => handleModalOpen('edit', item)}
              className="text-green-600 hover:text-green-200"
              aria-label="Edit">
              <BsPencil className="text-xl" />
            </button>
            <button
              data-tooltip-id="btnTooltip"
              data-tooltip-content="Delete"
              onClick={() => handleModalOpen('delete', item)}
              className="text-red-600 hover:text-red-200"
              aria-label="Delete">
              <BsTrash className="text-xl" />
            </button>
            <button
              data-tooltip-id="btnTooltip"
              data-tooltip-content="Detail"
              onClick={() => handleModalOpen('detail', item)}
              className="text-blue-600 hover:text-blue-200"
              aria-label="Detail">
              <BsCardList className="text-2xl" />
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5 mt-1">
        <div className="flex items-center space-x-4">
          <div className="search-input flex items-center border border-zinc-100 rounded overflow-hidden flex-grow h-10">
            <div className="relative flex-grow h-full">
              <input
                type="search"
                className="p-2 pl-10 w-full h-full outline-none"
                placeholder="Cari Barang..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-2.5 transform text-gray-400 text-2xl" />
            </div>
          </div>
          <button
            onClick={() => handleModalOpen('add')}
            className="px-4 py-2 bg-green-500 text-zinc-100 font-bold rounded hover:bg-green-600">
            Tambah
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="flex items-center px-4 py-2 bg-blue-500 text-zinc-100 font-bold rounded hover:bg-blue-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Convert to Excel
          </button>
          <button
            onClick={() => handleModalOpen('import')}
            className="flex items-center px-4 py-2 bg-yellow-500 text-zinc-100 font-bold rounded hover:bg-yellow-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Import Excel
          </button>
        </div>
      </div>

      <h1 className="text-xl font-bold text-zinc-100 font-serif mb-4">
        Daftar Barang
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
              <th rowSpan="2" className="border border-zinc-100">No</th>
              <th rowSpan="2" className="border border-zinc-100">Tanggal</th>
              <th rowSpan="2" className="border border-zinc-100">Jenis Produk</th>
              <th colSpan="6" className="border border-zinc-100">Jelly Strength</th>
              <th rowSpan="2" className="border border-zinc-100">Grade</th>
              <th rowSpan="2" className="border border-zinc-100">Action</th>
            </tr>
            <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
              <td className="border border-zinc-100 font-bold">gr</td>
              <td className="border border-zinc-100 font-bold">cm</td>
              <td className="border border-zinc-100 font-bold">0</td>
              <td className="border border-zinc-100 font-bold">gr</td>
              <td className="border border-zinc-100 font-bold">cm</td>
              <td className="border border-zinc-100 font-bold">40</td>
            </tr>
          </thead>
          <tbody className="text-zinc-100 text-base font-bold text-center">
            {renderTableRows()}
          </tbody>
        </table>
      </div>

      <Tooltip id="btnTooltip" place="top" type="dark" effect="solid" />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Modals */}
      <ModalAddLab
        isOpen={modalState.add}
        onClose={() => handleModalClose('add')}
        onAdd={handleAddProduct}
      />
      {selectedProduct && (
        <>
          <ModalEditLab
            isOpen={modalState.edit}
            onClose={() => handleModalClose('edit')}
            product={selectedProduct}
            onSave={handleEditSave}
          />
          <ModalHapusLab
            isOpen={modalState.delete}
            onClose={() => handleModalClose('delete')}
            product={selectedProduct}
            onDelete={handleDelete}
          />
          <ModalDetailLab
            isOpen={modalState.detail}
            onClose={() => handleModalClose('detail')}
            product={selectedProduct}
          />
        </>
      )}
      {/* <ModalImportExcelLab
        isOpen={modalState.import}
        onClose={() => handleModalClose('import')}
        onImport={handleImportExcel}
      /> */}
      <ToastContainer />
    </div>
  );
};

export default TableLab;