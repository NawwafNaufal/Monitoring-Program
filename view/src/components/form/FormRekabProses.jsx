import { useState } from "react";
import RekapBulanan from "../../tabs/RekapBulanan";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

const FormRekapProses = () => {
  const [activeMonth, setActiveMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

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

  const handleMonthChange = (month) => setActiveMonth(month);
  const handleYearChange = (event) => setSelectedYear(event.target.value);

  const handleExportToExcel = () => {
    // Logika ekspor ke Excel, misalnya dengan file-saver atau XLSX
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

  return (
    <main className="p-4 bg-zinc-900 rounded-lg">
      <ToastContainer />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-zinc-100 font-serif">
          Rekap Proses Ketidaksesuaian
        </h1>
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={handleExportToExcel}
            className="flex item-center bg-green-500 text-white font-bold px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200">
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

      <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
        <RekapBulanan month={activeMonth} year={selectedYear} />
      </div>
    </main>
  );
};

export default FormRekapProses;