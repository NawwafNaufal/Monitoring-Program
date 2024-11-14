import CardProduk from "../components/card/cardProduk";
import CardBarangMasuk from "../components/card/CardBarangMasuk";
import CardBarangKeluar from "../components/card/CardBarangKeluar";
import CardStokTotal from "../components/card/CardStokTotal";
import Chart from "../components/chart/Chart";

const Dashboard = () => {
  return (
    <main className="p-4">
      <div className=" flex justify-start items-center p-2 mb-4 ">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Dashboard
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-4">
        <CardProduk />
        <CardBarangMasuk />
        <CardBarangKeluar />
        <CardStokTotal />
      </div>
      <div className="p-4 bg-zinc-900 rounded-lg">
        <Chart />
      </div>
    </main>
  );
};

export default Dashboard;
