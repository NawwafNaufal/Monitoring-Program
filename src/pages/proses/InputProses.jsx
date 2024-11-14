import TableInputProses from "../../components/table/TableProses";

const InputProses = () => {
  return (
    <main className="p-4">
      <div className=" flex justify-start items-center p-2 mb-4 ">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Input Proses
        </div>
      </div>
      <div className="bg-zinc-900 rounded-lg">
        <TableInputProses />
      </div>
      <div className=""></div>
    </main>
  );
};

export default InputProses;