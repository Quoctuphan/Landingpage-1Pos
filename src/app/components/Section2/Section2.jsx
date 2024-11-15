import Menu from "@/app/components/Section2/components/Menu/Menu"
export default function Section2() {
    return ( <>

        <div className="ss:p-6 lg:mt-52 container">
            <section className=" flex flex-wrap justify-center pt-[30px] w-full">
                <div className="text-center space-y-2 mt-6 lg:mt-20 mb-7">
                    <span className="-text--primary text-base lg:text-xl font-medium">PHẦN MỀM QUẢN LÝ BÁN HÀNG 1POS</span>
                    <h2 className="text-blue-600 text-2xl lg:text-3xl font-bold">TỐI ƯU HÓA QUẢN LÝ BÁN HÀNG - GÓI CƯỚC LINH HOẠT CHO MỌI DANH NGHIỆP </h2>
                </div>
                {/* <div className="flex w-fit border-[1px] border-black">
                    <Menu/>
                </div> */}
                   <Menu/>
            </section>
        </div>
        <div className="ss:p-6 lg:mt-60 lg:mb-64">
        <section className=" flex flex-wrap justify-center pt-[30px] w-full">
            <div className="-bg--title text-white md:h-[450px] px-2 py-14 text-center rounded-md space-y-2">
                <h3 className="text-2xl lg:text-4xl font-bold">VÌ SAO CHỌN 1POS MOBIFONE</h3>
                <p className="text-lg lg:text-2xl">Với tính năng quản lý cửa hàng, kho, nhân viên và khách hàng, 1POS tối ưu hóa quy trình bán hàng, tăng năng suất và giảm sai sót. Giao diện thân thiện và khả năng tích hợp linh hoạt giúp người dùng dễ sử dụng. Đặc biệt, 1POS hoạt động ổn định khi không kết nối internet và bảo mật thông tin tốt.</p>
                <div className="flex justify-center">
                    <iframe className="ss:hidden sm:hidden lg:block left-[250px] rounded-md shadow-md" width="1200" height="690" src="https://www.youtube.com/embed/Gzh31w-P5Ws?si=c_KyscE1a8P-3vX7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    </div>
        </>
     );
}
