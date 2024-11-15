'use client'
import Image from "next/image"
import usePosisionElement from "@/hook/usePosisionElement"
import useWindownHeight from "@/hook/useWindownHeight"
import { useEffect, useState } from "react"


export default function Banner(){
    const positionElement = usePosisionElement('.my-position')
    const top = positionElement
    const height = useWindownHeight()
    console.log("haha",top.top)
 
    console.log("with",height)
    return (
        <div className="absolute top-0 left-0 h-[1000px] sm:w-full bg-[url('/image/bg-banner.png')] bg-cover">
            <div className="-bg--primary/70 h-full ">
                <div className="px-2 lg:mx-60  pt-44  ">
                        <h1 className="text-7xl text-center text-white font-semibold my-4">
                            Giải pháp Quản lý bán hàng toàn diện
                        </h1>
                    <div className="mb-5">
                        <p className="text-xl text-center p-2 text-white font-medium">MobiFone cung cấp giải pháp tiện lợi, toàn diện giúp bạn quản lý dễ dàng, bán hàng hiệu quả hơn với 1POS.</p>
                    </div>
                    <div className="flex sm:justify-center  h-fit ">
                        <ul className="inline-flex flex-wrap ss:flex-col ss:items-center ss:w-full justify-center lg:items-center space-y-4 md:space-y-0  h-fit gap-4">
                            <li><a className="py-3 px-6 bg-white/10 font-medium text-xl bg-white rounded-3xl border-solid border-white border-2 hover:-text--primary/90" href="/">Dùng thử miễn phí</a></li>
                            <li><a className="py-3 px-6 bg-white/10 font-medium text-xl rounded-3xl text-white border-solid border-white/20 border-[1px] hover:bg-white/20 " href="/">Liên hệ tư vấn</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="w-full flex  justify-center px-4 h-fit pt-14">
                <div className=" my-position  relative w-[300px]  lg:w-[1350px]  ">
                    {/*  ${(width <= top/3) ? "rotate-x-20" : (width <= (top/3) * 2 ? "rotate-x-10" : "rotate-x-0")  } */}
                        <Image className={` filler my-position ${height <= top.top/3 ? "rotate-x-20" : height <= (top.top / 3) * 2 ? "rotate-x-10" : "rotate-x-0" }  items-center h-[400px]  lg:h-auto  transition-transform ease-linear  `} alt="Ipad"  src={"/image/imgIpad.png"} width={1350} height={50}/>
                </div>
                </div>
            </div>

        </div>
    )
}