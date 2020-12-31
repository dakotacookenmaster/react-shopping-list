import {useState, useRef, useEffect} from "react"

const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const onHover = (event) => {
        setHovered(true)
    }

    const offHover = (event) => {
        setHovered(false)
    }

    useEffect(() => {
        const current = ref.current
        current.addEventListener("mouseover", onHover)
        current.addEventListener("mouseleave", offHover)
        return () => {
            current.removeEventListener("mouseover", onHover)
            current.removeEventListener("mouseleave", offHover)
        }
    }, [])

    return {hovered, ref}
}

export {useHover}