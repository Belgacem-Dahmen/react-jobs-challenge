import React, { useState } from 'react'
import "./FilterInput.css"


function FilterInput({ currentFilters, clearFilters, removeFilter }) {


    const handleRemoveFilter = (filter) => () => {
        removeFilter(filter);
      };


    return (
        <div className='filter-input'>
            <div className='filters-tags-container'>
                {currentFilters.map((filter, i) => {
                    return <div className='filter' key={i}>
                        <p className='filter__text'>{filter}</p>
                        <button className='filter__btn' onClick={handleRemoveFilter(filter)}>
                            <img src="./images/icon-remove.svg" alt="" />
                        </button>
                    </div>
                })}
            </div>
            <button className='filter__clear-btn' onClick={clearFilters}> clear</button>
        </div >
    )
}

export default FilterInput
