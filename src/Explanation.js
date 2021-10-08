import React, { useState } from "react";
// import "./App.css";
import styled from 'styled-components'

const ExplanationDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

`
const Button = styled.button`
    font-size:1rem;
    font-weight: bold;
    background-color: paleturquoise;
    box-sizing: border-box;
    width: 60%;
    padding: 2%;
    border-radius: 10px;
    margin: 4% 0 2% 0;
    
`
const ExplanationP = styled.p`
    font-size: 0.8rem;
    margin: 0 1%;
`

export default function Explanation(props) {
    const { explanation } = props;

    const [exState, setExState] = useState(false)

    return (
        <ExplanationDiv>
            <Button onClick={() => setExState(!exState)}>{exState ? 'Hide Explanation' : 'Show Explanation'}</Button>
            {exState && <ExplanationP>{explanation}</ExplanationP>}
        </ExplanationDiv>
        
    )
}