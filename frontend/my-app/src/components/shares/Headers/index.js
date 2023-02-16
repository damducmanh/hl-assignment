import React from 'react';
import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.jpeg';

const Headers = () => {
  return (
    <Headers>
      <div className="header container">
        <div className="header__logo">
          <img src={logo} alt={logo} />
        </div>
        <div className="header__account">
          <div className="header__account__info">
            <div>
              Handicrafted by <br /> <span>Jim HLS</span>
            </div>
          </div>
          <div className="header__account__avatar">
            <img src={avatar} alt={avatar} />
          </div>
        </div>
      </div>
    </Headers>
  )
}

export default React.memo(Headers)
