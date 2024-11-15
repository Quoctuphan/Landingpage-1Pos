'use client'
import { useEffect, useState } from "react"

export  const useWindowWith = () => {
    //get with from window
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=> {
        const handlerResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handlerResize)
        //Remote
        return () => window.removeEventListener('resize', handlerResize)
    }, [])
    return width
}