import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import FormInput from '../../components/form-input/form-input.component';

const HomePage = () => (
    <div className='homepage'>
        <div className="search-bar">
            <FormInput 
                type="text"
                name='search'
                value=''
                label='search for applications...'
            />
        </div>
        <Directory />
    </div>
)

export default HomePage;