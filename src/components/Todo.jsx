import {useState} from 'react';
import {TodoInput} from './Todolnput';
import {TodoItem} from './TodoItem';
import { nanoid } from 'nanoid';

export const Todo=() =>{
const [list,setList] = useState([]);

const handleClick = (data) =>{
    console.log("Data in parent", data);

    const payload ={
        title:data,
        status:false,
        id:nanoid(7)
    }

    setList([...list,payload]);
};

    const handletoggle=(id)=>{
        setList(list.filter((e)=>e.id!==id))
    }

    return (
        <>
        <TodoInput getData = {handleClick}/>
        {list.map((e)=>(
            <TodoItem key= {e.id} {...e} handletoggle={handletoggle}/>
        ))}
        </>
    )
}