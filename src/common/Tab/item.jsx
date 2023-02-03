import React from 'react';

const Item = () => {
    const R = JSON.parse(localStorage.getItem('selectedItem'));
    
        <div >
        {R.map((e,idx)=>{
           return( <div>
           
            <p key={`ru+${idx}`}>{e.name}</p>
    
        
            </div>
           )
        })}
        </div>

};

export default Item;