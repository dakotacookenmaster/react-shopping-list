import React, {useContext} from "react"
import {Context} from "../context"
import ListItem from "./ListItem"
import Header from "./Header"

const LINKS = [
    {
        name: "Shopping List",
        path: "/"
    },
    {
        name: "Add Item",
        path: "/create"
    }
]

const ShoppingList = (props) => {

    const {items, isLoading} = useContext(Context)

    const display = () => {
        if(isLoading) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            const listItems = items.map(item => {
                return (
                    <ListItem key={item.id} item={item}/>
                )
            })
            return (
                <>
                    <Header title="Shopping List" links={LINKS}/>
                    {listItems}
                </>
            )
        }
    }

    return (
        display()
    )
}

export default ShoppingList