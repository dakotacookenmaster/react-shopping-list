import React, {useContext, useState} from "react"
import {useHover} from "../hooks/useHover"
import {Context} from "../context"
import {useHistory} from "react-router-dom"

const ListItem = (props) => {
    const [isDeleted, setIsDeleted] = useState(false)
    const {removeItem} = useContext(Context)
    const {hovered, ref} = useHover()
    const history = useHistory()
    const {item} = props

    const remove = () => {
        setIsDeleted(true)
        setTimeout(() => {
            removeItem(item.id)
        }, 500)
    }

    const deleteStyle = {
        color: "maroon",
        cursor: "pointer",
        float: "right"
    }

    const editStyle = {
        cursor: "pointer",
        float: "right"
    }

    return (
        <div className={isDeleted ? "card leaveScreen" : "card"}
            style={{
                width: 400,
                marginLeft: 20,
                marginBottom: 20,
                background: hovered ? "#d3d3d3" : "white"
            }}
            ref={ref}
        >
            <div className="card-body">
                <h5>
                    {item.name}
                    <i 
                    style={deleteStyle} 
                    className="ri-delete-bin-3-fill"
                    onClick={remove}
                    ></i>
                    <i 
                        className="ri-edit-2-fill"
                        style={editStyle}
                        onClick={() => history.push(`/update/${item.id}`)}
                    ></i> 
                </h5>
                <p>{item.description}
                </p>
            </div>
        </div>
    )
}

export default ListItem