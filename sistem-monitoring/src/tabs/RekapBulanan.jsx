import { BsCardList } from "react-icons/bs";
import ModalDetailProsesBulanan from "../components/modal/detail/ModalDetailProsesBulanan";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const RekapBulanan = () => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(null);

  const openDetailModal = (product) => {
    if (product?.id) {
      setSelectedDetailProduct(product);
      setDetailModalOpen(true);
    } else {
      console.error("Product ID is missing");
    }
  };

  const data = [
    {
      id: 1,
      name: "ml (ikan t)",
      receiving: { organoleptik: 7, tdkorg: 7.1, temp: 8.1, tdkemp: 7.1 },
      deboning: { dfish: 5, tdkfish: 7.1 },
      wash: { tpwash: 5, tdkwash: 7.1 },
      meat_spr: { tpspr: 5, tdkmeat: 7.1 },
      leaching: { tdktpl: 7.1, tpl: 4.6 },
      refinery: { tpr: 5, tdktpr: 7.1 },
      mixing: { tpm: 5, tdktpm: 7.1 },
      forming: { mois: 5, tdkform: 7.1 },
      freezing: { tpcf: 5, tpf: 4.6 },
      packing: { mtl: 5, tdkmtl: 7.1 },
      storing: { atr: 5, tdkatr: 7.1 },
      stuffing: { conchek: 5, quality: 4, brok: 6 },
    },
  ];

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
              Jenis Produk
            </th>
            <th colSpan="4" className="border border-zinc-100">
              <span className="text-zinc-100">Receiving</span>
            </th>
            <th colSpan="2" className="border border-zinc-100">
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
              Tidak Kesesuaian
            </td>
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Temp of fish
            </td>
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Tidak Kesesuaian
            </td>
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Temp of fish
            </td>
            <td className="px-2 py-2 border border-zinc-100 font-bold">
              Tidak Kesesuaian
            </td>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {data.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-600">
              <td className="py-3 px-1">{index + 1}</td>
              <td className="px-2 py-3">{item.name}</td>
              <td className="px-2 py-3">{item.receiving.organoleptik}</td>
              <td className="px-2 py-3">{item.receiving.tdkorg}</td>
              <td className="px-2 py-3">{item.receiving.temp}</td>
              <td className="px-2 py-3">{item.receiving.tdkemp}</td>
              <td className="px-2 py-3">{item.deboning.dfish}</td>
              <td className="px-2 py-3">{item.deboning.tdkfish}</td>

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