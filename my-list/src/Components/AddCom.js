import React from 'react'
import './AddCom.css';
// import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCom = (props) => {
  // changing the state of the form value using state hooks
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [form, setForm] = useState(title, desc);

  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc) {
      alert("Title or description cannot be empty");
    }
    else {
      props.add(title, desc);
      // after every rendering we mention the changes 
      setTitle("");
      setDesc("");
    }
  }

  return (
    <>
    <div className='container' id='formcont'>
      <h4 className='text-center' id='blog'>Add a Blog</h4>
      <hr style={{width: "70%", lineHeight: "0.1em"}}></hr>
      <form onSubmit={submit}>
      <div className='form-group py-2'>
        <label htmlFor='title'>Blog Title</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='form-control' id='title1' placeholder='Enter blog title.'></input>
      </div>
      <div className='form-group py-2'>
        <label htmlFor='desc'>Description</label>
        <input type='exampleFormControlTextarea1' value={desc} onChange={(e)=>setDesc(e.target.value)} className='form-control' rows='3' placeholder='Write a description'></input>
      </div>
      <button className='btn btn-success btn-sm my-2' type='submit' id='subbutt'>Add Blog</button>
      </form>
    </div> 
    </>
  )
}
