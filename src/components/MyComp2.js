// Import area
//1.1 import someDefaultImport from somelocation/somelibraay
import React from 'react'
import MyComp3 from './MyComp3';
//1.2 import {someNamedImport}  from somelocation/somelibray 


//2. this is a function defination area
// we are going to create a functional component
 function MyComp2() {
    // every function return something
    return <span>MyComp2 <MyComp3/></span>
  }

//3. export area 
 export default MyComp2;

