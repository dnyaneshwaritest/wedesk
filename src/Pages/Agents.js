import React, {useState} from "react";
import { Button, Card, Grid} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AgentData from "../JSON/agentData.json";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { NavLink } from "react-router-dom";
const Agents = ()=>{
    const [currentPage, setCurrentPage] =useState(1);
    const [itemsPerPage, setItemPerPage]=useState(8);

    const [pageNumberLimit, setPageNumberLimit] = useState(4);
    const [maxPageNumberLimit, setmaxPageNumberLimit] =useState(4);
    const [minPageNumberLimit, setminPageNumberLimit]=useState(0);


    const handleClick =(event) =>{
        setCurrentPage(Number(event.target.id));
    }
    const pages = [];
    for (let i=1; i<=Math.ceil(AgentData.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = AgentData.slice(indexOfFirstItem, indexOfLastItem);

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

    const renderData = (AgentData)=>{
        return(
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
                {AgentData.map((data, index)=>
                <Grid item xs={3}  >
                    <Card key={index} className="card_card">
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

    return(
        <>
           <div>
                    <div className='maindashboard'>
                        <h2 className='dashboard-Page'>Agents</h2>
                    </div>
                    <div className='addbtn'>
                    <AddCircleOutlinedIcon fontSize="small" className='plussym-btn ' />
                       <NavLink to="/agents/addagents" style={{textDecoration: "none"}}>
                            <Button type="Submit" style={{color: "#FFFFFF"}} className = "new"> 
                                    Add New
                                </Button>
                       </NavLink>
                    </div>
            </div>
            <div className="agent_card">
                {/* {AgentData.map((data, index)=>
                    <Card key={index} className="card_card">
                        <img src={ `${data.path}`} className="card_path" /> <br/>
                        
                        <div className="card-div">
                        <label className="card-name" >{data.name}</label><br/>
                        <label className="card-team">{data.selectTeam}</label><br/>
                        <label className="card-service">{data.service}</label>
                        </div><br/>
                        <label className="card-email"><div className="card-localph"><LocalPhoneIcon fontSize="small" className="card-ph-icon"/></div>{data.mobile}</label><br/><br/><br/>
                        <label className="card-email"><div className="card-localph"><EmailIcon fontSize="small"  className="card-ph-icon"/></div>{data.email}</label>
                    </Card>
                )} */}
                <Grid>
                    <Grid >
                    {renderData(currentItems)}
                    </Grid>
                    <ul className="pageNumbers">
                   <li><button onClick={handlePrevtbtn}
                        disabled = {currentPage == pages[0] ? true : false}
                        >Prev</button></li>
                         {renderPageNumbers}
                    <li><button onClick={handleNextbtn}
                        disabled = {currentPage == pages[pages.length - 1] ? true : false}
                        >Next</button></li>
                </ul>
                </Grid>
                
                            
            </div>
                
        </>
    )
};
export default Agents;
