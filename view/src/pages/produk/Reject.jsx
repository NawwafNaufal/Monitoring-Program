import CardStokSecond from "../../components/card/CardStokSecond";
import TableBarangKembali from "../../components/table/TableBarangKembali";

const Reject = () => {
  return (
    <main className="p-4">
      <div className=" flex justify-between items-center mb-4 ">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Barang Kembali
        </div>
        <div className="total-stok w-1/6">
          <CardStokSecond />
        </div>
      </div>
      <div className="bg-zinc-900 rounded-lg">
        <TableBarangKembali />
      </div>
    </main>
  );
};

export default Reject;
