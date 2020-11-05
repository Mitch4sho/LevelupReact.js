import React, { useState }  from 'react'


export function Accordion() {
    const [isToggled, setIsToggle] = useState(false); 
    
    const showMe  = isToggled ? (<h3>Show Me</h3>) : null 
    return (
        <div>
            {showMe} 
            
            {isToggled ? 
                <h3>Show Me</h3>
                : null
            }
            
            {isToggled && 
                <h3>Show Me</h3>
            }
            <button
                onClick={() => setIsToggle(!isToggled) }  
            >Toggle</button>
        </div>
    )
 } 