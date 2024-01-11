const TableRow = ({ title, data, colSpan }) => {
     return (
          <tr className="">
               {!colSpan && <td className="font-semibold text-gray-500 pl-5 align-baseline">{title}</td>}
               <td className="py-4 pl-10 pr-5 align-baseline" colSpan={colSpan}>{data}</td>
          </tr>
     );
}

export default TableRow;