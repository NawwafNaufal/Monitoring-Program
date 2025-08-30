import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiInboxUnarchiveLine } from "react-icons/ri";

const CardBarangKeluar = () => {
  const [totalBarangKeluar, setTotalBarangKeluar] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/TotalBarangKeluar')
      .then(response => {
        console.log("Respons API Barang Keluar:", response.data); 
        
        if (response.data.data && response.data.data[0]["COUNT(id_produk)"] !== undefined) {
          setTotalBarangKeluar(response.data.data[0]["COUNT(id_produk)"]);
        }
      })
      .catch(error => {
        console.error("Error fetching data Barang Keluar:", error);
      });
  }, []);

  return (
    <main className="p-4 bg-zinc-900 rounded-xl max-w-xs w-full mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <div className="icon bg-red-500 rounded-full p-3 flex-shrink-0">
          <RiInboxUnarchiveLine className="text-3xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-base text-zinc-400 md:text-lg">
            Barang Keluar
          </div>
          <div className="font-extrabold text-zinc-100 text-xl md:text-2xl">
            {totalBarangKeluar}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardBarangKeluar;
