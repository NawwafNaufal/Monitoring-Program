import FormRekapLab from "../../components/form/FormRekabLab";
const Rekap = () => {
  return (
    <main className="p-4">
      <div className=" flex justify-start items-center p-2 mb-4 ">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Rekap Lab Bulanan
        </div>
      </div>
      <div>
        <FormRekapLab />
      </div>
    </main>
  );
};

export default Rekap;