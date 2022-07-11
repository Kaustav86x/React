import React from 'react';
import { MyListCom } from './MyListCom';
import './MyListFinal.css';

export const MyListFinal = (props) => {
  return (
    <>
    <div className='container' id='content'>
    {/* trying to pass an array */}
    {/* <MyListInp compo=''></MyListInp> */}
    {/* such a mess !! :) */}
    {/* {isNaN(props.result) ? <MyListCom element={props.result}></MyListCom> : <MyListCom element={props.ml[props.result]}></MyListCom>} */}
    {props.ml.length === 0 ? <div className='text-center'><p>No blog to display!!</p></div>:
    props.ml.map((element)=> {
      return <MyListCom element={element} key={element.sno} onDelete={props.delete}></MyListCom>
    })}
    </div>
    </>
  )
}
