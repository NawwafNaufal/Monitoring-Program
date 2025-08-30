import CardStokSecond from "../../components/card/CardStokSecond";
import TableBarangKeluar from "../../components/table/TableBarangKeluar";
const Outgoing = () => {
  return (
    <main className="p-4">
      <div className=" flex justify-between items-center mb-4">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Barang Keluar
        </div>
        <div className="total-stok w-1/6">
          <CardStokSecond />
        </div>
      </div>
      <div className="bg-zinc-900 rounded-lg">
        <TableBarangKeluar />
      </div>
    </main>
  );
};

export default Outgoing;
