import React from 'react'
import { useForm } from 'react-hook-form'

export default function Formfilling() {
const[register]=useForm()
  return (
    <div>
        <form>{   ...register("firstname")}
<input     type='text' placeholder='firstname'/>
<br/>
<input   {   ...register("firstname")} type='text' placeholder='firstname'/>
<br/>
<input   {   ...register("firstname")} type='text' placeholder='firstname'/>
<br/>
<input   {   ...register("firstname")} type='text' placeholder='firstname'/>
<button type='submit'>submit</button>
</form>



    </div>
  )
}
