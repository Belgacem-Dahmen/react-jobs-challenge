import React from 'react'
import "./FilterInput.css"


function FilterInput({ currentFilters }) {
    return (
        <div className='filter-input'>
            <div className='filters-tags-container'>
            {currentFilters.map(filter => {
                return <div className='filter'>
                   <p className='filter__text'>{filter}</p>
                    <button className='filter__btn'>
                        <img src="./images/icon-remove.svg" alt="" />
                    </button>
                </div>
            })}
        </div>
            <button className='filter__clear-btn'> clear</button>
        </div>
    )
}

export default FilterInput
