// Import area
import  { Component } from 'react'  //Named import
//1.1 import someDefaultImport from somelocation/somelibraay
import MyComp4 from './MyComp4';

/*
    class Child  extend  parent{
        1.properties/variables


        2.Constructor/ esp..function

       
        3.Method/function

    }
*/

    class MyComp3 extends Component {
    render() {
        // Every function return something
        return <span>MyComp3 <MyComp4></MyComp4></span>;
        
    }
}
// export part
export default MyComp3;
