
import Casual from "./components/Menu/Casual";
export default function Promotion() {
    return (
        <div className="ss:p-6 lg:mt-80 container">
            <section className=" flex flex-wrap justify-center pt-[30px] w-full">
                <div className="text-center  mt-6 lg:mt-20 mb-7">
                    <h2 className="text-blue-600 text-2xl lg:text-5xl mb-6 font-bold">CHƯƠNG TRÌNH KHUYẾN MÃI HẤP DẪN</h2>
                    <span className="text-gray-500 text-base lg:text-xl font-medium">Dự kiến áp dụng từ 23/05/2024 đến 23/09/2024</span>
                </div>
                   <Casual/>
            </section>
        </div>
     );
}
