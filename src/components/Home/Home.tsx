import React from 'react';
// TODO: Add Bootstrap here

export const Home = (props:any) => {
    // return needed for valid react code
    return (
        <div>
            <h1>Hello World From React!</h1>
            <h4> { props.title } </h4>
        </div>
    )
}