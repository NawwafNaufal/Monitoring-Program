import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsBoxes } from "react-icons/bs";

const CardStokTotal = () => {
  const [totalStok, setTotalStok] = useState(0);

  useEffect(() => {
    // Panggil API untuk mendapatkan total stok
    axios.get('http://localhost:3000/TotalStok')
      .then(response => {
        console.log("Respons API Total Stok:", response.data); // Debug respons

        // Misal, nilai total stok berada di response.data.data[0]["COUNT(id_produk)"]
        if (response.data.data && response.data.data[0]["COUNT(id_produk)"] !== undefined) {
          setTotalStok(response.data.data[0]["COUNT(id_produk)"]);
        }
      })
      .catch(error => {
        console.error("Error fetching Total Stok:", error);
      });
  }, []);

  return (
    <main className="p-4 bg-zinc-900 rounded-xl max-w-xs w-full mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <div className="icon bg-blue-500 rounded-full p-3 flex-shrink-0">
          <BsBoxes className="text-3xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-base text-zinc-400 md:text-lg">
            Total Stok
          </div>
          <div className="font-extrabold text-zinc-100 text-xl md:text-2xl">
            {totalStok}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardStokTotal;
