import React, {Component} from 'react'



function List({displaylist})

{
    
   
    return(<div>
        <ul>
            {displaylist.map((item)=>{
                return(
                <li key={item.key} >
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                         <div>{item.itemLabel}</div>                     
                         <input type="checkBox" checked="false"></input>
                         <button>Change Status</button>
                    </div>
                   
                   
                </li>)})
                }
        </ul>
        </div>)
    
}

export default List