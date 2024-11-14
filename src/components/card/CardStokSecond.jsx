import { BsBoxes } from "react-icons/bs";

const CardStokSecond = () => {
  return (
    <main className="bg-zinc-900 p-4 rounded-lg">
      <div className="flex items-center gap-2 ">
        <div className="icon bg-blue-500 rounded-full p-2 flex-shrink-0">
          <BsBoxes className="text-2xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg text-zinc-400">
            Total Stok
          </div>
          <div className="font-extrabold text-zinc-100 text-xl">
            8789
          </div>
        </div>
      </div>
    </main>      

  );
};

export default CardStokSecond;
