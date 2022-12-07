import React from "react";
import "./forms.css";

export default function input(props) {
    const { children, type } = props
    return (<input className="input"
                   type={type}
                   placeholder={children}>
    </input>)
}
