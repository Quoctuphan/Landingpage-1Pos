import Image from "next/image";

function MenuItem() {
    return ( 
        <div className="w-full hover-children group flex flex-col items-center border-[1px] rounded-lg p-4 space-y-3  hover:-bg--title  bg-white/80">

            <Image alt="icon-logo" src={'./image/1POS_Logo_BLUE-2.svg'} className="hidden" width={100} height={100}/>
            <Image alt="icon-logo" src={'./image/Logo-blue.svg'}  width={100} height={100}/>
            <span   className="-text--title text-center font-semibold ss:text-xl group-hover:text-white">Gói quản lý bán hàng 6 tháng</span>
            <p className="-text--title text-xl text-center group-hover:text-white">Không giới hạn người dùng không giới hạn tính năng</p>
            <div className="flex flex-col">
                <div className="mt-5 space-y-3">
                  
                    <span className="-text--primary text-4xl font-medium inline-flex items-end group-hover:text-white">720.000 <p className="-text--primary text-base font-medium group-hover:text-white">đ / 6 tháng</p></span>
                
                    <p className="-text--title font-medium group-hover:text-white">Áp dụng cho các cửa hàng thứ 2 trở đi</p>
                    <span className="-text--primary text-4xl font-medium inline-flex items-end group-hover:text-white">660.000<p className="-text--primary text-base font-medium group-hover:text-white">đ / 6 tháng</p></span>
                </div>
                <button className="mt-10 py-3 px-4 -bg--title/90 group-hover:text-black group-hover:bg-white text-white font-semibold text-2xl rounded-xl ">
                    Đăng ký ngay
                </button>
            </div>
        </div>
     );
}

export default MenuItem;