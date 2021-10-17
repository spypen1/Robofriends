import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input className='ba b--green bg-lightest-blue pa3' type='search' placeholder='search robots' onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;