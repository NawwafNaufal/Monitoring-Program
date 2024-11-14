import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [barangKeluar, setBarangKeluar] = useState(0);
  const [barangMasuk, setBarangMasuk] = useState(0);
  const [barangKembali, setBarangKembali] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/TotalBarangKeluar')
      .then(response => {
        if (response.data.data && response.data.data[0]["COUNT(id_produk)"] !== undefined) {
          setBarangKeluar(response.data.data[0]["COUNT(id_produk)"]);
        }
      })
      .catch(error => {
        console.error("Error fetching Barang Keluar:", error);
      });

    axios.get('http://localhost:3000/TotalBarangMasuk')
      .then(response => {
        if (response.data.data && response.data.data[0]["COUNT(id_produk)"] !== undefined) {
          setBarangMasuk(response.data.data[0]["COUNT(id_produk)"]);
        }
      })
      .catch(error => {
        console.error("Error fetching Barang Masuk:", error);
      });

    axios.get('http://localhost:3000/Diagram')
      .then(response => {
        if (response.data.data && response.data.data[0]["COUNT(id_produk)"] !== undefined) {
          setBarangKembali(response.data.data[0]["COUNT(id_produk)"]);
        }
      })
      .catch(error => {
        console.error("Error fetching Barang Kembali:", error);
      });
  }, []);

  const data = {
    labels: ["Barang Keluar", "Barang Masuk", "Barang Kembali"],
    datasets: [
      {
        label: "Jumlah Barang",
        data: [barangKeluar, barangMasuk, barangKembali],
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
      },
      y: {
        beginAtZero: true,
        min: 0,  // Minimum value for y-axis
        max: 200, // Maximum value for y-axis
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-96 p-4 bg-transparent">
      <div className="w-full h-full max-w-4xl">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
