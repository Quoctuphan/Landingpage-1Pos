import Image from "next/image"
import Link from "next/link"
export default function NewItem({title, src, title1, des}){
    console.log(title)
    return(
        <>
        <div className="flex flex-col w-full h-[600px] space-y-6">
            <div className="overflow-hidden w-full h-2/3">
                <Image className="w-full h-full hover:rotate-6 hover:scale-125   transition-transform duration-300" width={1000} height={1000} alt={title} src={src}/>
            </div>

             <div  className="w-full space-y-3 pt-2">
                <h3 className="line-clamp-2 text-3xl text-center font-semibold ">{title1}</h3>
                <p className="line-clamp-3 text-justify text-gray-700 font-medium text-xl">{des}</p>
            </div>
            <div className="flex justify-start">
            <Link className="  hover-bg-blue  pt-2 text-left bg-white -text--primary text-xl border-solid hover:text-white -border--primary border-[1px] rounded-3xl py-2 px-6" href='#'>Xem chi tiết</Link>
            </div>
           
        </div>
        </>
    )
    }