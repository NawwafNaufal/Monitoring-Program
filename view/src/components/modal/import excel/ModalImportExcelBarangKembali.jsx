import { useState } from "react";
import PropTypes from "prop-types";

const ModalImportExcelBarangKembali = ({ isOpen, onClose, onImport }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onImport(selectedFile);
      setSelectedFile(null);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 bg-opacity-50">
      <div className="bg-zinc-900 w-1/3 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">
          Import Excel File Barang Kembali
        </h2>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-zinc-50 file:text-zinc-700 hover:file:bg-zinc-100 border border-zinc-50"
        />
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-500 text-zinc-100 font-bold rounded hover:bg-zinc-600">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedFile}
            className={`px-4 py-2 font-bold rounded ${
              selectedFile
                ? "bg-blue-500 text-zinc-100 hover:bg-blue-600"
                : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
            }`}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

ModalImportExcelBarangKembali.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired,
};

export default ModalImportExcelBarangKembali;
