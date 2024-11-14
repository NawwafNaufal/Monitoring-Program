import { BsCardList } from "react-icons/bs";
import ModalDetailProsesBulanan from "../components/modal/detail/ModalDetailProsesBulanan";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import axios from "axios";

const RekapBulanan = () => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Prosess');
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const openDetailModal = (product) => {
    if (product?.id) {
      setSelectedDetailProduct(product);
      setDetailModalOpen(true);
    } else {
      console.error("Product ID is missing");
    }
  };

  if (loading) {
    return <div className="text-zinc-100">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-lg text-zinc-100 font-bold mb-4">
        Data Rekap Bulanan
      </h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th rowSpan="2" className="border border-zinc-100">
              No
            </th>
            <th rowSpan="2" className="border border-zinc-100">
              Jam
            </th>
            <th rowSpan="2" className="border border-zinc-100">
              Tanggal
            </th>
            <th rowSpan="2" className="border border-zinc-100">
              Ikan
            </th>
            <th colSpan="3" className="border border-zinc-100">
              <span className="text-zinc-100">Receiving</span>
            </th>
            <th colSpan="1" className="border border-zinc-100">
              <span className="text-zinc-100">Deheading</span>
            </th>
            <th className="px-2 py-2 border border-zinc-100" rowSpan="2">
              Action
            </th>
          </tr>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Organoleptik
            </td>
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Temp of Fish
            </td>
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Reject
            </td>
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Deheading Temp
            </td>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {data.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-600">
              <td className="py-3 px-1">{index + 1}</td>
              <td className="px-2 py-3">{item.jam}</td>
              <td className="px-2 py-3">
                {item.tanggal ? new Date(item.tanggal).toLocaleDateString() : '-'}
              </td>
              <td className="px-2 py-3">{item.id_ikan}</td>
              <td className={`px-2 py-3 ${item.organoleptik_receiving < 8 ? 'bg-red-600' : ''}`}>
                {item.organoleptik_receiving}
              </td>
              <td className="px-2 py-3">{item.temp_of_fish_receiving}</td>
              <td className="px-2 py-3">{item.reject_receiving}</td>
              <td className="px-2 py-3">{item.temp_of_fish_deheading}</td>
              <td className="py-3 px-6">
                <div className="flex items-center justify-center">
                  <button
                    data-tooltip-id="btnTooltip"
                    data-tooltip-content="Detail"
                    onClick={() => openDetailModal(item)}
                    className="text-blue-600 hover:text-blue-200"
                    aria-label="Detail">
                    <BsCardList className="text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Tooltip id="btnTooltip" place="top" type="dark" effect="solid" />

      {selectedDetailProduct && (
        <ModalDetailProsesBulanan
          isOpen={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          product={selectedDetailProduct}
        />
      )}
    </div>
  );
};

export default RekapBulanan;