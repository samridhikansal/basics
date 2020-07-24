import React, { Component } from 'react'

function Add({label,value,onchange,handleSubmit})
{
    
        return(<div>

            <form onSubmit={(event)=>{handleSubmit(event)}}>
                <label>{label}: </label>
                <input type="text" value={value} onChange={(event)=>{ onchange(event)}}></input>
                <button type="submit">Add</button>
            </form>

              </div>)
    
}


export default Add;