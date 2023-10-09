import React from "react";
import Card from "./Card";


export const CardList = ({ r2d2 }) => {
    return (
        <div>
            {r2d2.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={r2d2[i].id}
                        name={r2d2[i].name}
                        email={r2d2[i].email}
                    />);
            }
            )};
        </div>
    )
}

export default CardList;
