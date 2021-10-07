import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';
import Title from './Title';
import Explanation from "./Explanation";
import styled from 'styled-components';

const Card = styled.div`
    padding: 10px;
    border: 15px solid black;
    border-radius: 30px;
    background-color: #545454;
    padding: 4%;
    width:auto;

`
const CopyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 30px;
    margin: 4% 0;
    padding: 2% 0;
`

export default function GetPhoto(props) {
    const [photo, setPhoto] = useState('')
    const [title, setTitle] = useState('')
    const [explanation, setExplanation] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then( res => {
            // console.log(res.data['url']);
            setPhoto(res.data['url']);
            setTitle(res.data['title']);
            setExplanation(res.data['explanation']);
        }).catch(err =>
            console.error(err))
    }, [])
    if (!photo) return <h2>Loading...</h2>
    return (
        <Card>
            <div className = 'photoContainer'>
                <img src={photo} alt='NASA astronomy pic of the day' style={{ border: '1px solid black'}}></img>
            </div>
            <CopyContainer>
                <Title title={title}/>
                <Explanation explanation={explanation}/>
            </CopyContainer>
        </Card>
    )
}