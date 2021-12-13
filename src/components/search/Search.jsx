import React from 'react'
import './search.css'

export default function Search({placeholder}) {
    return (
        <div className='search'>

       
        <form action="/" method="get">
        <input
        style={{width: "56.32rem", border: "1px solid #c5c9c6"}}
        className='search-input'
            type="text"
            id="header-search"
            placeholder={placeholder}
            name="s" 
        />
        <button className='search-button' type="submit">Search</button>
        </form>

        </div>
    )
}
