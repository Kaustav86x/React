import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function header(props) {

  return (
    // one component is ready !
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" id="navel-1" href="#">
      {/* <img src="D:\React\my-list\src\Components\hexstar_logo.svg" alt='' width="40" height="28" class="d-inline-block align-text-top">
      </img> */}
      {/* {props.title.val2} */}
      {props.header}
    </a>
      <button className="navbar-toggler" id="navel-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
    {/* the hamburger menu won't work if nav is 'false' */}
    {props.nav ? <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">About us</a>
            <a className="dropdown-item" href="#">What we Do ?</a>
            {/* <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a> */}
            <a className="dropdown-item" href="#">Contact Us</a> 
          </div>
        </li>
      </ul>
    </div> : " " } 
  </nav>
  </>
  )
}

header.defaultProps = {
  header : "Hex-Star"
}

header.propTypes = {
  header: PropTypes.string
}