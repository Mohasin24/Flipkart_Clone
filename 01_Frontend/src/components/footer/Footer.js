import { IoBag } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { aboutObj, consumerObj, helpObj, socialObj, footerImg } from "../../constants/Data";
import ListSec from "./ListSec";
import FooterCard from "./FooterCard";

const Footer = () => {

     const date = new Date().getFullYear()

     return (
          <main className="bg-[#172337] text-white">
               <section className="grid grid-flow-col text-[0.8rem] border-b border-[#454d5e]">
                    <section className="col-span-6 flex flex-row justify-evenly gap-4 py-10 px-14">
                         {/* About */}
                         <ListSec title={"ABOUT"} Obj={aboutObj} />

                         {/* Help */}
                         <ListSec title={"HELP"} Obj={helpObj} />

                         {/* Consumer Policy */}
                         <ListSec title={"CONSUMER POLICY"} Obj={consumerObj} />

                         {/* Social */}
                         <ListSec title={"SOCIAL"} Obj={socialObj} />
                    </section>

                    <section className="col-span-6 flex flex-row justify-evenly gap-5 px-2 py-10">

                         {/* Mail Us */}
                         <div className="h-fit border-l border-[#454d5e] px-5">
                              <p className="text-[#878787] font-semibold pb-2">Mail Us:</p>
                              <p>
                                   Flipkart Internet Private Limited,
                                   Buildings Alyssa, Begonia &
                                   Clove Embassy Tech Village,
                                   Outer Ring Road, Devarabeesanahalli Village,
                                   Bengaluru, 560103,
                                   Karnataka, India
                              </p>
                         </div>

                         {/* Registered Office Address: */}
                         <div className="px-5">
                              <p className="text-[#878787] font-semibold pb-2 ">Registered Office Address:</p>
                              <p>
                                   Flipkart Internet Private Limited,
                                   Buildings Alyssa, Begonia &
                                   Clove Embassy Tech Village,
                                   Outer Ring Road, Devarabeesanahalli Village,
                                   Bengaluru, 560103,
                                   Karnataka, India
                                   CIN : U51109KA2012PTC066107
                                   Telephone: 044-45614700
                              </p>
                         </div>
                    </section>
               </section>

               <section className="flex flex-row justify-evenly text-[0.9rem] py-10">
                    <FooterCard text={"Become a Seller"} src={<IoBag />}/>
                    <FooterCard text={"Advertise"} src={<MdCardGiftcard/>}/>
                    <FooterCard text={"Gift Cards"} src={<FaRegStar/>}/>
                    <FooterCard text={"Help Center"} src={<IoIosHelpCircle/>}/>

                    <p>&copy;2007-{date} Flipkart.com</p>
                    <img src={footerImg} alt="footer_icon"/>
               </section>

          </main>

     );
}

export default Footer;