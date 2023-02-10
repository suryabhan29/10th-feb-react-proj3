// Import Area

import MyComp2 from "./MyComp2";

//2. functional component defination area
function MyComp1(){
    return <h1>learn react <MyComp2/></h1>;
  }

// Export Area
// I can export anything  varibal function class array ---anything
// 2 way to export
//1. Default export   //2.named export
export default MyComp1;