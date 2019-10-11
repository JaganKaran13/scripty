import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/' >SCRIPTY
            {/* <Logo className='logo' /> */}
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>VIEW APPLICATIONS</Link>
            <Link className='option' to='/about'>ABOUT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>
)

// The state from the store is being mapped as
// props to this Header component
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);