import React from "react";
import "./App.css";

export default function Explanation(props) {
    const { explanation } = props;
    return (
        <p>{explanation}</p>
    )
}