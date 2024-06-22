import React from "react";

// function Greet() {
//     return <h1>Hello World</h1>;
// }

export const Greet = ({name,children}) =>
{
return (
    <div>
        <h1>Hello {name}</h1>
        <p> {children}</p>
    </div>
)
};

// export default Greet;