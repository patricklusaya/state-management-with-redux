import React, { useEffect, useState } from "react";

export default function ChildComponent() {

  const [count, setCount] = useState(0);
   const [anotherCount, setAnotherCount] = useState(0);


  useEffect ( ()=>{

    console.log("Im now active");
    
  })

    useEffect ( ()=>{

    console.log("I will be executed once the component mounts only");
    
  }, [])

      useEffect ( ()=>{

      console.log(" i will only be executed when my dependent state changes");
      
    }, [anotherCount])
  
  return (
    <div>

      <p>Count :  {count} </p>

      <button  onClick={ ()=> setCount(count +2)} >Click me</button>
     
    </div>
  );
}
