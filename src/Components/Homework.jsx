import React, { useState } from "react";

function Homework(){
const [first,setFirst]=useState("")
const [last,setLirst]=useState("")
const [ishide,setishide]=useState(false)
const handlefirstname=(e)=>{

setFirst(e.target.value)

}
const handlelastname=(e)=>{

  setLirst (e.target.value)
  
  }
  
  const handleadd=()=>{
setishide(true)


  }

return(
<div>

<form>
  {!ishide&&
    <>
<label>firestname</label>
<input type="text" value={first} onChange={handlefirstname}/>
<br/>
<label>lastname</label>
<input type="text" value={last} onChange={handlelastname}/>
<button onClick={handleadd}>click</button>
</>
}
{ishide&&
<>
<p>its my first name {first}</p>
<p>its my first name {last}</p>
</>
}

</form>
</div>


)



}
export default Homework