const FooterCard = ({text, src})=>{
     return(
          <div className="flex flex-row items-center gap-1 ">
               <p className="text-yellow-400 text-[1.2rem]">{src}</p>
               <p className="cursor-pointer">{text}</p>
          </div>
     );
}

export default FooterCard;