'use client'
import { useWindowWith } from "@/hook/useWindownWhith";
import Image from "next/image";
import CasualItem from "./Casual";
export default function SupportCustomer(){
    const width = useWindowWith()
    return (
        <section className="container w-full pt-[100px] lg:mt-40">
             <div>
                <div className="text-center space-y-5">
                    <p className="text-2xl -text--primary font-medium">LIÊN HỆ 24/7</p>
                    <h1 className="text-5xl -text--title font-semibold" >Hỗ Trợ Khách Hàng</h1>
                    <p className="text-blue-700 text-xl font-normal">1POS là giải pháp quản lý bán hàng toàn diện do MobiFone phát triển, mang lại nhiều lợi ích cho doanh nghiệp vừa và nhỏ cũng như hộ kinh doanh cá nhân.</p>
                </div>
                {/*  */}
                <div className={`grid ${width >= 1020 ? "grid-cols-2": "grid-cols-1" } row-span-1 gap-4 h-fit mt-14 `}>
                    <div className="w-full h-full">
                         <Image quality={100} alt="Support Customer" src={"/image/sp_customer.png"} width={538} height={600}/>
                    </div>
                    <div className="flex flex-col p-4 justify-center w-full">
                        <div className={`h-fit w-full  ${width > 480 ? "space-y-14": "space-y-7"}`}>
                            <div className="flex group p-4  justify-start space-x-3  bg-white hover-bg-blue  rounded-md border-[1px] border-solid border-white ">
                                <img className="size-6" src="/image/icon_call.svg" alt="icon_call" />
                                <div>
                                    <p className=" group-hover:text-white text-2xl ss:text-lg font-medium ">Tổng dài kỹ thuật</p>
                                </div>
                            </div>
                            <div className="flex p-4 group justify-start space-x-3  bg-white hover-bg-blue  rounded-md border-[1px] border-solid border-white ">
                                    <img className="size-6" src="/image/icom_support.svg" alt="icon_support" />
                                <div>
                                    <p className="group-hover:text-white text-2xl ss:text-lg font-medium ">Chăm sóc khách hàng</p>
                                </div>
                            </div>
                            <div className="flex p-4 group justify-start space-x-3  bg-white hover-bg-blue  rounded-md border-[1px] border-solid border-white ">
                                    <img className="size-6" src="/image/icon_doc.svg" alt="icon_doc" />
                                <div>
                                    <p className="group-hover:text-white text-2xl ss:text-lg font-medium ">Tài liệu hướng dẫn</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>    
                </div>  
             </div>
             {/* Đánh giá khách hàng */}
             <div className="w-full h-fit bg-[url('/image/bg-tes.jpg')] bg-cover">
                <div className={`w-full bg-[url('/image/bg-customer.png')]  bg-cover md:p-36`}>
                        <div className="text-white space-y-5 text-center">
                            <h2 className="text-5xl font-sans font-semibold">Đánh giá của khách hàng</h2>
                            <p className="text-2xl font-sans ">Những doanh nghiệp thành công đều đồng tình: hệ thống 1POS này giúp họ quản lý bán hàng dễ dàng hơn, nâng cao hiệu suất và tiết kiệm thời gian!</p>
                        </div>
                        <div className="pt-24 text-white">
                                <CasualItem/>
                        </div>
                </div>
             </div>
        </section>
    )
}