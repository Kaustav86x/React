import React from "react";
import './MyListCom.css';
// import PropTypes from 'prop-types';
// this react file will handle each of the elements of my list

export const MyListCom = (props) => {
  return (
    <div className="flex-box" id='maincont'>
      <div className="flex-box my-5">
      {/* <h4>{element.sno}</h4> */}
      {/* <h4>{props.element.sno}</h4> */}
      <h4>{props.element.title}</h4>
      <p>{props.element.desc}</p>
      <button className="btn btn-sm btn-danger" id='combutt1' onClick={() => {props.onDelete(props.element)}}>Delete</button>
    </div>
    </div>
  )
}

// MyListCom.propTypes = {
//   title: PropTypes.string
// }
