import React, {useContext} from "react"
import {Context} from "../context"
import {useHover} from "../hooks/useHover"

const ListItem = (props) => {
    const {removeItem} = useContext(Context)
    const {hovered, ref} = useHover()
    const {item} = props
    return (
        <div className="card" 
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
                    style={{
                        color: "maroon",
                        cursor: "pointer",
                        float: "right"
                    }} 
                    class="ri-delete-bin-3-fill"
                    onClick={() => {removeItem(item.id)}}
                    ></i>
                </h5>
                <p>{item.description}
                </p>
            </div>
        </div>
    )
}

export default ListItem