import React from "react";
import { MovieContext } from "../App";

export const Visitors = () => {
    const visitors  = React.useContext(MovieContext);

    return (
        <div>
        <h3>Visitors on the site</h3>
        <ul>
            {visitors.map((visitor, i) => (
                <li key={i}>{visitor.name} {visitor.surname}</li>
            ))}
        </ul>
    </div>
    );
};