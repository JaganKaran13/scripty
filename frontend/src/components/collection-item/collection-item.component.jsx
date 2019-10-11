import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return(
    <div className='collection-item'
        style={{
            backgroundColor: '#ECEFF1'
        }}
    >
        {/* link to app/:application-id */}
        <Link to='app/1'>
        <div className='image'/>
        <div className='collection-footer'>
            <span className="name">{name}</span><br></br>
            <span className='description'>Lorem, ipsum dolor sit amet consectetur laboriosam blanditiis tempore minus tempora iste </span>
        </div>
        </Link>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);