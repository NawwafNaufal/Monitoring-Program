import TableProduk from "../../components/table/TableProduk";

const AddProduk = () => {
  return (
    <main className="p-4">
       <div className=" flex justify-start items-center p-2 mb-4 ">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Add Product
        </div>
        </div>
      <div className="bg-zinc-900 rounded-lg">
        <TableProduk />
      </div>
      <div className="">
      </div>
    </main>
  );
};

export default AddProduk;
