import React, { useState } from 'react'
import './Language.css'



function Language(props) {



    const { language, addFilter } = props;


    const handleClick = () => {
        const newFilter = language; // La valeur à ajouter au tableau
        console.log(language)
        addFilter(newFilter);
    }
    return (
        <button className='language' onClick={handleClick}>{language}</button>
    )
}

export default Language
