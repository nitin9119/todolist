import {useState} from 'react';

export const TodoInput=({getData})=>{
    const [text,setText] = useState("");

    const handlechange=(e)=>{
        setText(e.target.value);
    }

    const handleClick = () =>{
        getData(text)
    }

    return <>
        <input type="text" placeholder="Enter todo" onChange = {handlechange} />
        <button onClick={handleClick}>Add Todo</button>
    </>
}