import React, {createContext, useState, useEffect} from "react"
import data from "../data/data.json"

const Context = createContext()

const ContextProvider = (props) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    /* Pull in our data when the provider is loaded */
    useEffect(() => {
        // Mimics our fetch request to an API
        setIsLoading(true)
        setTimeout(() => {
            setItems(data)
            setIsLoading(false)
        }, 2000)
    }, [])

    const addItem = (item) => {
        setItems(prevItems => {
            return [
                ...prevItems,
                item
            ]
        })
    }

    const removeItem = (id) => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)
    }

    return (
        <Context.Provider value={{items, isLoading, addItem, removeItem}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
