import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsInboxes } from "react-icons/bs";

const CardProduk = () => {
  const [totalProduk, setTotalProduk] = useState(0);

  useEffect(() => {
    // Fetch data dari endpoint
    axios.get('http://localhost:3000/TotalProduct')
      .then(response => {
        // Ambil nilai COUNT(nama_product) dari response.data
        if (response.data.data && response.data.data[0]["COUNT(nama_product)"] !== undefined) {
          setTotalProduk(response.data.data[0]["COUNT(nama_product)"]);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className="p-4 bg-zinc-900 rounded-xl shadow-md max-w-xs w-full mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <div className="icon bg-yellow-500 rounded-full p-3 flex-shrink-0">
          <BsInboxes className="text-3xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-base text-zinc-400 md:text-lg">
            Total Produk
          </div>
          <div className="font-extrabold text-zinc-100 text-xl md:text-2xl">
            {totalProduk}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardProduk;
