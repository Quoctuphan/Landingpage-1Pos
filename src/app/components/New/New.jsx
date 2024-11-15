import NewItem from "./NewItem/NewItem";

export default function New(){
    const data = [
        {title:"new1", src:"/image/new1.png",   
        title1:"Giải pháp Quản lý Bán hàng Hoàn hảo với MobiFone 1POS", des: "Trong quá trình chuyển đổi số, hẳn là rất nhiều doanh nghiệp băn khoăn đặt câu hỏi làm sao để triển khai thành công khi đối mặt với các rào cản về mô hình",
        },
        {title:"new2", src:"/image/new2.png",
        title1:"1POS – “Đột phá” Công Nghệ Quản Lý Bán Hàng, Giải Phóng Tiềm Năng Kinh Doanh Của Bạn!", des: "Trong môi trường kinh doanh hiện đại, việc xuất hóa đơn điện tử đã trở thành một tiêu chuẩn. Với 1POS, bạn sẽ dễ dàng xuất hóa đơn một cách chuẩn xác và nhanh chóng nhờ tích hợp sẵn MobiFone Invoice. Không chỉ giúp tiết kiệm thời gian, 1POS còn giúp bạn giảm thiểu chi phí và tránh những sai sót không đáng có.",
        },
        {title:"new1", src:"/image/new1.png",
        title1:"Giải pháp Quản lý Bán hàng Hoàn hảo với MobiFone 1POS", des: "Trong quá trình chuyển đổi số, hẳn là rất nhiều doanh nghiệp băn khoăn đặt câu hỏi làm sao để triển khai thành công khi đối mặt với các rào cản về mô hình",
        },
    ]
    return(
        <section className="container text-center mt-20 pt-20">
            <div className="text-center space-y-5 mb-11">
                <h2 className="text-2xl -text--primary font-medium">PHẦN MỀM QUẢN LÝ BÁN HÀNG 1POS</h2>
                <h1 className="text-5xl -text--title font-semibold">TIN TỨC NỔI BẬT CỦA 1POS</h1>
            </div>
            <div className="grid ss:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(item => {
                        return(
                            <NewItem title={item.title} src={item.src} title1={item.title1} des={item.des}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
