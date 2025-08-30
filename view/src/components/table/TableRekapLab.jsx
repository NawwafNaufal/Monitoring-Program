import { forwardRef, useImperativeHandle, useState } from "react";

const TableProdukUji = forwardRef((props, ref) => {
  const [data] = useState([
    { gr: "dd", cm: "p", zero: "g", gr2: "g", cm2: "g", forty: "g" },
    { gr: "dd2", cm: "p2", zero: "g2", gr2: "g2", cm2: "g2", forty: "g2" },
  ]);

  // Menambahkan fungsionalitas getData
  useImperativeHandle(ref, () => ({
    getData: () => {
      return data;
    },
  }));

  return (
    <div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th colSpan="6" className="border border-zinc-100">
              Produk Yang DiUji
            </th>
          </tr>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <td className="border border-zinc-100 font-bold">ML</td>
            <td className="border border-zinc-100 font-bold">KRS</td>
            <td className="border border-zinc-100 font-bold">KNR</td>
            <td className="border border-zinc-100 font-bold">KPS</td>
            <td className="border border-zinc-100 font-bold">COKL</td>
            <td className="border border-zinc-100 font-bold">KD</td>
            <td className="border border-zinc-100 font-bold">LAINYA</td>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {data.map((item, index) => (
            <tr className="border-b border-zinc-600" key={index}>
              <td>{item.gr}</td>
              <td className="px-2 py-3">{item.cm}</td>
              <td className="px-2 py-3">{item.zero}</td>
              <td className="px-2 py-3">{item.gr2}</td>
              <td className="px-2 py-3">{item.cm2}</td>
              <td className="px-2 py-3">{item.forty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

// Menambahkan displayName untuk debugging
TableProdukUji.displayName = "TableProdukUji";

export default TableProdukUji;