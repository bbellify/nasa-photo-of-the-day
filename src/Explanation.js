import React, { useState } from "react";
import "./App.css";

export default function Explanation(props) {
    const { explanation } = props;

    const [exState, setExState] = useState(false)

    return (
        <div>
            <button onClick={() => setExState(!exState)}>{exState ? 'Hide Explanation' : 'Show Explanation'}</button>
            {exState && <p>{explanation}</p>}
        </div>
        
    )
}