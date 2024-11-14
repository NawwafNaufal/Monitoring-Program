import { useState, useRef } from "react";
import TableBau from "../table/TableBau";
import TableGel from "../table/TableGel";
import TableWhiteness from "../table/TableWhiteness";
import TableMoisture from "../table/TableMoisture";
import TableProdukUji from "../table/TableProdukUji";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";

const FormRekapLab = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const [activeMonth, setActiveMonth] = useState(
    months[currentDate.getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const produkUjiRef = useRef();
  const gelRef = useRef();
  const moistureRef = useRef();
  const whitenessRef = useRef();
  const bauRef = useRef();

  // Konversi nama bulan ke angka (1-12)
  const getMonthNumber = (monthName) => {
    return months.indexOf(monthName) + 1;
  };

  const handleMonthChange = (month) => {
    console.log('Changing month to:', month, 'Month number:', getMonthNumber(month));
    setActiveMonth(month);
  };

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value, 10);
    console.log('Changing year to:', newYear);
    setSelectedYear(newYear);
  };

  const exportToExcel = () => {
    try {
      const produkUjiData = produkUjiRef.current?.getData() || [];
      const gelData = gelRef.current?.getData() || [];
      const moistureData = moistureRef.current?.getData() || [];
      const whitenessData = whitenessRef.current?.getData() || [];
      const bauData = bauRef.current?.getData() || [];

      const workbook = XLSX.utils.book_new();
      
      // Add sheets only if they have data
      if (produkUjiData.length > 0) {
        XLSX.utils.book_append_sheet(
          workbook,
          XLSX.utils.json_to_sheet(produkUjiData),
          "Produk Uji"
        );
      }
      
      if (gelData.length > 0) {
        XLSX.utils.book_append_sheet(
          workbook,
          XLSX.utils.json_to_sheet(gelData),
          "Gel"
        );
      }
      
      if (moistureData.length > 0) {
        XLSX.utils.book_append_sheet(
          workbook,
          XLSX.utils.json_to_sheet(moistureData),
          "Moisture"
        );
      }
      
      if (whitenessData.length > 0) {
        XLSX.utils.book_append_sheet(
          workbook,
          XLSX.utils.json_to_sheet(whitenessData),
          "Whiteness"
        );
      }
      
      if (bauData.length > 0) {
        XLSX.utils.book_append_sheet(
          workbook,
          XLSX.utils.json_to_sheet(bauData),
          "Bau"
        );
      }

      XLSX.writeFile(workbook, `Rekap_Lab_${selectedYear}_${activeMonth}.xlsx`);
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
    } catch (error) {
      console.error("Export to Excel failed:", error);
      toast.error("Gagal mengekspor data!");
    }
  };

  return (
    <main className="p-4 bg-zinc-900 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-zinc-100 font-serif">
          Rekap Lab
        </h1>
        <div className="flex justify-end gap-2">
          <button
            onClick={exportToExcel}
            className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Convert to Excel
          </button>
          <input
            type="number"
            onChange={handleYearChange}
            value={selectedYear}
            min="1900"
            max={new Date().getFullYear()}
            className="text-center border border-zinc-300 p-2 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mb-6 flex justify-between gap-1">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => handleMonthChange(month)}
            className={`font-semibold px-[13px] py-2 rounded-md transition-colors duration-200 ${
              activeMonth === month
                ? "bg-zinc-600 text-zinc-100"
                : "bg-zinc-100 text-zinc-800 hover:bg-zinc-300"
            }`}>
            {month}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Produk Uji</h2>
          <TableProdukUji
            ref={produkUjiRef}
            month={getMonthNumber(activeMonth)}
            year={parseInt(selectedYear, 10)}
          />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Gel</h2>
          <TableGel 
            ref={gelRef} 
            month={getMonthNumber(activeMonth)} 
            year={parseInt(selectedYear, 10)} 
          />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Moisture</h2>
          <TableMoisture
            ref={moistureRef}
            month={getMonthNumber(activeMonth)}
            year={parseInt(selectedYear, 10)}
          />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Whiteness</h2>
          <TableWhiteness
            ref={whitenessRef}
            month={getMonthNumber(activeMonth)}
            year={parseInt(selectedYear, 10)}
          />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Bau</h2>
          <TableBau 
            ref={bauRef} 
            month={getMonthNumber(activeMonth)} 
            year={parseInt(selectedYear, 10)} 
          />
        </div>
      </div>
    </main>
  );
};

export default FormRekapLab;