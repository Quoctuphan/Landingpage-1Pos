import Image from "next/image";

function Card() {
    return ( 
        <div className=" relative mt-36  group  border-[1px] rounded-lg shadow-sm  h-[500px] w-full bg-white/80">
            <div className="absolute inset-6 group-hover:inset-9 transition-all duration-300 group-hover:-translate-y-[30%] flex flex-col items-center space-y-6">
                <div className="w-full h-[200px] lg:h-[300px]">
                    <Image quality={100} alt="icon-logo" src={'/image/km1.png'} className="h-full w-full " width={1000} height={1000}/>
                </div>
               
                        <span className="-text--title mt-8 text-center font-semibold ss:text-lg lg:text-2xl ">Gói khuyến mại giải pháp Quản lý bán hàng 6 tháng tặng kèm 2 tháng cho cửa hàng đầu tiên</span>
                        <div className="relative w-full">
                        <div className="absolute flex flex-col items-center top-60 group-hover:top-0">
                            <p className="text-gray-600 text-2xl text-center lg:text-3xl w-full">Tặng kèm 6 tháng khi mua gói sử dụng 1 năm.</p>
                                <button className="mt-10  py-2 px-3 -bg--title/90  text-white font-semibold text-xl rounded-xl ">
                                    Xem chi tiết
                                </button>
                        </div>
                </div>
                </div>
            </div>

     );
}

export default Card;