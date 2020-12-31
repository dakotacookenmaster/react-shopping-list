import React, {useState, useContext} from "react"
import Header from "./Header"
import {Context} from "../context"
import {useHistory} from "react-router-dom"

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

const AddItem = (props) => {
    const history = useHistory()
    const {addItem} = useContext(Context)
    const [id, setId] = useState(5)
    const [item, setItem] = useState({
        name: "",
        description: "",
        id: id,
    })

    const add = (event) => {
        event.preventDefault()
        addItem(item)
        updateId()
        history.push("/") // Sends us back to the homepage after submit!
    }

    const updateId = () => {
        setId(prevId => prevId + 1)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setItem(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
    }
    
    return (
        <>
            <Header title="Add Item" links={LINKS}/>
            <div className="mb-3">
                <form onSubmit={add}>
                    <label className="form-label">
                        Name:
                        <br />
                        <input 
                            name="name" 
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            value={item.name}
                        />
                    </label>
                    <br />
                    <label className="form-label">
                        Description:
                        <br />
                        <textarea 
                            name="description"
                            className="form-control" 
                            onChange={handleChange}
                            value={item.description}
                        />
                    </label>
                    <br />
                    <button className="btn btn-primary">Add Item!</button>
                </form>
            </div>
            
        </>
    )
}

export default AddItem