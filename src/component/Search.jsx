import React from 'react';

function Search(props) {
    return (
        <div className='search'>
            <div className="searchform">
                <input className="input" placeholder="find a user" type="text" />
            </div>
            <div className="userchat">
                <img className="img" src="./img/bhavuu.jpg" alt="" />
                <div className="userchatinfo">
                    <span>Bhavu</span>
                </div>
            </div>
        </div>
    );
}

export default Search;