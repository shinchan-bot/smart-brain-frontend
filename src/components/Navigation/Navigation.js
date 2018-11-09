import React from 'react';
import Tachyons from 'tachyons';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='br3 ba b--black-10 mv4 w-100 w-20-m w-10-l mw6 shadow-5 f3 link dim black  pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='br3 ba b--black-10 mv4 w-100 w-20-m w-10-l mw6 shadow-5  f3 link dim black  pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='br3 ba b--black-10 mv4 w-100 w-20-m w-10-l mw6 shadow-5  f3 link dim black  pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;