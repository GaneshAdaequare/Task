import React from 'react';
function About() {
  return (
    <h1>
      About Our Project
    </h1> 
  )
}
export default About

//const [lsData,setLsData]=useState(JSON.parse(localStorage.getItem('myData')));
// useEffect(()=>{setLsData(JSON.parse(localStorage.getItem('myData')))},[]);
// if(!lsData){
//   return(
//     <h1>No Data Added</h1>
//   )

// }
 // <table>
    //   <thead>
    //     <th>First Name</th>
    //     <th>Last Name</th>
    //     <th>Email</th>
    //     <th>Password</th>
    //     <th>City</th>
    //   </thead>
    //   <tbody>
    //   {
    //   lsData.map(({FirstName,LastName,Email,Password,DropdownValue})=><tr><td>{FirstName}</td><td>{LastName}</td><td>{Email}</td><td>{Password}</td><td>{DropdownValue}</td></tr>)
    //  }

    //   </tbody>
     
    // </table>