import React from 'react';

const User = (props) => {
    const {data} = props;
    return(
        <>
            <h1>User</h1>
            <h2>{data.name}</h2>
            <h3>{data.age}</h3>
        </>
    )
}

export default User;