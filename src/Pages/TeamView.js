import React, {useState} from "react";
//import { Card, Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Desk } from "@mui/icons-material";
import { Button, Card, Grid} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AgentData from "../JSON/agentData.json";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { NavLink } from "react-router-dom";
const TeamView = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] =useState(1);
    const [itemsPerPage, setItemPerPage]=useState(6);

    const [pageNumberLimit, setPageNumberLimit] = useState(4);
    const [maxPageNumberLimit, setmaxPageNumberLimit] =useState(4);
    const [minPageNumberLimit, setminPageNumberLimit]=useState(0);

    const [data, setData]=useState(AgentData);

    // const [searchByName, setSearchByName] = useState('');

    // const handleSearch = (e) =>{
    //     setSearchByName(e.target.value);
    // };

    // const filteredData = AgentData.filter(data => data.name.includes(searchByName));

    const HandleData = (e)=>{
        let word = e.target.value;

        if (word==="Emailservice"){
            const filteredValue = AgentData.filter
            (item=>item.service==="Email service");
            setData(filteredValue);
        }
        else if(word==="socialDesk"){
            const filteredValue = AgentData.filter
            (item=>item.service==="Social service");
            setData(filteredValue);
        }
        else if(word==="chatDesk"){
            const filteredValue = AgentData.filter
            (item=>item.service==="Chat service");
            setData(filteredValue);
        }
        else if(word==="contactDesk"){
            const filteredValue = AgentData.filter
            (item=>item.service==="Contact service");
            setData(filteredValue);
        }
    }

    const handleClick =(event) =>{
        setCurrentPage(Number(event.target.id));
    }
    const pages = [];
    for (let i=1; i<=Math.ceil(data.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map(number =>{
       if(number < maxPageNumberLimit+1 && number > minPageNumberLimit){
        return(
            <li key={number} id={number} onClick={handleClick}
            className = {currentPage == number ? "active" : null}
            >
                {number}
            </li>
        );
       }else{
        return null;
       }
    })

    const handleNextbtn = ()=>{
        setCurrentPage(currentPage + 1);

        if(currentPage + 1> maxPageNumberLimit){
            setmaxPageNumberLimit(maxPageNumberLimit+ pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevtbtn = ()=>{
        setCurrentPage(currentPage - 1);

        if((currentPage - 1)%pageNumberLimit==0){
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    const handleOpen = ()=>{
        setIsOpen (!isOpen);
    }

    const renderData = (AgentData)=>{
        return(
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
                {AgentData.map((data, index)=>
                <Grid item xs={4}  >
                    <Card key={index} className="social-card">
                        <div className="agent-del">
                        <NavLink to="/agents/editagent">
                            <EditIcon fontSize="xsmall"/>
                        </NavLink> 
                            <DeleteIcon fontSize="xsmall"/></div>
                        <img src={ `${data.path}`} className="card_path" /> <br/>
                        
                        <div className="card-div">
                        <label className="card-name" >{data.name}</label><br/>
                        <label className="card-team">{data.selectTeam}</label><br/>
                        <label className="card-service">{data.service}</label>
                        </div><br/>
                        <label className="card-email"><div className="card-localph"><LocalPhoneIcon fontSize="small" className="card-ph-icon"/></div>{data.mobile}</label><br/><br/>
                        <label className="card-email"><div className="card-localph"><EmailIcon fontSize="small"  className="card-ph-icon"/></div>{data.email}</label>
                    </Card>
                    </Grid>
                )}
            </Grid>
        )
    }


    const [socialDesk, setSocialDesk] = useState(
        ["Email Desk", "Social Desk", "Chat Desk", "Contact Desk"]
    );
    return(
        <div>
            <div className='maindashboard'>
                        <h2 className='dashboard-Page'>Teams</h2>
                        
                    </div>
                    <div className='maindashboard'>
                        <h2 className='email-team'>Email Team</h2>
                       
                    </div>
                    <div>
                    <input type="text"  placeholder="Search By Name" name="search"  className="tmview-srch" />
                <SearchIcon className="tmvew-srch-icon" font-size="small"/>
                    </div>
                    <div className='addbtn'>
                    <AddCircleOutlinedIcon fontSize="small" className='plussym-btn' />
                    <NavLink to="/agents/addagents" style={{textDecoration: "none"}}>
                        <Button type="Submit" style={{color: "#FFFFFF", textTransform: 'none'}} className = "new"> 
                            Add Agents
                        </Button>
                    </NavLink>
                    </div>
           <div>
           <div className="teams-sidebar">
                <div className="social-site">
                    <label>Your Teams</label>
                </div>
                <div className="email-postn" >
                    
                        <div className="email-initial">
                            <label className="email-initial-lbl">ED</label>
                        </div>
                        {/* {socialDesk.map((item, index)=>
                        <Grid item sx={2} className="social-team" key={index}>
                            <label>{item}</label>
                            <div>
                                {
                                !isOpen ? 
                                <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/> :
                                <div>
                                    <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/>
                                    <li><ManageAccountsIcon style={{color:'#793DDC', marginLeft: -30}}/>Manage Team</li>
                                    <li> <PersonAddAlt1Icon style={{color:'#793DDC' }}/> Add Member</li>
                                </div>
                               } 
                            </div>
                        </Grid>
                        )} */}
                   
                    
                    <div className="social-team">
                        <div>
                                <div  >
                                    <button value="Emailservice" className="social-team-btn" onClick = {HandleData}>Email Desk</button>
                                </div>
                                <div>
                                                {
                                                !isOpen ? 
                                                <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/> :
                                                <Grid className="grid-container">
                                            <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/>
                                            <Grid className="grid-item">
                                             <ManageAccountsIcon style={{color:'#793DDC', marginLeft: -30}}/> Manage Team
                                            </Grid>
                                            <Grid className="grid-item">
                                            <PersonAddAlt1Icon style={{color:'#793DDC', marginLeft: -30 }}/> Add Member
                                            </Grid>
                                            
                                        </Grid>
                                            } 
                                </div>
                        </div>
                        <div>
                                <div >
                                        <div className="email-initial-sd">
                                            <label className="email-initial-lbl">SD</label>
                                        </div>
                                </div>        
                                        <div className="email-desk" >
                                            <button value="socialDesk" className="social-team-btn" onClick={HandleData}>Social Desk</button>
                                        </div>

                                <div>
                                        {
                                        !isOpen ? 
                                        <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/> :
                                        <Grid className="grid-container">
                                            <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/>
                                            <Grid className="grid-item">
                                             <ManageAccountsIcon style={{color:'#793DDC', marginLeft: -30}}/> Manage Team
                                            </Grid>
                                            <Grid className="grid-item">
                                            <PersonAddAlt1Icon style={{color:'#793DDC', marginLeft: -30 }}/> Add Member
                                            </Grid>
                                            
                                        </Grid>
                                    } 
                                </div>
                        </div>
                        
                        <div >
                                <div className="email-initial-sd">
                                    <label className="email-initial-lbl">CT</label>
                                </div>
                                <div className="email-desk"  >
                                    <button value="chatDesk" className="social-team-btn" onClick={HandleData}>Chat Desk</button >
                                </div>
                                <div>
                                        {
                                        !isOpen ? 
                                        <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/> :
                                        <Grid className="grid-container">
                                            <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/>
                                            <Grid className="grid-item">
                                             <ManageAccountsIcon style={{color:'#793DDC', marginLeft: -30}}/> Manage Team
                                            </Grid>
                                            <Grid className="grid-item">
                                            <PersonAddAlt1Icon style={{color:'#793DDC', marginLeft: -30 }}/> Add Member
                                            </Grid>
                                            
                                        </Grid>
                                    } 
                                </div>
                                
                        </div>
                        <div >
                                <div className="email-initial-sd">
                                    <label className="email-initial-lbl">CD</label>
                                </div>
                                <div className="email-desk">
                                    <button value="contactDesk" className="social-team-btn" onClick={HandleData}>Contact Desk</button>
                                </div>
                                <div>
                                        {
                                        !isOpen ? 
                                        <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/> :
                                        <Grid className="grid-container">
                                            <MoreHorizIcon className="social-doticon" onClick= {handleOpen}/>
                                            <Grid className="grid-item">
                                             <ManageAccountsIcon style={{color:'#793DDC', marginLeft: -30}}/> Manage Team
                                            </Grid>
                                            <Grid className="grid-item">
                                            <PersonAddAlt1Icon style={{color:'#793DDC', marginLeft: -30 }}/> Add Member
                                            </Grid>
                                            
                                        </Grid>
                                    } 
                                </div>
                        </div>
                    </div>
                </div>
           </div>
                <div>
                
    return(
        <>
          
            <div className="agent_gridcard">
              
                <Grid>
                    <Grid >
                    {renderData(currentItems)}
                    </Grid>
                   <div className="pagination">
                        <ul className="pageNumbers">
                            <li><button onClick={handlePrevtbtn}
                                disabled = {currentPage == pages[0] ? true : false}
                                >Prev</button></li>
                                {renderPageNumbers}
                            <li><button onClick={handleNextbtn}
                                disabled = {currentPage == pages[pages.length - 1] ? true : false}
                                >Next</button></li>
                        </ul>
                   </div>
                </Grid>
                
                            
            </div>
                
        </>
    )


                </div>
           </div>
        </div>
    )
};

export default TeamView;