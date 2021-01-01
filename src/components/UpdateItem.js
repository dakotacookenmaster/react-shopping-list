import React, {useState, useContext, useEffect} from "react"
import Header from "./Header"
import {Context} from "../context"
import {useHistory, useParams} from "react-router-dom"

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

const UpdateItem = (props) => {
    const history = useHistory()
    const {items, updateItem}= useContext(Context)
    const params = useParams()
    const id = parseInt(params.id)
    const [item, setItem] = useState({name: "", description: "", id: ""})

    useEffect(() => {
        console.log(id)
        console.log(items)
        let oldItem = items.find(i => i.id === id)
        console.log(oldItem)
        if(oldItem) {
            setItem(oldItem)
        }
    }, [items, id])

    const update = (event) => {
        event.preventDefault()
        updateItem(item)
        history.push("/") // Sends us back to the homepage after submit!
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
            <Header title="Update Item" links={LINKS}/>
            <div className="mb-3">
                <form onSubmit={update}>
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
                    <button className="btn btn-primary">Update Item!</button>
                </form>
            </div>
        </>
    )
}

export default UpdateItem