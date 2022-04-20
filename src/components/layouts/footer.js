import React from 'react'
import { NavLink } from 'react-router-dom';
import { Search } from '../../utils/tools';
const Footer = () => {
    return (
        <div className=''>
            <div className="flex bg-gray-200 rounded-md">
                <form>
                    {/* <div className="flex-1">
                        <Search 
                            onSubmit={null}
                            type="" 
                            name=""
                            className="w-96" 
                            id="" 
                            value=""
                            placeholder=""
                            style={null}
                        />
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Footer;