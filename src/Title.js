import React from "react";
import "./App.css";

export default function Title(props){
    const { title } = props;
    return (
        <h2 className='title'>{title}</h2>
    )
}