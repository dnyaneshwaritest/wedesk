// import React from "react";
// import Logo from "./assets/images/icons/wedesk.svg";
// import Tickets from "./assets/images/icons/Tickets.svg";
// import Agents from "./assets/images/icons/Agent2.svg";
// import TeamView from "./assets/images/icons/TeamView.svg";
// import Customer from "./assets/images/icons/Customer.svg";
// import Social from "./assets/images/icons/Social.svg";
// import Chat from "./assets/images/icons/Chat.svg";
// import Setting from "./assets/images/icons/Setting.svg";
// import { Route, Routes, NavLink } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import TicketsPage from "./Pages/Tickets";
// const wedesk = ()=>{
//     return(
//         <>
//             <div >
//                 <ul className="sidebar">
//                     <li >
//                     <NavLink to= "/">
//                         <img src={Logo}/>
//                     </NavLink>    
//                         <p>Dashboard</p>
//                     </li>

//                     <li>
//                     <NavLink to="/tickets">
//                      <img src={Tickets}/>
//                      </NavLink>
//                       <p>Tickets</p> 
                  
//                     </li>
//                     <li>
//                      <img src={Agents}/>
//                       <p>Agents</p> 
//                     </li>
//                     <li>
//                      <img src={TeamView}/>
//                       <p>Team View</p> 
//                     </li>
//                     <li>
//                      <img src={Customer}/>
//                       <p>Customer</p> 
//                     </li>
//                     <li>
//                      <img src={Social}/>
//                       <p>Social</p> 
//                     </li>
//                     <li>
//                      <img src={Chat}/>
//                       <p>Chat</p> 
//                     </li>
//                     <li>
//                      <img src={Setting}/>
//                       <p>Setting</p> 
//                     </li>
//                 </ul>
//             </div>
//             <div>
//             <Routes>
//                     <Route path="/" element={<Dashboard/>}/>
//                     <Route path="/tickets" element={<TicketsPage/>}/>
//             </Routes>        
//             </div>
//         </>
//     )
// };
// export default wedesk;