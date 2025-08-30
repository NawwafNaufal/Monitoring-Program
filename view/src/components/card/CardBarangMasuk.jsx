import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiInboxArchiveLine } from "react-icons/ri";

const CardBarangMasuk = () => {
  const [totalBarangMasuk, setTotalBarangMasuk] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/TotalBarangMasuk')
      .then(response => {
        console.log("Respons API:", response.data); 
        if (response.data?.data?.[0]?.["COUNT(id_produk)"] !== undefined) {
          setTotalBarangMasuk(response.data.data[0]["COUNT(id_produk)"]);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className="p-4 bg-zinc-900 rounded-xl max-w-xs w-full mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <div className="icon bg-green-500 rounded-full p-3 flex-shrink-0">
          <RiInboxArchiveLine className="text-3xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-base text-zinc-400 md:text-lg">
            Barang Masuk
          </div>
          <div className="font-extrabold text-zinc-100 text-xl md:text-2xl">
  {console.log("Menampilkan totalBarangMasuk:", totalBarangMasuk)}
  {totalBarangMasuk}
</div>
        </div>
      </div>
    </main>
  );
}

export default CardBarangMasuk;
