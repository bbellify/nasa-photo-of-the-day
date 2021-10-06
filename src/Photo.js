import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';

export default function Photo(props) {
    const [photo, setPhoto] = useState(null)
    const [title, setTitle] = useState(null)
    const [explanation, setExplanation] = useState(null)
    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then( res => {
            console.log(res.data);
            setPhoto(res.url);
            setTitle(res.title);
            setExplanation(res.explanation);
        }).catch(err =>
            console.error(err))
    }, [])
}