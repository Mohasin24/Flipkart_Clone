
const ListSec = ({title, Obj})=>{
     return(
          <div>
          <p className="text-[#878787] font-semibold pb-2">{title}</p>

          <ul>
               {
                    Obj.map(({id, text})=>(
                         <li 
                         key={id}
                         className="hover:underline cursor-pointer pb-[0.3rem] whitespace-nowrap"
                         >
                              {text}
                         </li>
                    ))
               }
          </ul>
     </div>
     );
}

export default ListSec;