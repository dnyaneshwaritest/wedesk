import { Button, Card, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
const CustomerDetails = ()=>{
    return(
        <div>
            <div>
                    <div className='maindashboard'>
                        <h2 className='ticket_details'>Tickets <span style={{color:"#A8A8A8"}}>#202221</span> </h2>
                        
                    </div>
                    <div className='ticket_button'>
                        <NavLink to="/agents/addagents" className="ticket-summery" >
                            <Button type="Submit" style={{color: "#FFFFFF", textTransform:"none"}} className = "new"> 
                                    View Summary
                                </Button>
                       </NavLink>
                    </div>
            </div>
            <div>
            <h2 className="ticket_code">Customer Details</h2>
            
                <Grid item sx={4}>
                    <Grid style={{borderRadius:"14px"}} className="customer_details">
                        <Grid >
                        <h2 className="customer_details_card">Creation Date</h2>
                        <h2 className="customer_details_date">21-July-2021</h2>
                        </Grid>
                        <Grid >
                        <h2 className="customer_details_card">Creation Time</h2>
                        <h2 className="customer_details_date">12:49 AM</h2>
                        </Grid>
                        <Grid >
                        <h2 className="customer_details_card">Creation Platform</h2>
                        <h2 className="customer_details_date">E-mail</h2>
                        </Grid>
                        <Grid >
                        <h2 className="customer_details_card">Created By</h2>
                        <h2 className="customer_details_date">Mr.Lawren</h2>
                        </Grid>
                    </Grid>
                    <h2 className="task-info-text">Task Information</h2>
                    <Grid style={{borderRadius:"14px"}} className="task_info">
                        <Grid >
                        <h2 className="customer_details_card">Subject</h2>
                        <h2 className="customer_details_date">Intern</h2>
                        </Grid>
                        <Grid >
                        <h2 className="customer_details_card">Task Owner</h2>
                        <h2 className="customer_details_date">Agent</h2>
                        </Grid>
                        <Grid >
                        <h2 className="customer_details_card">Category</h2>
                        <h2 className="customer_details_date">web issues</h2>
                        </Grid>
                        <Grid >
                        <h2 className="customer_details_card">Priority By</h2>
                        <h2 className="customer_details_date">Medium</h2>
                        </Grid>
                        <Grid >
                        <h2 className="customer_details_card">Due Date</h2>
                        <h2 className="customer_details_date">28-07-2022</h2>
                        </Grid>
                    </Grid> 
                    <h2 className="agent-admin">Reminder To agent and admin</h2>
                    <Grid style={{borderRadius:"14px"}} className="agent-admin-info">
                        <Grid >
                            <input type="checkbox" className="customer_chkbox" />
                            <label className="agent_details">Alert By Email</label>
                        </Grid>
                        <Grid >
                        <input type="checkbox" className="customer_chkbox" />
                            <label className="agent_details">Alert By SMS</label>
                        </Grid>
                    </Grid>
                    <h2 className="agent-description">Description</h2>
                    <Grid style={{borderRadius:"14px"}} >
                        <Grid >
                            <div className="description_card">
                            <p className="agent-descriptionp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing volutpat condimentum ridiculus magna eget. Tincidunt id consequat vel, neque, amet purus egestas quis purus. Fermentum rhoncus augue morbi nec suscipit laoreet malesuada vitae orci. Bibendum eros.</p>
                            </div>
                        </Grid>
                    </Grid>        
                </Grid>
                <Grid className="side-grid">

                </Grid>
                
            </div>
            <Button className="assign-bttn" variant="contained" style={{textTransform:"none", background:"#6418C3"}}>Assign</Button>
        </div>
    )

};
export default CustomerDetails;