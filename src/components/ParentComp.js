
import React, {useState} from "react"

//ParentComp
function ParentComp (){
    return(
        <div>
<SendMessage name="jesse" message="hello"/>
<button></button>
        </div>
    )
}

//sendMessage
export  function SendMessage ({name}) {

    const [message, setMessage]=useState("hello")
    //to 
    function handleClick(){
        setMessage("unknown")
    }

    function handleChange(e){
        setMessage(e.target.value)
    }

        return(
            <div>
               <h1>
                   {name}
               </h1>
               <h1>
               {message}
               </h1>
               <input type="text" onMouseOver={handleClick} onChange={handleChange}/>
{/* to change to message prop */}
               <button onClick={handleClick}>change</button>
               {/* to add to  */}
               <ChildMessage name={name} message={message}/>
                
            </div>
        )
}

//ChildMessage
export function ChildMessage (){

    return (

        <div>

        </div>
    )
}

export default ParentComp
