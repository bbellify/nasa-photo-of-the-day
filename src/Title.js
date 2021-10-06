import React, { useState } from "react";
import "./App.css";

export default function Title(props){
    const { title } = props;
    return (
        <h2>{title}</h2>
    )        
}