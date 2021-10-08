import React from "react";
// import "./App.css";
import styled from 'styled-components'

const ImageTitle = styled.h2`
    font-size: 1.2rem;
    margin: 2% 1%;
`
export default function Title(props){
    const { title } = props;
    return (
        <ImageTitle>{title}</ImageTitle>
    )        
}