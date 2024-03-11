import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () =>{
        const newCount = count -1;
        setCount(newCount);
    }
    return (
        <div style={{backgroundColor:'yellow', border:'2px solid black', borderRadius:'20px'}}>
            <h2> Counter:{count}</h2>
            <button style={{border:'2px solid blue'}} onClick={handleAdd}>Add</button>
            <button style={{border:'2px solid blue'}} onClick={handleReduce}>Reduce</button>
        </div>
    )
}