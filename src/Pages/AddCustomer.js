import React, {useState} from "react";
import AgentData from "../JSON/agentData.json";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CachedIcon from '@mui/icons-material/Cached';
import SaveIcon from '@mui/icons-material/Save';
import { Button, Card, Grid } from '@mui/material';
const AddCustomer = () =>{
    const [image, setImage]= useState ("");
    const [itemsPerPage, setItemPerPage]=useState(5);
    const [currentPage, setCurrentPage] =useState(1);

    const pages = [];
    for (let i=1; i<=Math.ceil(AgentData.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = AgentData.slice(indexOfFirstItem, indexOfLastItem);

    const renderData = (AgentData)=>{
        return(
            <Grid   >
               <Grid className="agnt-data" item sx={2}>
                        {AgentData.map((data, index)=>
                        <Grid key={index}  >
                            <Card className="agnt-card">
                                
                            <img src={ `${data.path}`} className="agnt-img" /> <br/>
                            
                            <div className="agnt-name">
                            <label className="agnt-data-name" >{data.name}</label><br/>
                            <label className="agnt-data-team" >{data.selectTeam}</label><br/>
                            <label className="agnt-data-service">{data.service}</label>
                            </div><br/>
                            <Grid>
                                <div className="agnt-grid" ><LocalPhoneIcon fontSize="x-small"  className="agnt-data-phone"/>
                                <EmailIcon fontSize="x-small"  className="agnt-data-phone"  /></div>
                            </Grid>
                            </Card>
                        </Grid>
                            
                        )}
                    </Grid>
            </Grid>
        )
    }

    const uploadImage = (e)=>{
        // const files = e.targe.files
        // const data = new FormData()
        // data.onload = ()=>{
        //     if (data.readyState === 2){
        //         setImage({image: data.result})
        //     }
        // }
        if (e.target.files && e.target.files.length > 0){
            setImage(e.target.files[0]);
        }
    };

    const onSubmit = (e)=>{
        e.preventDefault()
        alert(URL.createObjectURL(image))        
    }

    return(
        <>
            <div>
                <div className="add-customer">
                    <form>
                        
                            <div>
                                <h2 className="add-agent-title">Add Customer</h2> <hr className="line"/>
                            </div>
                        
                                <div className="general-info">
                                <h6 className="gnrl-name">General Info</h6>
                                </div>
                        <div className="agnt-form">    
                            <div className="fdiv">
                               <label className="fname">First Name</label><br/>
                                <input className="finput" type="text" name="fname" placeholder="Enter First Name" />
                            </div>
                            <div className="fdiv">
                            <label className="fname">Last Name</label><br/>
                                <input className="finput"  type="text" name="lname" placeholder="Enter Last Name" />
                            </div>
                            <div className="fdiv">
                               <label className="fname">DOB</label><br/>
                                <input className="finput" type="date" name="dob" placeholder="Enter DOB" />
                            </div>
                            <div className="fdiv">
                            <label className="fname">Contact Number</label><br/>
                                <input className="finput"  type="text" name="cnumber" placeholder="Enter Contact Number" />
                            </div>
                            <div className="fdiv">
                               <label className="fname">PAN Number</label><br/>
                               {/* <select className="finput">
                                    <option>Select Team</option>
                                    <option>ABC</option>
                                    <option>XYZ</option>
                                    <option>123</option>
                                </select> */}
                                <input className="finput"  type="text" name="pannumber" placeholder="Enter PAN Card Number" />
                            </div>
                            <div className="fdiv">
                            <label className="fname">Email</label><br/>
                                <input className="finput"  type="email" name="email" placeholder="Enter Email" />
                            </div>
                            <div className="fdiv">
                               <label className="fname">Company Name</label><br/>
                                <select className="finput">
                                    <option>Select </option>
                                    <option>ABC</option>
                                    <option>XYZ</option>
                                    <option>123</option>
                                </select>
                            </div>
                            <div className="fdiv">
                            <label className="fname">Designation</label><br/>
                            <select className="finput">
                                    <option>Select </option>
                                    <option>ABC</option>
                                    <option>XYZ</option>
                                    <option>123</option>
                                </select>
                            </div>
                            <div className="fdiv">
                               <label className="fname">Address</label><br/>
                                <input className="finput" type="text" name="address" placeholder="Enter Your Address" />
                            </div>
                            <div className="fdiv">
                            <label className="fname">Zip Code</label><br/>
                                <input className="finput"  type="text" name="zipcode" placeholder="Enter Zip Code" />
                            </div>
                            <div className="fdiv">
                               <label className="fname">Country</label><br/>
                                <input className="finput" type="text" name="country" placeholder="Enter Country" />
                            </div>
                        </div>
                        <div></div>
                        <div className='profile-cust-btn'>
                            
                            <Button  variant="contained" startIcon={<SaveIcon/>} style={{textTransform: "none", background: "#5051F9"}} >Save Profile</Button>
                        </div>
                    </form>
                </div>

                <div>
                    <h5 className='photo'>Photo</h5>
                    {image && (
                    <div >
                        <img src={URL.createObjectURL(image)} alt="" className="profile-img"/>
                    </div>
                    )}
                    <div className="upload-file">
                        <input type="file" name="file" placeholder="Upload an image" onChange={uploadImage} accept="image/*"/> <br/><br/>
                        <Button style={{ textTransform: "none", color: "#5051F9" }}
                         startIcon={<CachedIcon className="CachedIcon" 
                         style={{ fontSize:"medium"}}/>} variant="outlined" 
                         type="file" name="file"
                           onSubmit={onSubmit}
                           >
                          Change Photo
                          </Button>
                    </div>
                </div>
                <div>
                <Grid >
                    {renderData(currentItems)}
                    </Grid>
                </div>
            </div>
        </>
    )
};

export default AddCustomer;