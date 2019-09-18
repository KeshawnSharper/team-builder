import React from "react";


 const Member = props => {
    
    return (
        <div>
        {props.user.map(user => (
        <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.Experience}</p>
        <p>{user.role}</p>
        </div>))
        }
        </div>
    )
}

export default Member

