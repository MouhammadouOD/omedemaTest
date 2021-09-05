import React from 'react'

function User(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
        </tr>
    )
}

export default User
