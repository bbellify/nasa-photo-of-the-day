import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';
import Title from './Title';
import Explanation from "./Explanation";

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
        <div className = 'container'>
            <div className = 'photoContainer'>
                <img src={photo} alt='NASA astronomy pic of the day'></img>
            </div>
            <div className = 'copyContainer'>
                <Title title={title}/>
                <Explanation explanation={explanation}/>
            </div>
        </div>
    )
}