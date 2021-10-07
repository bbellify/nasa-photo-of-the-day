import React from "react";
import "./App.css";
import GetPhoto from './GetPhoto'
import styled from 'styled-components'

const Container = styled.div`
  background: #150c25;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2%;
  margin: 0;
`

function App() {
  return (
    <Container>
      <p style={{ padding:20, margin:0}}>
        <span role="img" aria-label='go!'>🚀</span>
      </p>
      <GetPhoto />
    </Container>
  );
}

export default App;
