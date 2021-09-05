import React from 'react'
import {Link } from 'react-router-dom'

function Team(props) {
    //const {path ,url} = useRouteMatch()
    return (
        <tr>
            <td><Link to={`${props.url}/viewTeam:id`}>{props.id}</Link></td>
            <td><Link to={`${props.url}/viewTeam:id`}>{props.name}</Link></td>
        </tr>
    )
}

export default Team
