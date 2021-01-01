import React from "react"
import {Link} from "react-router-dom"

const Header = (props) => {
    // [{
    //     name: "Home",
    //     path: "/"
    // }]
    const links = props.links.map(link => {
        return (
            <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
        )
    })

    return (
        <header>
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        </header>
    )
}

export default Header