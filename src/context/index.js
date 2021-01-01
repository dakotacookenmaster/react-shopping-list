import React, {createContext, useState, useEffect} from "react"
import data from "../data/data.json"

const Context = createContext()

const ContextProvider = (props) => {
    const [items, setItems] = useState([])
    const [nextId, setNextId] = useState(5)

    /* Pull in our data when the provider is loaded */
    useEffect(() => {
        // Mimics our fetch request to an API
        setItems(data)
    }, [])

    const addItem = (item) => {
        setItems(prevItems => {
            return [
                ...prevItems,
                item
            ]
        })
        setNextId(prevNextId => prevNextId + 1)
    }

    const updateItem = (item) => {
        console.log(item)
        const newItems = items.map(i => {
            if(i.id === item.id) {
                return item
            }
            return i
        })
        setItems(newItems)
    }

    const removeItem = (id) => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)
    }
    
    const getNextId = () => {
        return nextId
    }

    return (
        <Context.Provider value={{items, addItem, removeItem, updateItem, getNextId}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
