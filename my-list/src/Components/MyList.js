import React from 'react';
import './MyList.css';
import '../App.js';

// named component 
export const MyList = () => {
  // size of the array 
  // var len = props.long;
  return (
  <>
    <div className='alert alert-success' id='navel-3'>
      <div className='text-center' id='navel-4'>
        Welcome to Blogsanity
      </div>
    </div>
    <hr className='hr'></hr>
    <div className='col'>
    <p className='text-center' id='navel-war'>You can post, you can have fun !</p>
    </div>
  </>
  )
}