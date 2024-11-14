import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const TableProdukUji = forwardRef(({ month, year }, ref) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data for:', { month, year });
        const response = await axios.get("http://localhost:3000/Bau");
        console.log('Raw API response:', response.data);
        
        if (response.data && response.data.data) {
          const filteredData = response.data.data.filter(item => 
            parseInt(item.bulan) === month && parseInt(item.tahun) === year
          );
          console.log('Filtered data:', filteredData);
          setData(filteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, [month, year]);

  useImperativeHandle(ref, () => ({
    getData: () => data
  }));

  const getMonthFromNumber = (monthNumber) => {
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return monthNames[monthNumber - 1];
  };

  return (
    <div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th colSpan="7" className="border border-zinc-100">
              Produk Yang DiUji ({data.length > 0 && `${getMonthFromNumber(month)} ${year}`})
            </th>
          </tr>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <td className="border border-zinc-100 font-bold">ML</td>
            <td className="border border-zinc-100 font-bold">KRS</td>
            <td className="border border-zinc-100 font-bold">KNR</td>
            <td className="border border-zinc-100 font-bold">KPS</td>
            <td className="border border-zinc-100 font-bold">COKL</td>
            <td className="border border-zinc-100 font-bold">KD</td>
            <td className="border border-zinc-100 font-bold">LAINYA</td>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {data.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">Data tidak ditemukan</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr className="border-b border-zinc-600" key={index}>
                <td className="px-2 py-3">{item.ML}</td>
                <td className="px-2 py-3">{item.KRS}</td>
                <td className="px-2 py-3">{item.KNR}</td>
                <td className="px-2 py-3">{item.KPS}</td>
                <td className="px-2 py-3">{item.COKL}</td>
                <td className="px-2 py-3">{item.KD}</td>
                <td className="px-2 py-3">{item.LAINYA}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
});

TableProdukUji.displayName = "TableProdukUji";

TableProdukUji.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default TableProdukUji;