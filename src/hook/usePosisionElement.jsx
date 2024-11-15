'use client'
import { useEffect, useState } from "react";

export default function usePosisionElement(selector){
        //khởi tạo giá trị lưu trữ vị trí
        const [position, setPosition] = useState({
            top: 0,
            right: 0,
            left: 0,
            bot:  0,
            width: 0,
            height: 0,
        })
        useEffect(() => {
                console.log("gọi hàm")
                // viết hàm xử lý lấy vị trí
              
                    const element = document.querySelector(selector)
                    if(element){
                        const rect = element.getBoundingClientRect();
                        setPosition({top: rect.top, right: rect.right, left: rect.left, bot: rect.bot, width:rect.width, height:rect.height})
                    }
        }, [selector])
        
        return position
}