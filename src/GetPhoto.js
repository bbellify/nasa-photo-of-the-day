import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';

export default function GetPhoto(props) {
    const [photo, setPhoto] = useState(null)
    const [title, setTitle] = useState(null)
    const [explanation, setExplanation] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then( res => {
            console.log(res.data['url']);
            setPhoto(res.data['url']);
            setTitle(res.data['title']);
            setExplanation(res.data['explanation']);
        }).catch(err =>
            console.error(err))
    }, [])
    return (
        <div className = 'contentContainer'>
            <img src={photo} alt=''></img>
            <div className = 'copy'>
                <h2>TITLE</h2>
                <p>DESCRIPTION</p>
            </div>
        </div>
    )
}