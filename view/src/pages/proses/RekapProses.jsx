import { useState } from "react";
import FormRekapProses from "../../components/form/FormRekabProses";
import RekapHarian from "../../tabs/RekapHarian";

const RekapProses = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <main className="p-4 min-h-screen">
      <div className="p-6 bg-zinc-900 shadow-lg rounded-lg mx-auto">
        {/* Tab Navigasi */}
        <div className="flex border-b border-gray-600 mb-4">
          <button
            onClick={() => setActiveTab("daily")}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-300 ${
              activeTab === "daily"
                ? "text-zinc-100 bg-zinc-600 border-b-4 border-zinc-400 rounded-t-lg"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-500 rounded-t-lg"
            }`}>
            Rekap Harian
          </button>
          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-300 ${
              activeTab === "monthly"
                ? "text-zinc-100 bg-zinc-600 border-b-4 border-zinc-400 rounded-t-lg"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-500 rounded-t-lg"
            }`}>
            Rekap Bulanan
          </button>
        </div>

        {/* Konten Tab */}
        <div className="mt-4">
          {activeTab === "monthly" ? <FormRekapProses /> : <RekapHarian />}
        </div>
      </div>
    </main>
  );
};

export default RekapProses;