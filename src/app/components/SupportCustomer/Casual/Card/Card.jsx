export default function CardItem(){
    return(
        <div className="bg-white flex flex-col items-center text-black  w-full p-8 h-fit rounded-xl">
            <div className="flex flex-col justify-center items-center space-y-5 mb-3">
                <img className="size-40 rounded-[50%]"  src="/image/avatar.jpg" alt="" />
                <h1 className="text-3xl font-semibold">Nguyễn Văn A</h1>
            </div>
            <div className="text-center h-fit space-y-7">
                <h2 className="text-2xl text-gray-900 font-light">Co-Founder</h2>
                <p className="text-xl text-gray-600 font-light">Trước đây, việc theo dõi bán hàng khiến tôi mất rất nhiều thời gian và hay mắc sai sót. Từ khi dùng hệ thống 1POS, mọi thứ trở nên tự động và dễ quản lý hơn. Tôi có thể theo dõi doanh thu và quản lý kho một cách nhanh chóng, tiện lợi. Đây chắc chắn là sự đầu tư đáng giá cho cửa hàng của tôi!</p>
            </div>
        </div>
    )
}