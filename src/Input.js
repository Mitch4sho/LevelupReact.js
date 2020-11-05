import React, { useState }from 'react'

export function Input() {
    const [inputValue, setInputValue] = useState(" ")

    return (
        <div>{inputValue &&
            <h3>{inputValue}</h3>}
        
            <input
                value={inputValue}
                // Long hand way fo writing out the event 
                onChange={(event) => setInputValue(event.target.value)}
                // Basic way for writing out the event 
                onChange={(e) => setInputValue(e.target.value)}
                // Advance 
                // onChange={(e) => {
                //     if (!e.target.value.includes("t")) {
                //         setInputValue(e.target.value)
                //     }
                // }
                // }
                
            />
        </div>
    ) 
}