import React from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import TabletMacIcon from '@mui/icons-material/TabletMac';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SearchIcon from '@mui/icons-material/Search';
import TicketData from "../JSON/data.json";
import { LineChart, ResponsiveContainer, Line, XAxis,  YAxis, Legend, Tooltip, BarChart, Bar, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

const Chat = ()=>{
    return(
        <>
            <div>
                <div>
                    <div className='maindashboard'>
                        <h2 className='dashboard-Page'>Chat</h2>
                        {/* <p className='welcome-desk'>Hello, Mike. Welcome to We Desk</p> */}
                     </div>
                   {/* <div className='addbtn'>
                {
                !isOpen ?
                        <Button startIcon={<AddCircleOutlinedIcon fontSize="small" className='plussym' />} type="Submit" style={{color: "#FFFFFF"}} className = "new" onClick= {HandleClick}> 
                            Add New
                        </Button> :  <div>
                        <Button startIcon={<AddCircleOutlinedIcon fontSize="small" className='plussym' />} type="Submit" style={{color: "#FFFFFF"}} className = "new" onClick= {HandleClick}> 
                            Add New
                        </Button>
                            <Grid className="grid-btn-container">
                                <Grid className="grid-bttn-item">
                                <button  onClick={()=> setIsOpenPopup(true)} className="pop-btn" >
                                     <ManageAccountsIcon style={{color:'#793DDC', marginLeft:-30, paddingRight:8}}/>
                                       Ticket 
                                </button>
                                </Grid>
                                <Grid className="grid-bttn-item">
                                <button className="pop-btn">
                                     <PersonAddAlt1Icon style={{color:'#793DDC'}}/> 
                                     <NavLink to="/agents/addagents" style={{textDecoration: "none", padding: 18,color:"black"}}>
                                         Agent
                                     </NavLink> 
                                </button>
                                </Grid>
                               <Grid className="grid-bttn-item">
                               <button className="pop-btn">
                                     <PersonAddAlt1Icon style={{color:'#793DDC' }}/> 
                                     <NavLink to="/customer/addcustomer" style={{textDecoration: "none", paddingLeft:10, color:"black"}}>
                                         Customer
                                     </NavLink> 
                                </button>
                               </Grid>
                            </Grid>
                            </div>
                        }
                    </div> */}
                <div className='mgrid'>
                    <Grid container spacing={2}>
                        <Grid item xs={3}  className='gtotal-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Total Agents</h3>
                                <h4 className='total-tck-num'>224</h4>
                            </Grid>
                            <Grid className='g-star'><MapsUgcOutlinedIcon className='star' fontSize="small"/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gtodays-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Active Agents</h3>
                                <h4 className='total-tck-num'>58</h4>
                            </Grid>
                            <Grid className='g-star'><TabletMacIcon className='star' fontSize="small"/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gpending-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Escalate</h3>
                                <h4 className='total-tck-num'>149</h4>
                            </Grid>
                            <Grid className='g-star'><MarkEmailUnreadIcon className='star' fontSize="small"/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gtoatal-agnt'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Chats Per Day</h3>
                                <h4 className='total-tck-num'>121</h4>
                            </Grid>
                            <Grid className='g-star'><AssignmentOutlinedIcon className='star' fontSize="small"/></Grid>
                        </Grid>
                     </Grid>
                    </div>
                    <div>
                        <Grid item xs={3}>
                            <Grid item xs={2} className="convertation">
                           <div>
                           <h3 className="conver-text">Incoming Conversation</h3>
                            <h5 className="cal-date">15 April - 21 April</h5>
                           </div>
                            <input type="date" className="calender"/>
                            <div className="convertation-chart">
                            <ResponsiveContainer>
                                <LineChart data={TicketData}  >
                                <CartesianGrid  horizontalCoordinatesGenerator={(props) => props.width > 450 ? [150, 300, 450] : [200, 400]} fill="#F5F6FA"/>
                                    <XAxis dataKey="Time" interval={'preserveStartEnd'} axisLine={false} tickLine ={false} padding = {{left: 45, right: 15}} tick={{fill:"#797C8C", fontSize: 10}}/>
                                    <YAxis axisLine={false} tickLine ={false} tick={{fill:"#797C8C", fontSize: 16}}/>
                                    {/* <Legend iconType="circle" iconSize="12" /> */}
                                    <Tooltip contentStyle={{ borderRadius: "15px" }} cursor={false} />
                                    <Line type= "monotone" dataKey="New Tickets"  stroke='#5051F9'  />
                                    {/* <Line type= "monotone" dataKey="Close Tickets" stroke='#1EA7FF' /> */}
                                </LineChart>
                            </ResponsiveContainer>
                            
                            </div>
                            </Grid>
                            <Grid className="response-grid">
                                <h2 className="resp-txt">Speed Of Response</h2>
                                <Grid item xs={3} className="chat-grid-container">
                                    <div >
                                        <h4 className="chat-grid-item">First Response</h4>
                                        <h4 className="min">2 Minutes</h4>
                                    </div>
                                    <div >
                                        <h4 className="chat-grid-item">Response Time</h4>
                                        <h4  className="min">2 Minutes</h4>
                                    </div>
                                    <div >
                                        <h4  className="chat-grid-item">Resolution Time</h4>
                                        <h4  className="min">2 Minutes</h4>
                                    </div>  
                                    <div>
                                    <h4 className="chat-grid-item" style={{borderRight:"none"}}>Waiting Time</h4>
                                        <h4  className="min">2 Minutes</h4>
                                    </div>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid item xs={3}>
                            <Grid className="last-grid">
                                <h4 className="last-grid-chat">Last Chat</h4>
                               
                            </Grid>
                            <Grid className="msg-grid">
                            <h3 className="msg-grid-title">Messages To Agents</h3>
                            {/* <input  className="msg-grid-search" type="text"  placeholder="Search Agent Name Here" name="search"  />
                            <SearchIcon font-size="small" className="msg-grid-searchicon" /> */}
                            <TextField className="msg-grid-search"
                            style={{marginLeft:26}}
                            placeholder="Search Agent Name Here"
                            InputProps={{
                            startAdornment: (
                                <IconButton>
                                <SearchIcon />
                                </IconButton>
                  ),
                }}
              />

                            </Grid>
                        </Grid>
                    </div>
                </div> 
                </div>   
        </>
    )
};
export default Chat;