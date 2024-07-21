import React, {useState} from "react";
import SaveIcon from '@mui/icons-material/Save';
import CachedIcon from '@mui/icons-material/Cached';
import { Button} from '@mui/material';
const EditAgent = ()=>{
    const [image, setImage]= useState ("");

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
        <div>
            <div className="edit-agent">
                    <form>
                        
                            <div>
                                <h2 className="add-agent-title">Edit Agent</h2> <hr className="line"/>
                            </div>
                        
                                <div className="general-info">
                                <h6 className="gnrl-name">General Info</h6>
                                </div>
                        <div className="edit-agent-form">    
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
                               <label className="fname">Select Team</label><br/>
                               <select className="finput">
                                    <option>Select Team</option>
                                    <option>ABC</option>
                                    <option>XYZ</option>
                                    <option>123</option>
                                </select>
                            </div>
                            <div className="fdiv">
                            <label className="fname">Email</label><br/>
                                <input className="finput"  type="email" name="email" placeholder="Enter Email" />
                            </div>
                            <div className="fdiv">
                               <label className="fname">Select Role</label><br/>
                                <select className="finput">
                                    <option>Select Role</option>
                                    <option>ABC</option>
                                    <option>XYZ</option>
                                    <option>123</option>
                                </select>
                            </div>
                            <div className="fdiv">
                            <label className="fname">Select Reporting Authority</label><br/>
                            <select className="finput">
                                    <option>Select Reporting Authority</option>
                                    <option>ABC</option>
                                    <option>XYZ</option>
                                    <option>123</option>
                                </select>
                            </div>
                        </div>
                        <div></div>
                        <div className='profile-btn'>
                            
                            <Button  variant="contained" startIcon={<SaveIcon/>} style={{textTransform: "none", background: "#5051F9"}} >Save Profile</Button>
                        </div>
                    </form>
                </div>

                <div className="edit-agent-image">
                    <h5 className='photo'>Photo</h5>
                    {image && (
                    <div>
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
        </div>
    )
};
export default EditAgent;