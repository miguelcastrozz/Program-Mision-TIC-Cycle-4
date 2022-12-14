import React from "react";
import "../../sytlesheets/card.css"

export default function Card({ children, padding, flexDirection, borderRadius }) {
    return (
        <div style={{ padding, flexDirection, borderRadius }}
             className="card">
            {children} </div>)
}
