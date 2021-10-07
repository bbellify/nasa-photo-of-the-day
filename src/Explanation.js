import React, { useState } from "react";
import "./App.css";
import styled from 'styled-components'

const ExplanationDiv = styled.div`
    /* display:flex;
    flex-direction: column; */

`

export default function Explanation(props) {
    const { explanation } = props;

    const [exState, setExState] = useState(false)

    return (
        <ExplanationDiv>
            <button onClick={() => setExState(!exState)}>{exState ? 'Hide Explanation' : 'Show Explanation'}</button>
            {exState && <p>{explanation}</p>}
        </ExplanationDiv>
        
    )
}