import React from 'react';

import './custom-select.styles.scss';

const CustomSelect = ({ children, isGoogleSignIn, inverted, options, ...otherProps }) => (
    <div>
        <select name="" id="" className='custom-select'>
            {
                options.map(option => {
                    return <option value={option}>{option}</option>
                })
            }
        </select>
    </div>
)

export default CustomSelect;