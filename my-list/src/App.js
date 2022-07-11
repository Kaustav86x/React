import React from "react";
import Header from "./Components/Header";
import {Footer} from "./Components/Footer";
import { MyList } from "./Components/MyList";
import {MyListFinal} from "./Components/MyListFinal";
import { useState, useEffect} from "react";
import {AddCom} from "./Components/AddCom";
import {FirstLine} from "./Components/FirstLine";
import {About} from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// const user_int = () => {
//   return (
//     <></>
//   )
// }
// var len, inp;
// inp = prompt("\nEnter the index you want to view: ");
// alert("Call the user_int function!");
function App() {
  let kaustav;
  if(localStorage.getItem("myobj") === null) {
    kaustav = [];
  }
  else {
    kaustav = JSON.parse(localStorage.getItem("myobj"))
  }
  // const obj = {val1:"Shake that ass !", val2:"My triple babbbabyyy!"}
  const onDelete = (value) => {
    console.log("Calling on delete method",value);

    setObjs(myobj.filter(meth));

    function meth(e) {
      return (e !== value);
    }
  }
  // adding a new blog to the list
  const addCom = (tit, des) => {
    console.log("I am adding this blog", tit, des)
    let sno;
    if(myobj.length === 0) {
      sno = 0;
    }
    else {
      sno = myobj[myobj.length-1].sno + 1;
    }
    const myBlog = {
      sno : sno,
      title: tit,
      desc: des,
    }
    // changing the state of dom (rendering)
    setObjs([...myobj, myBlog]); 
    // console.log(myBlog);
  }
  const [myobj, setObjs] = useState(kaustav);
  // useEffect gets called after every rendering to perform DOM updates
  // useEffect always should be written inside of a component
  useEffect(() => {
    localStorage.setItem("myobj", JSON.stringify(myobj));
  }, [myobj])
  return (
    <>
    {/* <Router> */}
      {/* reference to the custom components */}
      {/* the order of the custom components matters*/}
      {/* parent component*/}
      {/* here, 'header' is the attribute, 'BlOgSaNiTy' is the value of the attribute  */}
      <Header header = 'BlOgSaNiTy' nav = {true}/>
      <MyList value=""/> 
      {/* <Routes> */}
          {/* <Route exact path="/" render={() => { */}
            {/* return ( */}
            {/* <> */}
            <AddCom add = {addCom}/>
            <FirstLine fl = ""/>
            <MyListFinal ml={myobj} delete={onDelete}/>
            {/* </>) */}
          {/* }}> */}
          {/* </Route> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
      {/* </Routes> */}
      <Footer/> 
    {/* </Router> */}
    </>
  );
}

export default App;
