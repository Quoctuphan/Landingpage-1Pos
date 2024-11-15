'use client'
import Image from "next/image";
import { useState } from "react";

export default function Section1() {

    const bank = [
        {id: 1, name:"/image/acbpng.png"},
        {id: 2, name:"/image/BHS.png"},
        {id: 3, name:"/image/mh.png"},
        {id: 4, name:"/image/mbi.png"},
        {id: 5, name:"/image/now.png"},
        {id: 6, name:"/image/van.png"},
    ]
    const category = [
        {id: 1, name:"/image/dashboard.svg", title: "Dashboard", content: "Phần này là của Dashboard, nơi bạn có thể quản lý tất cả các sản phẩm, đơn hàng, khách hàng, và nhiều thứ khác."},
        {id: 2, name:"/image/cart.svg", title: "Giỏ hàng", content: "Phần này là của Giỏ hàng, nơi bạn có thể xem và quản lý các sản phẩm mà bạn đã chọn."},
        {id: 3, name:"/image/book.svg", title: "Đơn hàng", content: "Phần này là của Đơn hàng, nơi bạn có thể xem và quản lý các đơn hàng mà bạn đã đặt."},
        {id: 4, name:"/image/bepsvg.svg", title: "Bếp", content: "Phần này là của Bếp, nơi bạn có thể xem và quản lý các sản phẩm mà bạn đã chọn."},
        {id: 5, name:"/image/monny.svg", title: "Hoàn trả", content: "Phần này là của Hoàn trả, nơi bạn có thể hoàn trả sản phẩm nếu không hài lòng."},
        {id: 6, name:"/image/calender.svg", title: "Lịch sử phiên", content: "Phần này là của Lịch sử phiên, nơi bạn có thể xem và quản lý các phiên mà bạn đã tham gia."},
    ]
    const [title,setTitle] = useState("Dashboard")
    const [paragraph,setparagraph] = useState("Phần này là của Dashboard, nơi bạn có thể quản lý tất cả các sản phẩm, đơn hàng, khách hàng, và nhiều thứ khác.")
    const handlerOnclick = (item) => {
            setTitle(item.title)
            console.log(item.title)
            setparagraph(item.content)
            alert(title)
    }
    return ( 
        <div className="container ss:p-6 lg:mt-60">
            <section className="flex flex-wrap justify-center pt-[1200px] w-full">
                <div className="flex flex-col w-full pt-10 lg:pt-10 space-y-3">
                        <h1 className="text-center text-lg lg:text-2xl font-semibold -text--primary">VỚI HƠN 10.000 KHÁCH HÀNG SỬ DỤNG DỊCH VỤ CỦA CHÚNG TÔI</h1>
                        <div className="flex flex-wrap gap-4 justify-center md:pt-5">
                            {
                                bank.map((item) => {
                                    return(
                                        <div key={item.id} className="">
                                            <Image alt={item.id} src={item.name} width={100} height={100} className="w-[45px] h-[33px] md:w-[100px] md:h-[70px] rounded-3xl shadow-md"/>
                                        </div>
                                    )
                                    })
                            }
                        </div>
                </div>


                        <div className="flex flex-col w-full">

                            <div className="text-center space-y-2 mt-6 lg:mt-20">
                                <span className="-text--primary text-base lg:text-xl font-medium">PHẦN MỀM QUẢN LÝ BÁN HÀNG 1POS</span>
                                <h2 className="text-blue-600 text-2xl lg:text-3xl font-bold">TÍNH NĂNG SẢN PHẨM</h2>
                            </div>
                                {/* contain product and image */}
                            <div className="md:grid md:gap-8 lg:gap-20 grid-cols-2 w-min-[1000px]  md:mt-9 ">
        
                                {/* 2 image */}
                                <div className="ss:hidden relative md:flex md:items-center justify-center  lg:mr-12">
                        
                                        <img alt="" src={"/image/image.png"} className="absolute top-10 right-10 filler md: w-max-[1000px] h-max-[400px]"/>
                                        <img alt="" src={"/image/image.png"} className="absolute top-0 right-0 filler md: w-max-[600px] h-max-[400px]"/>
                                </div>
                                {/* 6 image */}
                                <div className="lg:grid lg:grid-row-2">
                                <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-4 lg:grid-cols-2">
                                        {
                                            category.map((item)=>{
                                                return (
                                                    <button key={item.id} onClick={() => handlerOnclick(item)} className="ml-[4px] flex flex-col items-center bg-white p-3 rounded-lg space-y-2">
                                                            <img src={item.name} alt={item.title}  />
                                                        <p className="text-[#005FAB] text-base font-medium">{item.title}</p>
                                                    </button>
                                                )
                                            })
                                        }
                                </div>
                                {/* --------- */}
                                    <div className="mt-6 md:float-right grid-cols-2">
                                        <h3 className="text-right text-3xl font-medium text-[#005fab]">
                                            {title}
                                        </h3>
                                        <p className="mt-3 text-[#343434] text-justify  md:text-xl">
                                            {paragraph}
                                        </p>
                                    </div>
                                </div>
                              
                                     
                        </div>
                                
                            </div>

            </section>
        </div>
     );
}
