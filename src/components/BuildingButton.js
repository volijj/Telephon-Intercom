import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';

function BuildingButton({title, city}) 
{
     
    const handleClick = (e) => {
       
    };

    return (
        <div className='BuildingButton'>
            <button className="button" onClick={handleClick} id=''>{title} , {city}<button className='home-icon'><AiOutlineHome/></button></button>
        </div>
    );
    }

export default BuildingButton

