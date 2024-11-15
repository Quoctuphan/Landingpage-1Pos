import Image from "next/image"

export default function Footer(){
   return (
    <section className="bg-[url('/image/bg-footer.png')] px-0 bg-cover w-full">
       <div className=" p-20 grid grid-rows-1 md:grid-cols-5 gap-2 -bg--primary/30">
            <div className="w-4/6 h-[32px]">
             <img className="w-auto h-auto"  alt="logo_1pos" src="/image/1POS_Logo-15.png"/>
            </div>
            <div className="flex flex-col space-y-4 text-white mt-4">
                <h2 className="text-2xl font-medium">Contact Us</h2>
                <div className="text-base pt-2 flex space-y-4 flex-col">
                        <div><p>Toà Thái Nam, 22D Dương Đình Nghệ, Yên Hòa, Cầu Giấy, Hà Nội.</p></div>
                        <div><p>contact-itc@mobifone.vn</p></div>
                        <div><p>0936.110.116</p></div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 text-white mt-4">
                <h2 className="text-2xl font-medium">Về chúng tôi</h2>
                <div className="text-base pt-2 flex space-y-4 flex-col">
                        <div><p>Tính năng</p></div>
                        <div><p>Giải pháp</p></div>
                        <div><p>Dịch vụ</p></div>
                        <div><p>Cộng đồng</p></div>
                        <div><p>Biểu phí</p></div>
                        <div><p>Hỗ trợ</p></div>

                </div>
            </div>
            <div className="flex flex-col space-y-4 text-white mt-4">
                <h2 className="text-2xl font-medium">Sản phẩm</h2>
                <div className="text-base pt-2 flex space-y-4 flex-col">
                        <div><p>Điều khoản sử dụng</p></div>
                        <div><p>Chính sách bảo mật</p></div>
                        <div><p>Chính sách bảo vệ thông tin của DN</p></div>
                        <div><p>Giỏ hàng</p></div>

                </div>
            </div>
            <div className="flex flex-col space-y-4 text-white mt-4">
                <h2 className="text-2xl font-medium">Đăng ký nhận tin</h2>
                <div className="text-base pt-2 flex space-y-4 flex-col">
                        <input className="rounded-lg h-11" type="text" />
                        <button className="mt-10   py-2 px-3 -bg--title/90 hover:-bg--title/70  text-white font-semibold text-xl rounded-xl ">
                                Đăng ký ngay
                            </button>
                </div>
                <div className="text-white mt-4 pt-8 space-y-5">
                    <h3 className="text-2xl font-medium ">Follow us</h3>
                    <div className="flex items-center gap-4">
                    <img className="w-[32px] h-auto" src="/image/fb.svg" alt="icon-fb" />
                    <img className="w-[32px] h-auto" src="/image/telegram.png" alt="icon-fb" />
                    <img className="w-[32px] h-auto" src="/image/intagram.svg" alt="icon-fb" />
                    <img className="w-[32px] h-auto" src="/image/social.svg" alt="icon-fb" />
    
                    </div>
                </div>
            </div>
       </div>
    </section>
   ) 
}