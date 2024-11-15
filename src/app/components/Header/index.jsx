'use client'
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react"
export default function Header(){
   const [scrollPosition, setScrollPosition] = useState(0);
   const [isOpen, setIsOpen] = useState(false);
   console.log(isOpen)

   useEffect(() => {
       const checkScrollbar = () => {
          const currentScrollTop = window.scrollY;
          console.log(currentScrollTop)
          setScrollPosition(currentScrollTop)
          if(scrollPosition){
            console.log(currentScrollTop)
          }
       }
       window.addEventListener("scroll", checkScrollbar);

       return () => {
       window.removeEventListener("scroll", checkScrollbar);
       };

   }, [])
   const handlerOnclick = ( ) => {
      setIsOpen(!isOpen)
   }
    return (
        <>  
     {/* Daddy */}
        <header className={`flex justify-center w-full z-40 fixed  ${scrollPosition >= 1? "bg-white/90" : "bg-transparent"} `}>
         <div className="container lg:mx-[10px]">
            <div className={` ${scrollPosition >= 1? "text-black" : "text-white"} w-full text-xl h-fit font-normal -mx-4 flex   px-4 py-2 items-center justify-between sm:w-full  `}>
               {/* //Logo */}
               {
                  scrollPosition >= 1 ? ( <div className="w-32 cursor-pointer lg:w-72 lg:px-4 max-w-full">
                     <Image className="py-2 w-32 h-auto" alt="logo" width={300} height={90} src="./image/Logo-blue.svg"/>
                  </div>) :  (
                  <div className="w-32 cursor-pointer lg:w-72 lg:px-4 max-w-full">
                     <Image className="py-2 w-auto h-auto" alt="logo" width={300} height={90} src="/image/1POS_Logo-15.png"/>
                  </div>
                  )
               }
              
                  
               {/* //Nav */}  
                  <div className={`${!isOpen ? "hidden" : "block" } sm:${isOpen ? "hidden" : "block" }  ${scrollPosition >= 1 ? "text_color" : "text-white"}    lg:block  px-4 mr-2`}>
                     <ul className={` lg:static tbl:flex tbl:flex-col tbl:space-x-0  lg:bg-transparent absolute cursor-pointer tbl:bg-white tbl:text-black  top-12  rounded-md right-0 lg:flex  p-4 space-y-4 lg:space-y-0 w-3/5 lg:w-full h-fit sm:border-solid sm:border-[1px] lg:border-0  md:bg-transparent  md:inline-flex md:space-x-14 whitespace-nowrap`}>
                        <li >Tính Năng</li>
                        <li>Giải pháp</li>
                        <li>Dịch vụ</li>
                        <li>Cộng đồng</li>
                        <li>Bảng giá</li>
                        <li>Hỗ trợ</li>
                        <li>Tin tức</li>
                     </ul>
                  </div>
               {/* //Action     */}
                  <div className=" hidden md:block lg:flex space-x-1 whitespace-nowrap text-xl font-normal ">
                     <a href="/" className={` px-6 py-3 font-medium  rounded-3xl  ${scrollPosition > 1 ? "hover:-bg--primary/80 text-white -bg--primary " : "bg-white/10 text-white  hover:bg-white/20 "}}`}>Đăng nhập</a>
                     <a href="/" className={` px-6 py-3 font-medium  rounded-3xl ${scrollPosition > 1 ? " bg-transparent " : "hover:bg-white/20 bg-white/10 "}`}> Đăng ký</a>
                  </div>
               </div>
                     {/* Menu mobile*/}
                  <div className="flex absolute top-3 right-4 lg:hidden">
                  <button className="justify-center" onClick={handlerOnclick}>
                     {!isOpen ? (<p className="text-black"><MdOutlineMenu size={40}/></p>) : (<p className="text-black"><IoCloseSharp size={40}/></p>)}
                    
                  </button>
               </div>
         </div>
        </header>
        </>
    );
}