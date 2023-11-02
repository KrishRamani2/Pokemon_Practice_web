import React, { useEffect, useState } from "react";
import axios from 'axios'
import { colors } from "@mui/material";


const CompA=()=>{

    const [num,setNum] = useState();
    const [name,setName] = useState();
    const [moves, setMoves] = useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    })
    return <>
    <h1>You choose a <span style={{color:"red"}}>{num}</span> value</h1>
    <h1>My name is <span style={{color:"red"}}> {name}</span> </h1>
    <h1>I have <span style={{color:"red"}}>{moves}</span> moves</h1>
    <select value={num} onChange={(event)=>{
       setNum(event.target.value); 
    }}>
        <option value = '0'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
    </select>
    </>
};

export default CompA;
